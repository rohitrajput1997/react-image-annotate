// @flow

import { createTheme, styled, ThemeProvider } from "@mui/material/styles"
import { makeStyles } from "@mui/styles"
import classnames from "classnames"
import Workspace from "ns_workflow_workspace/Workspace"
import type { Node } from "react"
import React, { useCallback, useRef, useState } from "react"
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import { withHotKeys } from "react-hotkeys"
import useEventCallback from "use-event-callback"
import useKey from "use-key-hook"
import getActiveImage from "../Annotator/reducers/get-active-image"
import ClassSelectionMenu from "../ClassSelectionMenu"
import DebugBox from "../DebugSidebarBox"
import HistorySidebarBox from "../HistorySidebarBox"
import ImageCanvas from "../ImageCanvas"
import KeyframesSelector from "../KeyframesSelectorSidebarBox"
import KeyframeTimeline from "../KeyframeTimeline"
import VerticalSlider from "../LazyBrush/BrushSlider"
import RegionSelector from "../RegionSelectorSidebarBox"
import SettingsDialog from "../SettingsDialog"
import { useSettings } from "../SettingsProvider"
import { useDispatchHotkeyHandlers } from "../ShortcutsManager"
import TagsSidebarBox from "../TagsSidebarBox"
import TaskDescription from "../TaskDescriptionSidebarBox"
import getHotkeyHelpText from "../utils/get-hotkey-help-text"
import iconDictionary from "./icon-dictionary"
import styles from "./styles"
import type { MainLayoutState } from "./types"
import useImpliedVideoRegions from "./use-implied-video-regions"

// import Fullscreen from "../Fullscreen"

const emptyArr = []
const theme = createTheme()
const useStyles = makeStyles((theme) => styles)

const HotkeyDiv = withHotKeys(({ hotKeys, children, divRef, ...props }) => (
  <div {...{ ...hotKeys, ...props }} ref={divRef}>
    {children}
  </div>
))

const FullScreenContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  "& .fullscreen": {
    width: "100%",
    height: "100%",
  },
}))

type Props = {
  state: MainLayoutState,
  RegionEditLabel?: Node,
  dispatch: (Action) => any,
  alwaysShowNextButton?: boolean,
  alwaysShowPrevButton?: boolean,
  onRegionClassAdded: () => {},
  hideHeader?: boolean,
  hideHeaderText?: boolean,
}

