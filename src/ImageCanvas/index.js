// @flow weak

import { createTheme, ThemeProvider } from "@mui/material/styles"
import { makeStyles } from "@mui/styles"
import type { Node } from "react"
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { Layer, Line, Stage } from "react-konva"
import { useRafState } from "react-use"
import { Matrix } from "transformation-matrix-js"
import useEventCallback from "use-event-callback"

import Crosshairs from "../Crosshairs"
import useExcludePattern from "../hooks/use-exclude-pattern"
import useWindowSize from "../hooks/use-window-size.js"
import ImageMask from "../ImageMask"
import BrushPopup from "../LazyBrush/BrushPoup"
import PointDistances from "../PointDistances"
import PreventScrollToParents from "../PreventScrollToParents"
import RegionSelectAndTransformBoxes from "../RegionSelectAndTransformBoxes"
import RegionShapes from "../RegionShapes"
import RegionTags from "../RegionTags"
import VideoOrImageCanvasBackground from "../VideoOrImageCanvasBackground"
import type { Region } from "./region-tools.js"
import styles from "./styles"
import useMouse from "./use-mouse"
import useProjectRegionBox from "./use-project-box"
import useWasdMode from "./use-wasd-mode"

const theme = createTheme()
let newStyles = {
  ...styles,
  ["konvajs-content"]: {
    left: window.brushLeft,
    top: window.brushTop,
    zIndex: "1000 !important",
    position: "absolute !important",
  },
}
const useStyles = makeStyles((theme) => styles)
type Props = {
  regions: Array<Region>,
  imageSrc?: string,
  videoSrc?: string,
  videoTime?: number,
  keypointDefinitions?: KeypointDefinitions,
  onMouseMove?: ({ x: number, y: number }) => any,
  onMouseDown?: ({ x: number, y: number }) => any,
  onMouseUp?: ({ x: number, y: number }) => any,
  dragWithPrimary?: boolean,
  zoomWithPrimary?: boolean,
  createWithPrimary?: boolean,
  showTags?: boolean,
  realSize?: { width: number, height: number, unitName: string },
  showCrosshairs?: boolean,
  showMask?: boolean,
  showHighlightBox?: boolean,
  showPointDistances?: boolean,
  pointDistancePrecision?: number,
  regionClsList?: Array<string>,
  regionTagList?: Array<string>,
  allowedArea?: { x: number, y: number, w: number, h: number },
  RegionEditLabel?: Node,
  videoPlaying?: boolean,
  isMuted?: boolean,
  zoomOnAllowedArea?: boolean,
  fullImageSegmentationMode?: boolean,
  autoSegmentationOptions?: Object,
  modifyingAllowedArea?: boolean,
  allowComments?: Boolean,
  onChangeRegion: (Region) => any,
  onBeginRegionEdit: (Region) => any,
  onCloseRegionEdit: (Region) => any,
  onDeleteRegion: (Region) => any,
  onBeginBoxTransform: (Box, [number, number]) => any,
  onBeginMovePolygonPoint: (Polygon, index: number) => any,
  onBeginMoveKeypoint: (Keypoints, index: number) => any,
  onAddPolygonPoint: (Polygon, point: [number, number], index: number) => any,
  onSelectRegion: (Region) => any,
  onBeginMovePoint: (Point) => any,
  onImageOrVideoLoaded: ({
    naturalWidth: number,
    naturalHeight: number,
    duration?: number,
  }) => any,
  onChangeVideoTime: (number) => any,
  onRegionClassAdded: () => {},
  onChangeVideoPlaying?: Function,
}

