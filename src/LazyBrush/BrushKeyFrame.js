// @flow weak

import Brush from "@mui/icons-material/Brush"
import TrashIcon from "@mui/icons-material/Delete"
import * as colors from "@mui/material/colors"
import { createTheme, styled, ThemeProvider } from "@mui/material/styles"
import React from "react"
import getTimeString from "../KeyframeTimeline/get-time-string"
import SidebarBoxContainer from "../SidebarBoxContainer"

const theme = createTheme()
const KeyframeRow = styled("div")(({ theme }) => ({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  padding: 8,
  fontSize: 14,
  color: colors.grey[700],
  "&.current": {
    backgroundColor: colors.blue[100],
  },
  "&:hover": {
    backgroundColor: colors.grey[100],
  },
  "& .time": {
    flexGrow: 1,
    fontWeight: "bold",
    "& .regionCount": {
      marginLeft: 8,
      fontWeight: "normal",
      color: colors.grey[500],
    },
  },
  "& .trash": {
    "& .icon": {
      fontSize: 18,
      color: colors.grey[600],
      transition: "transform 80ms",
      "&:hover": {
        color: colors.grey[800],
        transform: "scale(1.25,1.25)",
      },
    },
  },
}))

const BrushKeyFrame = ({
  currentVideoTime,
  setdelete_annotation,
  onChangeVideoTime,
  setLines,
  brushLines,
  delete_annotation,
}) => {
  //   const keyframeTimes = brushLines

  return (
    <ThemeProvider theme={theme}>
      <SidebarBoxContainer
        title="Brush Keyframes"
        subTitle=""
        icon={<Brush style={{ color: colors.grey[700] }} />}
        expandedByDefault
      >
        {brushLines.map((t, index) => (
          <KeyframeRow
            fullWidth
            key={t}
            className={currentVideoTime === t?.keyframes ? "current" : ""}
            onClick={() => onChangeVideoTime(t?.keyframes)}
          >
            <div className="time">
              {getTimeString(t?.keyframes, 2)}
              <span className="regionCount">({t.tool})</span>
            </div>
            <div className="trash">
              <TrashIcon
                onClick={(e) => {
                  let linessave = [...brushLines]
                  linessave.splice(index, 1)
                  brushLines = linessave
                  setLines(linessave)
                  let arr = [...delete_annotation]
                  arr.push(t)

                  setdelete_annotation(arr)
                  e.stopPropagation()
                }}
                className="icon"
              />
            </div>
          </KeyframeRow>
        ))}
      </SidebarBoxContainer>
    </ThemeProvider>
  )
}

export default BrushKeyFrame

