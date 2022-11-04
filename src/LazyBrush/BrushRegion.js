// @flow weak

import Brush from "@mui/icons-material/Brush"
import TrashIcon from "@mui/icons-material/Delete"
import LockIcon from "@mui/icons-material/Lock"
import LockOpenIcon from "@mui/icons-material/LockOpen"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import * as colors from "@mui/material/colors"
import { createTheme, styled, ThemeProvider } from "@mui/material/styles"
import React from "react"
import SidebarBoxContainer from "../SidebarBoxContainer"

const theme = createTheme()
const KeyframeRow = styled("div")(({ theme }) => ({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 8,
  fontSize: 14,
  color: colors.grey[700],
  // backgroundColor: colors.blue[100],

  "& .classification": {
    display: "flex",
    alignItems: "center",
    fontSize: "11px",
    justifyContent: "space-between",
    fontWeight: "bold",
    "& .series": {
      textAlign: "right",
      paddingRight: "10px",
      fontSize: "11px",
    },
  },
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

      color: "#005f86",
      width: "16px",
      height: "16px",
      opacity: 0.5,
      transition: "200ms opacity",
      "&:hover": {
        color: "#005f86",
        transform: "scale(1.25,1.25)",
      },
    },
  },
}))

const BrushRegion = ({
  currentVideoTime,
  setdelete_annotation,
  onChangeVideoTime,
  setLines,
  brushLines,
  delete_annotation,
  brushHighlight,
}) => {
  //   const keyframeTimes = brushLines

  return (
    <ThemeProvider theme={theme}>
      <SidebarBoxContainer
        title="Brush Region"
        subTitle=""
        icon={<Brush style={{ color: colors.grey[700] }} />}
        expandedByDefault
      >
        {brushLines
          ?.filter(
            (arr, index, self) =>
              index === self.findIndex((t) => t.id === arr.id && arr.id)
          )
          ?.map((t, index) => (
            <KeyframeRow
              fullWidth
              key={t}
              style={{
                backgroundColor: brushHighlight === index && "#bbdefb",
              }}
              onClick={() => {
                window.brushHighlighted(index)
              }}
            >
              <div className="classification">
                <span> #{index + 1}</span>
                <div
                  style={{
                    backgroundColor: t.color?.replace("0.5", "1"),
                    width: "10px",
                    height: "10px",
                    boxShadow: "0px 0px 2px rgb(0 0 0 / 40%)",
                    marginRight: "4px",
                    borderRadius: "5px",
                  }}
                />
                <span>{t?.popUp?.classification?.label}</span>
              </div>
              <div className="trash">
                <TrashIcon
                  onClick={(e) => {
                    let linessave = [...brushLines]
                    let filter_arr = linessave.filter(
                      (filters) => filters.id !== t.id && filters
                    )

                    setLines(filter_arr)
                    let arr = [...delete_annotation]
                    let delete_arr = linessave.filter(
                      (filter) => filter.id === t.id && filter
                    )
                    arr.push(delete_arr)
                    window.undoArray = [...window.undoArray, "brush"]
                    let obj = { brush: delete_arr }
                    let newArr = [...window.annotation_redo]
                    newArr.push(obj)
                    window.annotation_redo = newArr

                    setdelete_annotation(arr)
                  }}
                  className="icon"
                />
                {t.isLocked ? (
                  <LockIcon
                    onClick={(e) => {
                      let linessave = [...brushLines]
                      let filter_arr = linessave.filter((filters) => {
                        if (filters.id === t.id) {
                          filters.isLocked = false
                        }
                        return filters
                      })

                      setLines(filter_arr)
                    }}
                    className="icon"
                  />
                ) : (
                  <LockOpenIcon
                    onClick={(e) => {
                      let linessave = [...brushLines]
                      let filter_arr = linessave.filter((filters) => {
                        if (filters.id === t.id) {
                          filters.isLocked = true
                        }
                        return filters
                      })

                      setLines(filter_arr)
                    }}
                    className="icon"
                  />
                )}
                {t.isHide ? (
                  <VisibilityOffIcon
                    onClick={(e) => {
                      let linessave = [...brushLines]
                      let filter_arr = linessave.filter((filters) => {
                        if (filters.id === t.id) {
                          filters.isHide = false
                        }
                        return filters
                      })

                      setLines(filter_arr)
                    }}
                    className="icon"
                  />
                ) : (
                  <VisibilityIcon
                    onClick={(e) => {
                      t.isHide = true
                      let linessave = [...brushLines]
                      let filter_arr = linessave.filter((filters) => {
                        if (filters.id === t.id) {
                          filters.isHide = true
                        }
                        return filters
                      })

                      setLines(filter_arr)
                    }}
                    className="icon"
                  />
                )}
              </div>
            </KeyframeRow>
          ))}
      </SidebarBoxContainer>
    </ThemeProvider>
  )
}

export default BrushRegion