export const MainLayout = ({
  state,
  dispatch,
  alwaysShowNextButton = false,
  alwaysShowPrevButton = false,
  RegionEditLabel,
  onRegionClassAdded,
  hideHeader,
  hideHeaderText,
  hideNext = false,
  hidePrev = false,
  hideClone = false,
  hideSettings = false,
  hideFullScreen = false,
  hideSave = false,
  issavenextDisabled = false,
  isaddQueryDisabled = false,
  isSubmitDisabled = false,
  lazyBrush = [],
  lazyBrushClassification,
  lazyBrushTags,
  xPosition,
  yPosition,
  lines,
  setLines,
  invalidShow,
  delete_annotation,
  setdelete_annotation,
}: Props) => {
  const classes = useStyles()
  const settings = useSettings()
  const fullScreenHandle = useFullScreenHandle()
  const [openBrush, setBrushOpen] = useState(false)
  const [brushRadius, setbrushRadius] = useState(5)
  const [tool, setTool] = React.useState("pen")
  React.useEffect(() => {
    if (state.selectedTool === "create-a-brush") {
      setTool("pen")
    } else if (state.selectedTool === "eraser") {
      setTool("eraser")
    }
  }, [state.selectedTool])
  const memoizedActionFns = React.useRef({})
  const action = (type: string, ...params: Array<string>) => {
    const fnKey = `${type}(${params.join(",")})`
    if (memoizedActionFns.current[fnKey])
      return memoizedActionFns.current[fnKey]

    const fn = (...args: any) =>
      params.length > 0
        ? dispatch(
            ({
              type,
              ...params.reduce((acc, p, i) => ((acc[p] = args[i]), acc), {}),
            }: any)
          )
        : dispatch({ type, ...args[0] })
    memoizedActionFns.current[fnKey] = fn
    return fn
  }

  const { currentImageIndex, activeImage } = getActiveImage(state)
  let nextImage
  if (currentImageIndex !== null) {
    nextImage = state.images[currentImageIndex + 1]
  }

  useKey(() => dispatch({ type: "CANCEL" }), {
    detectKeys: [27],
  })

  const isAVideoFrame = activeImage && activeImage.frameTime !== undefined
  const innerContainerRef = useRef()
  const hotkeyHandlers = useDispatchHotkeyHandlers({ dispatch })

  let impliedVideoRegions = useImpliedVideoRegions(state)

  const refocusOnMouseEvent = useCallback((e) => {
    if (!innerContainerRef.current) return
    if (innerContainerRef.current.contains(document.activeElement)) return
    if (innerContainerRef.current.contains(e.target)) {
      innerContainerRef.current.focus()
      e.target.focus()
    }
  }, [])

  const canvas = (
    <ImageCanvas
      {...settings}
      showCrosshairs={
        settings.showCrosshairs &&
        !["select", "pan", "zoom", "create-a-brush"].includes(
          state.selectedTool
        )
      }
      key={state.selectedImage}
      showMask={state.showMask}
      fullImageSegmentationMode={state.fullImageSegmentationMode}
      autoSegmentationOptions={state.autoSegmentationOptions}
      showTags={state.showTags}
      allowedArea={state.allowedArea}
      modifyingAllowedArea={state.selectedTool === "modify-allowed-area"}
      regionClsList={state.regionClsList}
      regionTagList={state.regionTagList}
      regions={
        state.annotationType === "image"
          ? activeImage.regions || []
          : impliedVideoRegions || []
      }
      realSize={activeImage ? activeImage.realSize : undefined}
      videoPlaying={state.videoPlaying}
      imageSrc={state.annotationType === "image" ? activeImage.src : null}
      videoSrc={state.annotationType === "video" ? state.videoSrc : null}
      pointDistancePrecision={state.pointDistancePrecision}
      createWithPrimary={state.selectedTool.includes("create")}
      dragWithPrimary={state.selectedTool === "pan"}
      zoomWithPrimary={state.selectedTool === "zoom"}
      showPointDistances={state.showPointDistances}
      videoTime={
        state.annotationType === "image"
          ? state.selectedImageFrameTime
          : state.currentVideoTime
      }
      keypointDefinitions={state.keypointDefinitions}
      onMouseMove={action("MOUSE_MOVE")}
      onMouseDown={action("MOUSE_DOWN")}
      onMouseUp={action("MOUSE_UP")}
      onChangeRegion={action("CHANGE_REGION", "region")}
      onBeginRegionEdit={action("OPEN_REGION_EDITOR", "region")}
      onCloseRegionEdit={action("CLOSE_REGION_EDITOR", "region")}
      onDeleteRegion={action("DELETE_REGION", "region")}
      onBeginBoxTransform={action("BEGIN_BOX_TRANSFORM", "box", "directions")}
      onBeginMovePolygonPoint={action(
        "BEGIN_MOVE_POLYGON_POINT",
        "polygon",
        "pointIndex"
      )}
      onBeginMoveKeypoint={action(
        "BEGIN_MOVE_KEYPOINT",
        "region",
        "keypointId"
      )}
      onAddPolygonPoint={action(
        "ADD_POLYGON_POINT",
        "polygon",
        "point",
        "pointIndex"
      )}
      onSelectRegion={action("SELECT_REGION", "region")}
      onBeginMovePoint={action("BEGIN_MOVE_POINT", "point")}
      onImageLoaded={action("IMAGE_LOADED", "image")}
      RegionEditLabel={RegionEditLabel}
      onImageOrVideoLoaded={action("IMAGE_OR_VIDEO_LOADED", "metadata")}
      onChangeVideoTime={action("CHANGE_VIDEO_TIME", "newTime")}
      onChangeVideoPlaying={action("CHANGE_VIDEO_PLAYING", "isPlaying")}
      onRegionClassAdded={onRegionClassAdded}
      allowComments={state.allowComments}
      selectedTool={state.selectedTool}
      lazyBrush={lazyBrush}
      lazyBrushClassification={lazyBrushClassification}
      lazyBrushTags={lazyBrushTags}
      yPosition={yPosition}
      xPosition={xPosition}
      brushRadius={brushRadius}
      tool={tool}
      lines={lines}
      setLines={setLines}
      invalidShow={invalidShow}
      setdelete_annotation={setdelete_annotation}
      delete_annotation={delete_annotation}
    />
  )

  const onClickIconSidebarItem = useEventCallback((item) => {
    dispatch({ type: "SELECT_TOOL", selectedTool: item.name })
  })

  const onClickHeaderItem = useEventCallback((item) => {
    if (item.name === "Fullscreen") {
      fullScreenHandle.enter()
    } else if (item.name === "Window") {
      fullScreenHandle.exit()
    } else if (item.name === "Brush Radius") {
      setBrushOpen(true)
    }

    dispatch({ type: "HEADER_BUTTON_CLICKED", buttonName: item.name })
  })

  const debugModeOn = Boolean(window.localStorage.$ANNOTATE_DEBUG_MODE && state)
  const nextImageHasRegions =
    !nextImage || (nextImage.regions && nextImage.regions.length > 0)

  const removeBrush = () => {}

  return (
    <ThemeProvider theme={theme}>
      <FullScreenContainer>
        <FullScreen
          handle={fullScreenHandle}
          onChange={(open) => {
            if (!open) {
              fullScreenHandle.exit()
              action("HEADER_BUTTON_CLICKED", "buttonName")("Window")
            }
          }}
        >
          <HotkeyDiv
            tabIndex={-1}
            divRef={innerContainerRef}
            onMouseDown={refocusOnMouseEvent}
            onMouseOver={refocusOnMouseEvent}
            allowChanges
            handlers={hotkeyHandlers}
            className={classnames(
              classes.container,
              state.fullScreen && "Fullscreen"
            )}
          >
            <Workspace
              allowFullscreen
              iconDictionary={iconDictionary}
              hideHeader={hideHeader}
              hideHeaderText={hideHeaderText}
              headerLeftSide={[
                state.annotationType === "video" ? (
                  <KeyframeTimeline
                    currentTime={state.currentVideoTime}
                    duration={state.videoDuration}
                    onChangeCurrentTime={action("CHANGE_VIDEO_TIME", "newTime")}
                    keyframes={state.keyframes}
                  />
                ) : activeImage ? (
                  <div
                    className={`${classes.headerTitle} image_annotation_title`}
                  >
                    {activeImage.name}
                  </div>
                ) : null,
              ].filter(Boolean)}
              headerItems={[
                !hidePrev && {
                  name: "Prev",
                  className: "prev",
                  iconName: "Prev",
                },
                !hideNext && {
                  name: "Next",
                  className: "next",
                  iconName: "Next",
                },
                state.annotationType !== "video"
                  ? null
                  : !state.videoPlaying
                  ? { name: "Play", className: "play", iconName: "Play" }
                  : { name: "Pause", className: "pause", iconName: "Pause" },
                !hideClone &&
                  !nextImageHasRegions &&
                  activeImage.regions && {
                    name: "Clone",
                    className: "clone",
                    iconName: "Clone",
                  },
                !hideSettings && {
                  name: "Settings",
                  className: "settings",
                  iconName: "Settings",
                },
                // state.selectedTool === "create-a-brush" && {
                //   name: "Brush Radius",
                //   className: "brushRadius",
                //   iconName: "brush radius",
                // },
                {
                  name: "Add Query",
                  className: "query",
                  iconName: "add query",
                  disabled: isaddQueryDisabled,
                },
                {
                  name: "Save & next",
                  className: "savenext",
                  iconName: "save & next",
                  disabled: issavenextDisabled,
                },
                !hideSave && {
                  name: "Submit",
                  className: "save",
                  iconName: "submit",
                  disabled: isSubmitDisabled,
                },

                !hideFullScreen &&
                  (state.fullScreen
                    ? {
                        name: "Window",
                        className: "window",
                        iconName: "Window",
                      }
                    : {
                        name: "Fullscreen",
                        className: "Fullscreen",
                        iconName: "Fullscreen",
                      }),
              ].filter(Boolean)}
              onClickHeaderItem={onClickHeaderItem}
              onClickIconSidebarItem={onClickIconSidebarItem}
              selectedTools={[
                state.selectedTool,
                state.showTags && "show-tags",
                state.showMask && "show-mask",
              ].filter(Boolean)}
              selectToolsP={
                state.showTags
                  ? ["show-tags", state.selectedTool]
                  : [state.selectedTool]
              }
              iconSidebarItems={[
                {
                  name: "select",
                  helperText: "Select" + getHotkeyHelpText("select_tool"),
                  // alwaysShowing: true,
                  className: "select",
                },
                {
                  name: "pan",
                  helperText:
                    "Drag/Pan (right or middle click)" +
                    getHotkeyHelpText("pan_tool"),
                  // alwaysShowing: true,
                  className: "pan",
                },

                {
                  name: "zoom",
                  helperText:
                    "Zoom In/Out (scroll)" + getHotkeyHelpText("zoom_tool"),
                  // alwaysShowing: true,
                  className: "zoom",
                },
                {
                  name: "show-tags",
                  helperText: "Show / Hide Tags",
                  alwaysShowing: true,
                  className: "tags",
                },
                {
                  name: "create-point",
                  helperText: "Add Point" + getHotkeyHelpText("create_point"),
                  className: "create_point",
                },
                {
                  name: "create-box",
                  helperText:
                    "Add Bounding Box" +
                    getHotkeyHelpText("create_bounding_box"),
                  className: "create_box",
                },
                {
                  name: "create-a-brush",
                  helperText:
                    "Create By Paint Brush" +
                    getHotkeyHelpText("create-a-brush"),
                  alwaysShowing: true,
                  className: "create-a-brush",
                },

                {
                  name: "create-polygon",
                  helperText:
                    "Add Polygon" + getHotkeyHelpText("create_polygon"),
                  className: "create_polygon",
                },
                {
                  name: "create-line",
                  helperText: "Add Line",
                  className: "add_line",
                },
                {
                  name: "create-expanding-line",
                  helperText: "Add Expanding Line",
                  className: "create_expand",
                },
                {
                  name: "create-keypoints",
                  helperText: "Add Keypoints (Pose)",
                  className: "create_keypoint",
                },
                state.fullImageSegmentationMode && {
                  name: "show-mask",
                  alwaysShowing: true,
                  helperText: "Show / Hide Mask",
                  className: "show_hids_mask",
                },
                {
                  name: "modify-allowed-area",
                  helperText: "Modify Allowed Area",
                  className: "modify_allow_area",
                },
                {
                  name: "undo_anntation",
                  helperText: "undo annotation",
                  alwaysShowing: true,
                },
                {
                  name: "eraser",
                  helperText: "Eraser",
                  alwaysShowing: true,
                },
              ]
                .filter(Boolean)
                .filter(
                  (a) => a.alwaysShowing || state.enabledTools.includes(a.name)
                )}
              rightSidebarItems={[
                debugModeOn && (
                  <DebugBox state={debugModeOn} lastAction={state.lastAction} />
                ),
                state.taskDescription && (
                  <TaskDescription description={state.taskDescription} />
                ),
                state.regionClsList && (
                  <ClassSelectionMenu
                    selectedCls={state.selectedCls}
                    regionClsList={state.regionClsList}
                    onSelectCls={action("SELECT_CLASSIFICATION", "cls")}
                  />
                ),
                state.labelImages && (
                  <TagsSidebarBox
                    currentImage={activeImage}
                    imageClsList={state.imageClsList}
                    imageTagList={state.imageTagList}
                    onChangeImage={action("CHANGE_IMAGE", "delta")}
                    expandedByDefault
                  />
                ),
                // (state.images?.length || 0) > 1 && (
                //   <ImageSelector
                //     onSelect={action("SELECT_REGION", "region")}
                //     images={state.images}
                //   />
                // ),
                <RegionSelector
                  regions={activeImage ? activeImage.regions : emptyArr}
                  onSelectRegion={action("SELECT_REGION", "region")}
                  onDeleteRegion={action("DELETE_REGION", "region")}
                  onChangeRegion={action("CHANGE_REGION", "region")}
                />,
                state.keyframes && (
                  <KeyframesSelector
                    onChangeVideoTime={action("CHANGE_VIDEO_TIME", "newTime")}
                    onDeleteKeyframe={action("DELETE_KEYFRAME", "time")}
                    onChangeCurrentTime={action("CHANGE_VIDEO_TIME", "newTime")}
                    currentTime={state.currentVideoTime}
                    duration={state.videoDuration}
                    keyframes={state.keyframes}
                  />
                ),
                <HistorySidebarBox
                  history={state.history}
                  onRestoreHistory={action("RESTORE_HISTORY")}
                  line={lines}
                  setLines={setLines}
                />,
              ].filter(Boolean)}
            >
              <div
                style={{
                  display: "flex",

                  justifyContent: "center",

                  alignItems: "center",
                }}
              >
                {state.selectedTool === "create-a-brush" ||
                state.selectedTool === "eraser" ? (
                  <div
                    style={{
                      maxHeight: "300px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",

                      alignItems: "center",

                      height: "300px",
                      padding: "8px 4px",
                      backgroundColor: "white",
                      boxShadow: "5px 5px 10px rgb(0 0 0 / 10%)",
                      margin: "0px 8px",
                    }}
                  >
                    <VerticalSlider
                      brushRadius={brushRadius}
                      setbrushRadius={setbrushRadius}
                      setTool={setTool}
                      selectTool={state.selectedTool}
                    />
                  </div>
                ) : null}
                {canvas}
              </div>
            </Workspace>
            {/* <BrushDialog
              open={openBrush}
              onClose={() => {
                setBrushOpen(false)
              }}
              brushRadius={brushRadius}
              setbrushRadius={setbrushRadius}
            /> */}
            <SettingsDialog
              open={state.settingsOpen}
              onClose={() =>
                dispatch({
                  type: "HEADER_BUTTON_CLICKED",
                  buttonName: "Settings",
                })
              }
            />
          </HotkeyDiv>
        </FullScreen>
      </FullScreenContainer>
    </ThemeProvider>
  )
}

export default MainLayout

