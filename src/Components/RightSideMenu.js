import React from "react"
import ClassSelectionMenu from "../ClassSelectionMenu"
import DebugSidebarBox from "../DebugSidebarBox"
import { HistorySidebarBox } from "../HistorySidebarBox"
import KeyframesSelectorSidebarBox from "../KeyframesSelectorSidebarBox"
import BrushKeyFrame from "../LazyBrush/BrushKeyFrame"
import BrushRegion from "../LazyBrush/BrushRegion"
import RegionSelectorSidebarBox from "../RegionSelectorSidebarBox"
import TagsSidebarBox from "../TagsSidebarBox"
import TaskDescriptionSidebarBox from "../TaskDescriptionSidebarBox"

function RightSideMenu({
  rightMenu,
  debugModeOn,
  state,
  action,
  activeImage,
  delete_annotation,
  setdelete_annotation,
  isImageMode,
  lines,
  emptyArr,
  setLines,
  brushHighlight,
}) {
  let dubegMenu = debugModeOn && (
    <DebugSidebarBox state={debugModeOn} lastAction={state.lastAction} />
  )
  let taskDescp = state.taskDescription && (
    <TaskDescriptionSidebarBox description={state.taskDescription} />
  )
  let clsRegion = state.regionClsList && (
    <ClassSelectionMenu
      selectedCls={state.selectedCls}
      regionClsList={state.regionClsList}
      onSelectCls={action("SELECT_CLASSIFICATION", "cls")}
    />
  )
  let labelImages = state.labelImages && (
    <TagsSidebarBox
      currentImage={activeImage}
      imageClsList={state.imageClsList}
      imageTagList={state.imageTagList}
      onChangeImage={action("CHANGE_IMAGE", "delta")}
      expandedByDefault
    />
  )
  let regionList = (
    <RegionSelectorSidebarBox
      regions={activeImage ? activeImage.regions : emptyArr}
      onSelectRegion={action("SELECT_REGION", "region")}
      onDeleteRegion={action("DELETE_REGION", "region")}
      onChangeRegion={action("CHANGE_REGION", "region")}
      delete_annotation={delete_annotation}
      setdelete_annotation={setdelete_annotation}
    />
  )
  let keyFrames = state.keyframes && (
    <KeyframesSelectorSidebarBox
      onChangeVideoTime={action("CHANGE_VIDEO_TIME", "newTime")}
      onDeleteKeyframe={action("DELETE_KEYFRAME", "time")}
      onChangeCurrentTime={action("CHANGE_VIDEO_TIME", "newTime")}
      currentTime={state.currentVideoTime}
      duration={state.videoDuration}
      keyframes={state.keyframes}
    />
  )
  let brushRegion = !isImageMode && (
    <BrushRegion
      onChangeVideoTime={action("CHANGE_VIDEO_TIME", "newTime")}
      currentTime={state.currentVideoTime}
      duration={state.videoDuration}
      brushLines={lines}
      delete_annotation={delete_annotation}
      setdelete_annotation={setdelete_annotation}
      setLines={setLines}
      brushHighlight={brushHighlight}
    />
  )
  let History = (
    <HistorySidebarBox
      history={state.history}
      onRestoreHistory={action("RESTORE_HISTORY")}
      line={lines}
      setLines={setLines}
      delete_annotation={delete_annotation}
      setdelete_annotation={setdelete_annotation}
    />
  )
  let brushKey = !isImageMode && state.keyframes && (
    <BrushKeyFrame
      onChangeVideoTime={action("CHANGE_VIDEO_TIME", "newTime")}
      currentTime={state.currentVideoTime}
      duration={state.videoDuration}
      brushLines={lines}
      delete_annotation={delete_annotation}
      setdelete_annotation={setdelete_annotation}
      setLines={setLines}
    />
  )
  let toolBoxMenu = [
    dubegMenu,
    taskDescp,
    clsRegion,
    labelImages,
    regionList,
    keyFrames,
    brushRegion,

    brushKey,
    History,
  ].filter(Boolean)
  return isImageMode ? (
    <>
      {dubegMenu}
      {taskDescp}
      {/* {clsRegion} */}
      {labelImages}
      {regionList}
      {keyFrames}
      {brushRegion}

      {brushKey}
      {History}
    </>
  ) : (
    toolBoxMenu
  )
}

export default RightSideMenu
