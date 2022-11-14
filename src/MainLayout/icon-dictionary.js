// @flow

import {
  faBrush,
  faChartLine,
  faCrosshairs,
  faDrawPolygon,
  faEdit,
  faEraser,
  faGripLines,
  faHandPaper,
  faMask,
  faMousePointer,
  faRedo,
  faSearchMinus,
  faSearchPlus,
  faTag,
  faUndo,
  faVectorSquare,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew"
import FullscreenIcon from "@mui/icons-material/Fullscreen"
import React from "react"

const faStyle = { marginTop: 4, width: 16, height: 16, marginBottom: 4 }

export const iconDictionary = {
  select: () => (
    <FontAwesomeIcon
      style={faStyle}
      size="xs"
      fixedWidth
      icon={faMousePointer}
    />
  ),
  pan: () => (
    <FontAwesomeIcon style={faStyle} size="xs" fixedWidth icon={faHandPaper} />
  ),
  zoom: () => (
    <FontAwesomeIcon style={faStyle} size="xs" fixedWidth icon={faSearchPlus} />
  ),
  zoom_tool_minus: () => (
    <FontAwesomeIcon
      style={faStyle}
      size="xs"
      fixedWidth
      icon={faSearchMinus}
    />
  ),
  "show-tags": () => (
    <FontAwesomeIcon style={faStyle} size="xs" fixedWidth icon={faTag} />
  ),
  "create-point": () => (
    <FontAwesomeIcon style={faStyle} size="xs" fixedWidth icon={faCrosshairs} />
  ),
  "create-box": () => (
    <FontAwesomeIcon
      style={faStyle}
      size="xs"
      fixedWidth
      icon={faVectorSquare}
    />
  ),
  "create-a-brush": () => (
    <FontAwesomeIcon style={faStyle} size="xs" fixedWidth icon={faBrush} />
  ),
  undo_anntation: () => (
    <FontAwesomeIcon
      id="undo"
      style={faStyle}
      size="xs"
      fixedWidth
      icon={faUndo}
    />
  ),
  redo_anntation: () => (
    <FontAwesomeIcon
      id="redo"
      style={faStyle}
      size="xs"
      fixedWidth
      icon={faRedo}
    />
  ),
  "create-polygon": () => (
    <FontAwesomeIcon
      style={faStyle}
      size="xs"
      fixedWidth
      icon={faDrawPolygon}
    />
  ),
  "create-expanding-line": () => (
    <FontAwesomeIcon style={faStyle} size="xs" fixedWidth icon={faGripLines} />
  ),
  "create-line": () => (
    <FontAwesomeIcon style={faStyle} size="xs" fixedWidth icon={faChartLine} />
  ),
  "show-mask": () => (
    <FontAwesomeIcon style={faStyle} size="xs" fixedWidth icon={faMask} />
  ),
  "modify-allowed-area": () => (
    <FontAwesomeIcon style={faStyle} size="xs" fixedWidth icon={faEdit} />
  ),
  eraser: () => (
    <FontAwesomeIcon style={faStyle} size="xs" fixedWidth icon={faEraser} />
  ),
  "create-keypoints": AccessibilityNewIcon,
  window: FullscreenIcon,
}

export default iconDictionary