const getDefaultMat = (allowedArea = null, { iw, ih } = {}) => {
  let mat = Matrix.from(1, 0, 0, 1, -10, -10)
  if (allowedArea && iw) {
    mat = mat
      .translate(allowedArea.x * iw, allowedArea.y * ih)
      .scaleU(allowedArea.w + 0.05)
  }
  return mat
}
const getRandomId = () => Math.random().toString().split(".")[1]
export const ImageCanvas = ({
  regions,
  imageSrc,
  videoSrc,
  videoTime,
  realSize,
  showTags,
  onMouseMove = (p) => null,
  onMouseDown = (p) => null,
  onMouseUp = (p) => null,
  dragWithPrimary = false,
  zoomWithPrimary = false,
  createWithPrimary = false,
  pointDistancePrecision = 0,
  regionClsList,
  regionTagList,
  showCrosshairs,
  showHighlightBox = true,
  showPointDistances,
  allowedArea,
  RegionEditLabel = null,
  videoPlaying = false,
  isMuted = false,
  showMask = true,
  fullImageSegmentationMode,
  autoSegmentationOptions,
  onImageOrVideoLoaded,
  onChangeRegion,
  onBeginRegionEdit,
  onCloseRegionEdit,
  onBeginBoxTransform,
  onBeginMovePolygonPoint,
  onAddPolygonPoint,
  onBeginMoveKeypoint,
  onSelectRegion,
  onBeginMovePoint,
  onDeleteRegion,
  onChangeVideoTime,
  onChangeVideoPlaying,
  onRegionClassAdded,
  zoomOnAllowedArea = true,
  modifyingAllowedArea = false,
  keypointDefinitions,
  allowComments,
  selectedTool,
  lazyBrush,
  lazyBrushClassification,
  lazyBrushTags,
  yPosition,
  xPosition,
  brushRadius,
  tool,
  setLines,
  lines,
  invaild_show,
  delete_annotation,
  setdelete_annotation,
  annotationType,
  selectedCls,
}: Props) => {
  const classes = useStyles()

  const canvasEl = React.useRef(null)
  // console.log(canvasEl.current.clientHeight,canvasEl.current.clientWidth)
  const layoutParams = useRef({})
  const [dragging, changeDragging] = useRafState(false)
  const [maskImagesLoaded, changeMaskImagesLoaded] = useRafState(0)
  const [zoomStart, changeZoomStart] = useRafState(null)
  const [zoomEnd, changeZoomEnd] = useRafState(null)
  const [mat, changeMat] = useRafState(getDefaultMat())
  const maskImages = useRef({})
  const windowSize = useWindowSize()
  const getScaledPoint = (stage, scale) => {
    const { x, y } = stage.getPointerPosition()
    return { x: x / scale, y: y / scale }
  }
  const isDrawing = React.useRef(false)

  const handleMouseDown = (e) => {
    isDrawing.current = true
    const pos = getScaledPoint(stage, ((1 / mat.a) * 100) / 100)

    if (tool === "pen") {
      setLines([
        ...lines,
        {
          id: getRandomId(),
          qc_label: invaild_show,
          tool,
          points: [pos.x, pos.y],
          brushRadius,
          popUp: {
            open: false,
            classification: {
              value: selectedCls || "",
              label: selectedCls || "",
            },
          },
          keyframes: videoTime,
        },
      ])
    } else {
      setLines([
        ...lines,
        {
          id: getRandomId(),
          qc_label: invaild_show,
          tool,
          points: [pos.x, pos.y],
          brushRadius,
          keyframes: videoTime,
        },
      ])
    }
    window.undoArray = [...window.undoArray, "brush"]
  }

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return
    }
    // const stage = e.target.getStage()
    const point = getScaledPoint(stage, ((1 / mat.a) * 100) / 100)
    let lastLine = lines[lines.length - 1]
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y])

    // replace last
    lines.splice(lines.length - 1, 1, lastLine)
    setLines(lines.concat())
  }

  const handleMouseUp = () => {
    isDrawing.current = false
    const line = [...lines]
    setLines(line)

    const { x, y } = getScaledPoint(stage, ((1 / mat.a) * 100) / 100)

    // if (tool === "pen") {
    //   setLines([
    //     ...lines,
    //     {
    //       tool,
    //       points: [x, y],
    //       brushRadius,
    //       popUp: {
    //         open: false,
    //       },
    //     },
    //   ])
    // } else {
    //   setLines([
    //     ...lines,
    //     {
    //       tool,
    //       points: [x, y],
    //       brushRadius,
    //     },
    //   ])
    // }
  }
  const getLatestMat = useEventCallback(() => mat)
  useWasdMode({ getLatestMat, changeMat })

  const { mouseEvents, mousePosition } = useMouse({
    canvasEl,
    dragging,
    mat,
    layoutParams,
    changeMat,
    zoomStart,
    zoomEnd,
    changeZoomStart,
    changeZoomEnd,
    changeDragging,
    zoomWithPrimary,
    dragWithPrimary,
    onMouseMove,
    onMouseDown,
    onMouseUp,
  })

  useLayoutEffect(() => changeMat(mat.clone()), [changeMat, mat, windowSize])
  let stage = null
  const setStageRef = (ref) => {
    if (ref) {
      stage = ref
    }
  }
  const innerMousePos = mat.applyToPoint(
    mousePosition.current.x,
    mousePosition.current.y
  )

  const projectRegionBox = useProjectRegionBox({ layoutParams, mat })

  const [imageDimensions, changeImageDimensions] = useState()
  const imageLoaded = Boolean(imageDimensions && imageDimensions.naturalWidth)

  const onVideoOrImageLoaded = useEventCallback(
    ({ naturalWidth, naturalHeight, duration }) => {
      const dims = { naturalWidth, naturalHeight, duration }
      if (onImageOrVideoLoaded) onImageOrVideoLoaded(dims)
      changeImageDimensions(dims)
      // Redundant update to fix rerendering issues
      setTimeout(() => changeImageDimensions(dims), 10)
    }
  )

  const excludePattern = useExcludePattern()

  const canvas = canvasEl.current
  if (canvas && imageLoaded) {
    const { clientWidth, clientHeight } = canvas

    const fitScale = Math.max(
      imageDimensions.naturalWidth / (clientWidth - 20),
      imageDimensions.naturalHeight / (clientHeight - 20)
    )

    const [iw, ih] = [
      imageDimensions.naturalWidth / fitScale,
      imageDimensions.naturalHeight / fitScale,
    ]

    layoutParams.current = {
      iw,
      ih,
      fitScale,
      canvasWidth: clientWidth,
      canvasHeight: clientHeight,
    }
  }

  useEffect(() => {
    if (!imageLoaded) return
    changeMat(
      getDefaultMat(
        zoomOnAllowedArea ? allowedArea : null,
        layoutParams.current
      )
    )
    // eslint-disable-next-line
  }, [imageLoaded])

  useLayoutEffect(() => {
    if (!imageDimensions) return
    const { clientWidth, clientHeight } = canvas
    canvas.width = clientWidth
    canvas.height = clientHeight
    const context = canvas.getContext("2d")

    context.save()
    context.transform(...mat.clone().inverse().toArray())

    const { iw, ih } = layoutParams.current

    if (allowedArea) {
      // Pattern to indicate the NOT allowed areas
      const { x, y, w, h } = allowedArea
      context.save()
      context.globalAlpha = 1
      const outer = [
        [0, 0],
        [iw, 0],
        [iw, ih],
        [0, ih],
      ]
      const inner = [
        [x * iw, y * ih],
        [x * iw + w * iw, y * ih],
        [x * iw + w * iw, y * ih + h * ih],
        [x * iw, y * ih + h * ih],
      ]
      context.moveTo(...outer[0])
      outer.forEach((p) => context.lineTo(...p))
      context.lineTo(...outer[0])
      context.closePath()

      inner.reverse()
      context.moveTo(...inner[0])
      inner.forEach((p) => context.lineTo(...p))
      context.lineTo(...inner[0])

      context.fillStyle = excludePattern || "#f00"
      context.fill()

      context.restore()
    }

    context.restore()
  })

  const { iw, ih } = layoutParams.current

  let zoomBox =
    !zoomStart || !zoomEnd
      ? null
      : {
          ...mat.clone().inverse().applyToPoint(zoomStart.x, zoomStart.y),
          w: (zoomEnd.x - zoomStart.x) / mat.a,
          h: (zoomEnd.y - zoomStart.y) / mat.d,
        }
  if (zoomBox) {
    if (zoomBox.w < 0) {
      zoomBox.x += zoomBox.w
      zoomBox.w *= -1
    }
    if (zoomBox.h < 0) {
      zoomBox.y += zoomBox.h
      zoomBox.h *= -1
    }
  }

  const imagePosition = {
    topLeft: mat.clone().inverse().applyToPoint(0, 0),
    bottomRight: mat.clone().inverse().applyToPoint(iw, ih),
  }

  const highlightedRegion = useMemo(() => {
    const highlightedRegions = regions.filter((r) => r.highlighted)
    if (highlightedRegions.length !== 1) return null
    return highlightedRegions[0]
  }, [regions])

  const setCanvasRef = (ref) => {
    if (canvasEl.current !== ref) {
      canvasEl.current = ref
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: "100%",
          height: "100%",
          maxHeight: "calc(100vh - 68px)",
          position: "relative",
          overflow: "hidden",
          cursor:
            selectedTool === "create-a-brush"
              ? `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAQAAAAngNWGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAHdElNRQfmCAwJNiDLzCx0AAAA90lEQVQoz43PPyvEcRwH8Nfd6cRgUBZdSixHOvNt/g4KgzJ4BCZWj4CFRR4BMtgNGDAoJXeD4ZLFIFlEDovc1+Ck636/O+/51fvz/qQ0yrAlH+41ybBDn87lG7O0TUEQXMqTimEDJpX0yqBb1k00HLRh0YMd/TLIqESxIUcqgrJVUy4EVybqWc5xdVvwZs2sbeMS9W1/LAjeLeuQjGqr1MCikahttW1B0Wjzoz+s4Qu/bOx/LGJbu3VfzdtaTZt31mwbXQ7smXNaZYWoo5B1rWK3SgvRbbTI6JSwIGlLyb6TONinzbMXPdJWvIpJwoycW3cePSmLzTfl9n00bWsN+AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wOC0xMlQwOTo1NDoyNiswMDowMPW3aEAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDgtMTJUMDk6NTQ6MjYrMDA6MDCE6tD8AAAAL3RFWHRzdmc6Y29tbWVudAA/eG1sIHZlcnNpb249IjEuMCIgc3RhbmRhbG9uZT0ibm8iP+TB92sAAAAASUVORK5CYII=) 0 50, auto`
              : selectedTool === "eraser"
              ? `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAQAAAAngNWGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADOIAAAziARMbrlMAAAAHdElNRQfmCAwJOQPuM0HJAAABbklEQVQoz33Sv0tVYRwG8M97rnQ1JQjDQRps6JcNLQ1JFASt2pVukzU5FS5OtjYIDeFwHRv0b/AH2VZTJljSkJ0ul0C8OGRcKCtE4jack/dcO/RM7/vwvM/z/fEW5CEYcFmXhqb/oGDYS5+sGdfZIo8iMuKpb57pdd+e937nuUVGxVZcwmlztjxUzAst2bRiML33m8+TRkZ9FruS4frNqXugWMi43Tat0zFfbDhI2e/WDRiz33IrqXrumoodU463uS6o/9tCn4p6m7TDTOJYUBJ7cdjCKbPqpnSnJZVVLSZu1UyniTQpoEtQVrNokLs+pKFZ9Jm17ZF7YssuQOyVizmj71Wx66sl5xLiwBMh92OMa/x1g1Ubrufs6I7YkvMt6oZVb49II2U1y1kZXPXaWkYaKdu04Gx7JTf1GDKhpmJX0HTGpKIZH0Wp5pd3wRsnBT067KUbLuq270cmoeFxcMsJNDXT98k5ZCYR/LT+B8sFZXXqS1fMAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA4LTEyVDA5OjU2OjU3KzAwOjAwXfC60AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wOC0xMlQwOTo1Njo1NyswMDowMCytAmwAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC) 0 50, auto`
              : createWithPrimary
              ? "crosshair"
              : dragging
              ? "grabbing"
              : dragWithPrimary
              ? "grab"
              : zoomWithPrimary
              ? // ? mat.a < 1
                //   ? "zoom-out"
                //   : "zoom-in"
                "zoom-in"
              : undefined,
        }}
      >
        {showCrosshairs && (
          <Crosshairs key="crossHairs" mousePosition={mousePosition} />
        )}
        {imageLoaded && !dragging && (
          <RegionSelectAndTransformBoxes
            key="regionSelectAndTransformBoxes"
            regions={
              !modifyingAllowedArea || !allowedArea
                ? regions
                : [
                    {
                      type: "box",
                      id: "$$allowed_area",
                      cls: "allowed_area",
                      highlighted: true,
                      x: allowedArea.x,
                      y: allowedArea.y,
                      w: allowedArea.w,
                      h: allowedArea.h,
                      visible: true,
                      color: "#ff0",
                    },
                  ]
            }
            mouseEvents={mouseEvents}
            projectRegionBox={projectRegionBox}
            dragWithPrimary={dragWithPrimary}
            createWithPrimary={createWithPrimary}
            zoomWithPrimary={zoomWithPrimary}
            onBeginMovePoint={onBeginMovePoint}
            onSelectRegion={onSelectRegion}
            layoutParams={layoutParams}
            mat={mat}
            onBeginBoxTransform={onBeginBoxTransform}
            onBeginMovePolygonPoint={onBeginMovePolygonPoint}
            onBeginMoveKeypoint={onBeginMoveKeypoint}
            onAddPolygonPoint={onAddPolygonPoint}
            showHighlightBox={showHighlightBox}
          />
        )}
        <div
          className={classes.zoomIndicator}
          style={{ zIndex: 10000000, right: "320px" }}
        >
          {((1 / mat.a) * 100).toFixed(0)}%
        </div>
        {imageLoaded && showTags && !dragging && (
          <PreventScrollToParents key="regionTags">
            <RegionTags
              regions={regions}
              projectRegionBox={projectRegionBox}
              mouseEvents={mouseEvents}
              regionClsList={regionClsList}
              regionTagList={regionTagList}
              onBeginRegionEdit={onBeginRegionEdit}
              onChangeRegion={onChangeRegion}
              onCloseRegionEdit={onCloseRegionEdit}
              onDeleteRegion={onDeleteRegion}
              layoutParams={layoutParams}
              imageSrc={imageSrc}
              RegionEditLabel={RegionEditLabel}
              onRegionClassAdded={onRegionClassAdded}
              allowComments={allowComments}
              invaild_show={invaild_show}
              delete_annotation={delete_annotation}
              setdelete_annotation={setdelete_annotation}
            />
          </PreventScrollToParents>
        )}

        {/* {!showTags && highlightedRegion && (
          <div key="topLeftTag" className={classes.fixedRegionLabel}>
            <RegionLabel
              disableClose
              allowedClasses={regionClsList}
              allowedTags={regionTagList}
              onChange={onChangeRegion}
              onDelete={onDeleteRegion}
              editing
              region={highlightedRegion}
              imageSrc={imageSrc}
              allowComments={allowComments}
            />
          </div>
        )} */}

        {zoomWithPrimary && zoomBox !== null && (
          <div
            key="zoomBox"
            style={{
              position: "absolute",
              zIndex: 1,
              border: "1px solid #fff",
              pointerEvents: "none",
              left: zoomBox.x,
              top: zoomBox.y,
              width: zoomBox.w,
              height: zoomBox.h,
            }}
          />
        )}
        {showPointDistances && (
          <PointDistances
            key="pointDistances"
            regions={regions}
            realSize={realSize}
            projectRegionBox={projectRegionBox}
            pointDistancePrecision={pointDistancePrecision}
          />
        )}
        <PreventScrollToParents
          style={{ width: "100%", height: "100%" }}
          {...mouseEvents}
        >
          <>
            {fullImageSegmentationMode && (
              <ImageMask
                hide={!showMask}
                autoSegmentationOptions={autoSegmentationOptions}
                imagePosition={imagePosition}
                regionClsList={regionClsList}
                imageSrc={imageSrc}
                regions={regions}
              />
            )}
            {/* <div
              style={{
                left: window.brushLeft,
                top: window.brushTop,
                position: "absolute",
              }}
            > */}
            <div
              style={{ width: "100%", height: "100vh", position: "absolute" }}
              onMouseUp={
                selectedTool === "create-a-brush" || selectedTool === "eraser"
                  ? handleMouseUp
                  : () => {}
              }
            >
              <Stage
                width={
                  window.brushWidth > 0 ? window.brushWidth : window.innerWidth
                }
                height={
                  window.brushHeight > 0
                    ? window.brushHeight
                    : window.innerHeight
                }
                onMouseDown={
                  selectedTool === "create-a-brush" || selectedTool === "eraser"
                    ? handleMouseDown
                    : () => {}
                }
                onMousemove={
                  selectedTool === "create-a-brush" || selectedTool === "eraser"
                    ? handleMouseMove
                    : () => {}
                }
                onMouseup={handleMouseUp}
                // selectedTool === "create-a-brush" || selectedTool === "eraser"
                //   ? handleMouseUp
                //   : () => {}
                // handleMouseUp
                // }
                style={{
                  left: window.brushLeft,
                  top: window.brushTop,
                  position: "absolute",
                  height:
                    window.brushHeight > 0
                      ? window.brushHeight
                      : window.innerHeight,
                  width:
                    window.brushWidth > 0
                      ? window.brushWidth
                      : window.innerWidth,
                }}
                ref={setStageRef}
              >
                <Layer>
                  {lines.map((line, i) => (
                    <>
                      <Line
                        key={i}
                        points={line.points}
                        stroke={
                          line.tool === "eraser"
                            ? "#df4b26"
                            : line.color || "rgba(223, 75, 38,0.55)"
                        }
                        strokeWidth={line.brushRadius}
                        tension={0.5}
                        lineCap="round"
                        globalCompositeOperation={
                          line.tool === "eraser"
                            ? "destination-out"
                            : "source-over"
                        }
                        scale={{
                          x: ((1 / mat.a) * 100) / 100,
                          y: ((1 / mat.a) * 100) / 100,
                        }}
                      />
                    </>
                  ))}
                </Layer>
              </Stage>
            </div>
            <div
              style={{
                left: window.brushLeft,
                top: window.brushTop,
                position: "absolute",
              }}
            >
              <BrushPopup
                top={window.brushTop}
                left={window.brushLeft}
                showTags={showTags}
                lines={lines}
                lazyBrushClassification={lazyBrushClassification}
                lazyBrushTags={lazyBrushTags}
                setLines={setLines}
                scale={((1 / mat.a) * 100) / 100}
                invaild_show={invaild_show}
                delete_annotation={delete_annotation}
                setdelete_annotation={setdelete_annotation}
                annotationType={annotationType}
                videoTime={videoTime}
              />
            </div>

            <canvas
              style={{ opacity: 0.25 }}
              className={classes.canvas}
              ref={canvasEl}
            />
            <RegionShapes
              mat={mat}
              keypointDefinitions={keypointDefinitions}
              imagePosition={imagePosition}
              regions={regions}
              fullSegmentationMode={fullImageSegmentationMode}
            />
            <VideoOrImageCanvasBackground
              videoPlaying={videoPlaying}
              imagePosition={imagePosition}
              mouseEvents={mouseEvents}
              onLoad={onVideoOrImageLoaded}
              videoTime={videoTime}
              videoSrc={videoSrc}
              imageSrc={imageSrc}
              useCrossOrigin={fullImageSegmentationMode}
              onChangeVideoTime={onChangeVideoTime}
              onChangeVideoPlaying={onChangeVideoPlaying}
              isMuted={isMuted}
            />
            {/* </div> */}
          </>
        </PreventScrollToParents>
      </div>
    </ThemeProvider>
  )
}

export default ImageCanvas

