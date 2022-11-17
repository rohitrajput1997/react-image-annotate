// @flow

import { Grid } from "@mui/material"
import React, { useEffect, useMemo, useReducer, useState } from "react"
import makeImmutable, { without } from "seamless-immutable"
import useEventCallback from "use-event-callback"
import { textractObjects } from "../box_interction"
import AnnotationInput from "../Components/AnnotationInput"
import type { KeypointsDefinition } from "../ImageCanvas/region-tools"
import MainLayout from "../MainLayout"
import type { Action, Image } from "../MainLayout/types"
import SettingsProvider from "../SettingsProvider"
import getFromLocalStorage from "../utils/get-from-local-storage"
import combineReducers from "./reducers/combine-reducers.js"
import generalReducer from "./reducers/general-reducer.js"
import historyHandler from "./reducers/history-handler.js"
import imageReducer from "./reducers/image-reducer.js"
import videoReducer from "./reducers/video-reducer.js"

type Props = {
  taskDescription?: string,
  allowedArea?: { x: number, y: number, w: number, h: number },
  regionTagList?: Array<string>,
  regionClsList?: Array<string>,
  imageTagList?: Array<string>,
  imageClsList?: Array<string>,
  enabledTools?: Array<string>,
  selectedTool?: String,
  showTags?: boolean,
  selectedImage?: string | number,
  images?: Array<Image>,
  showPointDistances?: boolean,
  pointDistancePrecision?: number,
  RegionEditLabel?: React.Node,
  onExit: (MainLayoutState) => any,
  videoTime?: number,
  videoSrc?: string,
  keyframes?: Object,
  videoName?: string,
  keypointDefinitions: KeypointsDefinition,
  fullImageSegmentationMode?: boolean,
  autoSegmentationOptions?:
    | {| type: "simple" |}
    | {| type: "autoseg", maxClusters?: number, slicWeightFactor?: number |},
  hideHeader?: boolean,
  hideHeaderText?: boolean,
  hideNext?: boolean,
  hidePrev?: boolean,
  hideClone?: boolean,
  hideSettings?: boolean,
  hideFullScreen?: boolean,
  hideSave?: boolean,
}
window.undoArray = []
window.annotation_redo = []
window.AnnoationRedo = []
export const Annotator = ({
  images,
  allowedArea,
  selectedImage = images && images.length > 0 ? 0 : undefined,
  showPointDistances,
  pointDistancePrecision,
  showTags = getFromLocalStorage("showTags", true),
  enabledTools = [
    "select",
    "create-point",
    "create-box",
    "create-a-brush",
    "create-polygon",
    "create-line",
    "create-expanding-line",
    "show-mask",
  ],
  selectedTool = "select",
  regionTagList = [],
  regionClsList = [],
  imageTagList = [],
  imageClsList = [],
  keyframes = {},
  taskDescription = "",
  fullImageSegmentationMode = false,
  RegionEditLabel,
  videoSrc,
  videoTime = 0,
  videoName,
  onExit,
  onNextImage,
  onPrevImage,
  keypointDefinitions,
  autoSegmentationOptions = { type: "autoseg" },
  hideHeader,
  hideHeaderText,
  hideNext,
  hidePrev,
  hideClone,
  hideSettings,
  hideFullScreen,
  hideSave,
  allowComments,
  onAddQuery,
  saveandnext,
  issavenextDisabled = false,
  isaddQueryDisabled = false,
  isSubmitDisabled = false,
  lazyBrush = [],
  xPosition,
  yPosition,
  invaild_show,
  hideQuery,
  hideSaveNext,
  showUpdate = false,
  rightMenu = true,
  isReadingMode = false,
  brushHighlighted = -1,
  isImageMode,
  blocks,
  handleSubmit,
  tilte_key,
  image_ocr_map,
  deleteAnnotationAllow,
}: Props) => {
  if (typeof selectedImage === "string") {
    selectedImage = (images || []).findIndex((img) => img.src === selectedImage)
    if (selectedImage === -1) selectedImage = undefined
  }
  const annotationType = images ? "image" : "video"
  const [orcTxt, setORCTxt] = useState(image_ocr_map || new Map())
  const [state, dispatchToReducer] = useReducer(
    historyHandler(
      combineReducers(
        annotationType === "image" ? imageReducer : videoReducer,
        generalReducer
      )
    ),
    makeImmutable({
      annotationType,
      showTags,
      allowedArea,
      showPointDistances,
      pointDistancePrecision,
      selectedTool,
      fullImageSegmentationMode: fullImageSegmentationMode,
      autoSegmentationOptions,
      mode: null,
      taskDescription,
      showMask: true,
      labelImages: imageClsList.length > 0 || imageTagList.length > 0,
      regionClsList,
      regionTagList,
      imageClsList,
      imageTagList,
      currentVideoTime: videoTime,
      enabledTools,
      history: [],
      videoName,
      keypointDefinitions,
      allowComments,
      brushHighlighted,

      ...(annotationType === "image"
        ? {
            selectedImage,
            images,
            selectedImageFrameTime:
              images && images.length > 0 ? images[0].frameTime : undefined,
          }
        : {
            videoSrc,
            keyframes,
          } || {}),
      qc_label: invaild_show,
    })
  )

  window.textractList = textractObjects(blocks) // call textract and parse response

  window.onChangeOCR = (index, label, value) => {
    let a1 = new Map(orcTxt)
    if (label === "delete") {
      a1.delete(index)
    } else {
      a1.set(index, {
        ...a1.get(index),
        [label]: value,
      })
    }
    setORCTxt(a1)
  }

  const [lines, setLines] = React.useState([])
  const [delete_annotation, setdelete_annotation] = useState([])
  const dispatch = useEventCallback((action: Action) => {
    if (action.type === "HEADER_BUTTON_CLICKED") {
      if (
        ["Exit", "Done", "Save", "Complete", "Submit", "Update"].includes(
          action.buttonName
        )
      ) {
        return onExit(
          without(
            {
              annotation: state,
              lazyBrush: lines,
              delete_annotation: delete_annotation,
            },
            "history"
          )
        )
      } else if (action.buttonName === "Next" && onNextImage) {
        return onNextImage(without(state, "history"))
      } else if (action.buttonName === "Prev" && onPrevImage) {
        return onPrevImage(without(state, "history"))
      } else if (action.buttonName === "Add Query" && onAddQuery) {
        return onAddQuery(without(state, "history"))
      } else if (action.buttonName === "Save & next" && saveandnext) {
        return saveandnext(
          without(
            {
              annotation: state,
              lazyBrush: lines,
              delete_annotation: delete_annotation,
            },
            "history"
          )
        )
      }
    }

    dispatchToReducer(action)
  })

  const layoutORC = useMemo(() => {
    let array = []
    for (let [key, value] of orcTxt) {
      array.push({
        key,
        value,
      })
    }
    return array
  }, [orcTxt])

  const onRegionClassAdded = useEventCallback((cls) => {
    dispatchToReducer({
      type: "ON_CLS_ADDED",
      cls: cls,
    })
  })
  React.useEffect(() => {
    setLines(lazyBrush)
  }, [])
  window.undoBrush = () => {
    const intial_lines = lines.slice(0, -1)
    let obj = { brush: lines[lines.length - 1] }
    let newArr = [...window.annotation_redo]
    newArr.push(obj)
    window.annotation_redo = newArr
    return setLines(intial_lines)
  }

  window.hendleBrush_redo = () => {
    let newArr = [...window.annotation_redo] || []
    if (newArr.length) {
      let lastElement = newArr[newArr.length - 1].brush
      const intial_lines = [...lines, lastElement]
      newArr.splice(window.annotation_redo.length - 1, 1)
      window.annotation_redo = newArr
      window.undoArray = [...window.undoArray, "brush"]
      return setLines(intial_lines)
    }
  }
  window.handleBrush_delete = () => {
    let newArr = [...window.annotation_redo] || []
    if (newArr.length) {
      let lastElement = newArr[newArr.length - 1].brush
      const intial_lines = [...lines, ...lastElement]
      newArr.splice(window.annotation_redo.length - 1, 1)
      window.annotation_redo = newArr
      window.undoArray = [...window.undoArray, "brush"]
      return setLines(intial_lines)
    }
  }

  window.hendleAnnotation_redo = () => {
    dispatch({
      type: "REDO_HISTORY",
    })
  }

  useEffect(() => {
    if (selectedImage === undefined) return
    dispatchToReducer({
      type: "SELECT_IMAGE",
      imageIndex: selectedImage,
      image: state.images[selectedImage],
    })
  }, [selectedImage, state.images])

  if (!images && !videoSrc)
    return 'Missing required prop "images" or "videoSrc"'
  window.handleSubmitOcr = () => {
    let intialaAnnotation = JSON.stringify(state)

    let BrushAnnotation = []
    let deleteAnnotation = deleteAnnotationAllow ? [] : []
    let annotation = ""
    try {
      annotation = JSON.parse(intialaAnnotation)
    } catch (err) {
      console.log(annotation)
    }
    let upComingRegion = []
    let finalArr = {
      [tilte_key]: {
        annotationType: "",
        annotation: [],
        brushAnnotation: [],
        deleteAnnotation: [],
      },
    }

    if (annotation.annotationType === "video") {
      upComingRegion = annotation.keyframes || {}
      finalArr = {
        [tilte_key]: {
          annotationType: "video",
          annotation: upComingRegion || [],
          brushAnnotation: BrushAnnotation || [],
          deleteAnnotation: deleteAnnotation?.flat() || [],
        },
      }
    } else if (annotation.annotationType === "image") {
      upComingRegion = annotation?.images?.[0]?.regions
      finalArr = {
        [tilte_key]: {
          annotationType: "image",
          annotation: upComingRegion || [],
          brushAnnotation: BrushAnnotation || [],
          deleteAnnotation: deleteAnnotation?.flat() || [],
        },
      }
      return {
        annotation: finalArr,
        ocr_data: layoutORC?.map((item) => {
          let { value, name } = item.value
          return { title: name, content: value }
        }),
      }
    }
  }
  const ImageCanvas = (
    <SettingsProvider>
      <MainLayout
        RegionEditLabel={RegionEditLabel}
        alwaysShowNextButton={Boolean(onNextImage)}
        alwaysShowPrevButton={Boolean(onPrevImage)}
        state={state}
        dispatch={dispatch}
        onRegionClassAdded={onRegionClassAdded}
        hideHeader={hideHeader}
        hideHeaderText={hideHeaderText}
        hideNext={hideNext}
        hidePrev={hidePrev}
        hideClone={hideClone}
        hideSettings={hideSettings}
        hideFullScreen={hideFullScreen}
        hideSave={hideSave}
        issavenextDisabled={issavenextDisabled}
        isaddQueryDisabled={isaddQueryDisabled}
        isSubmitDisabled={isSubmitDisabled}
        lazyBrush={lazyBrush}
        lazyBrushTags={regionTagList}
        lazyBrushClassification={regionClsList}
        xPosition={xPosition}
        yPosition={yPosition}
        lines={lines}
        setLines={setLines}
        invaild_show={invaild_show}
        setdelete_annotation={setdelete_annotation}
        delete_annotation={delete_annotation}
        hideSaveNext={hideSaveNext}
        hideQuery={hideQuery}
        showUpdate={showUpdate}
        rightMenu={rightMenu}
        isReadingMode={isReadingMode}
        isImageMode={isImageMode}
        layoutORC={layoutORC}
        onChangeLayoutORC={(e, key) => {}}
        handleSubmit={handleSubmit}
        tilte_key={tilte_key}
        deleteAnnotationAllow={deleteAnnotationAllow}
      />
    </SettingsProvider>
  )

  return isImageMode ? (
    <Grid container spacing={2} style={{ height: "100vh" }}>
      <Grid item xs={12} md={6}>
        {ImageCanvas}
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid
          container
          style={{
            maxHeight: "100vh",
            overflowY: "scroll",
            overflowX: "hidden",
          }}
          spacing={2}
        >
          {layoutORC.map((a, index) => {
            let value = a.value
            let key = a.key
            if (!value?.name || value?.name === "") return null
            return (
              <Grid item xs={12} md={6} key={index} className="common_inputBox">
                <label className="task_formlabel" htmlFor={value.name}>
                  {value.name}
                </label>
                <AnnotationInput
                  rows={3}
                  // title={value.name}
                  id={value.name}
                  value={value.value}
                  fullWidth
                  onChange={(e) => {
                    let a2 = new Map(orcTxt)
                    a2.set(key, {
                      ...a2.get(key),
                      value: e.target.value,
                    })
                    setORCTxt(a2)
                  }}
                  focused
                />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  ) : (
    ImageCanvas
  )
}

export default Annotator
