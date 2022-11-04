import CheckIcon from "@mui/icons-material/Check"
import TrashIcon from "@mui/icons-material/Delete"
import LockIcon from "@mui/icons-material/Lock"
import WarningAmberIcon from "@mui/icons-material/WarningAmber"
import { makeStyles } from "@mui/styles"
import PreventScrollToParents from "../PreventScrollToParents"

import {
  Button,
  // createTheme,
  IconButton,
  // makeStyles,
  Paper,
} from "@mui/material"
// import { ThemeProvider } from "@mui/styles"
import ClickAwayListener from "@mui/material/ClickAwayListener"

import { createTheme, ThemeProvider } from "@mui/material/styles"
import classnames from "classnames"
import React, { useState } from "react"
import CreatableSelect from "react-select/creatable"
import { asMutable } from "seamless-immutable"
import colors from "../colors"
import styles from "../RegionLabel/styles"
const theme = createTheme()
const useStyles = makeStyles((theme) => styles)

function BrushPopup({
  top,
  left,
  showTags,
  lines,
  lazyBrushClassification,
  lazyBrushTags,
  setLines,
  scale,
  invaild_show,
  delete_annotation,
  setdelete_annotation,
  annotationType,
  videoTime,
  mouseEvents,
  isReadingMode,
  setTegged,
  setLoacal_id,
  handleMouseUp,
  convertHextoRgb,
  setbrushHighlight,
}) {
  const getRandomId = () => Math.random().toString().split(".")[1]
  const classes = useStyles()
  const [open, setOpen] = useState(-1)
  const handleClickAway = () => {
    // setOpen(-1)
  }
  window.brushHighlighted = (value) => {
    setOpen(value)
  }
  const popUpPos = ({ index, top }) => {
    const labelBoxHeight = open === index ? 170 : 60
    // console.log(pbox.y, labelBoxHeight)
    const displayOnTop = top > labelBoxHeight
    return displayOnTop
  }
  return (
    <ThemeProvider theme={theme}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div onMouseUp={() => handleMouseUp()}>
          {showTags &&
            lines?.map(
              (item, index) =>
                item.isPopupShow === true &&
                item.tool === "pen" &&
                !item.isHide && (
                  <div
                    style={{
                      left: `${item.points[0] * scale}px`,
                      top: `${item.points[1] * scale}px`,
                      position: "absolute",
                      width: "200px",
                      opacity: 1,
                    }}
                    onMouseDown={(e) => e.preventDefault()}
                    onMouseUp={(e) => e.preventDefault()}
                    onMouseEnter={(e) => {
                      if (open === index) {
                        mouseEvents.onMouseUp(e)
                        e.button = 1
                        mouseEvents.onMouseUp(e)
                      }
                    }}
                  >
                    <PreventScrollToParents key="brushTags">
                      <Paper
                        className={classnames(classes.regionInfo)}
                        style={{
                          opacity: open === index && 1,
                          zIndex: 20,
                          // top: `${19.166664123535156}px`,
                          // left: `${197.90878098221688}px`,
                          position: "absolute",
                          cursor: "pointer",
                          border:
                            !invaild_show && lines[index].invalid
                              ? "2px solid red"
                              : null,
                          padding: 0,
                          ...(popUpPos({ index, top: item.points[1] * scale })
                            ? { bottom: 0 }
                            : { top: 0 }),
                        }}
                      >
                        {open === index ? (
                          <div style={{ width: 200, padding: 10 }}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-end",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  backgroundColor:
                                    colors[
                                      lazyBrushClassification?.findIndex(
                                        (dropdown) =>
                                          dropdown ===
                                          item?.popUp?.classification?.label
                                      ) % colors.length
                                    ] || "red",
                                  color: "#fff",
                                  padding: 4,
                                  paddingLeft: 8,
                                  paddingRight: 8,
                                  borderRadius: 4,
                                  fontWeight: "bold",
                                  textShadow: "0px 0px 5px rgba(0,0,0,0.4)",
                                }}
                              >
                                Brush
                              </div>
                              <div style={{ flexGrow: 1 }} />
                              <IconButton
                                onClick={(e) => {
                                  let linessave = [...lines]
                                  let filter_arr = linessave.filter(
                                    (filters) =>
                                      filters.id !== item.id && filters
                                  )

                                  setLines(filter_arr)
                                  let arr = [...delete_annotation]
                                  let delete_arr = linessave
                                    .filter((filter) => {
                                      if (filter.id === item.id) {
                                        return filter
                                      }
                                    })
                                    .filter(Boolean)
                                  arr.push(delete_arr)
                                  window.undoArray = [
                                    ...window.undoArray,
                                    "brush",
                                  ]
                                  let obj = { brush: delete_arr }
                                  let newArr = [...window.annotation_redo]
                                  newArr.push(obj)
                                  window.annotation_redo = newArr
                                  setdelete_annotation(arr)
                                }}
                                tabIndex={-1}
                                style={{ width: 22, height: 22 }}
                                size="small"
                                variant="outlined"
                              >
                                <TrashIcon
                                  style={{
                                    marginTop: -8,
                                    width: 16,
                                    height: 16,
                                  }}
                                />
                              </IconButton>
                              {invaild_show && (
                                <IconButton
                                  onClick={() => {
                                    let linessave = [...lines]

                                    let find_same_id = linessave?.map(
                                      (items, itemIndex) => {
                                        if (items.id === item.id) {
                                          lines[itemIndex].invalid = lines[
                                            itemIndex
                                          ].invalid
                                            ? false
                                            : true
                                        }
                                        return linessave
                                      }
                                    )
                                    setLines(linessave)
                                    window.undoArray = [
                                      ...window.undoArray,
                                      "brush",
                                    ]
                                  }}
                                  tabIndex={-1}
                                  style={{ width: 22, height: 22 }}
                                  size="small"
                                  variant="outlined"
                                >
                                  <WarningAmberIcon
                                    style={{
                                      color: lines[index].invalid
                                        ? "#faad14"
                                        : "grey",
                                      marginTop: -8,
                                      width: 16,
                                      height: 16,
                                    }}
                                  />
                                </IconButton>
                              )}
                            </div>
                            <div style={{ marginTop: 6 }}>
                              <CreatableSelect
                                // menuShouldBlockScroll={true}
                                menuPosition="fixed"
                                menuPlacement={"auto"}
                                placeholder="Classification"
                                onChange={(o, actionMeta) => {
                                  let linessave = [...lines]

                                  let find_same_id = linessave?.map(
                                    (items, itemIndex) => {
                                      if (items.id === item.id) {
                                        lines[itemIndex].popUp.classification =
                                          o
                                        lines[
                                          itemIndex
                                        ].color = `rgba(${convertHextoRgb(
                                          colors[
                                            lazyBrushClassification?.findIndex(
                                              (dropdown) =>
                                                dropdown ===
                                                item?.popUp?.classification
                                                  ?.label
                                            ) % colors.length
                                          ] || "#FF0000"
                                        )},0.5)`
                                      }
                                      return linessave
                                    }
                                  )

                                  setLines(linessave)
                                }}
                                value={lines[index].popUp.classification}
                                options={asMutable(
                                  lazyBrushClassification.map((c) => ({
                                    value: c,
                                    label: c,
                                  }))
                                )}
                              />
                            </div>
                            <div style={{ marginTop: 4 }}>
                              <CreatableSelect
                                // menuShouldBlockScroll={true}
                                menuPosition="fixed"
                                menuPlacement={"auto"}
                                // menuIsOpen={true}
                                value={lines[index].popUp.tags}
                                placeholder="Tags"
                                onChange={(o, actionMeta) => {
                                  let linessave = [...lines]

                                  let find_same_id = linessave?.map(
                                    (items, itemIndex) => {
                                      if (items.id === item.id) {
                                        lines[itemIndex].popUp.tags = o
                                        lines[itemIndex].tag_count =
                                          lines?.[
                                            itemIndex
                                          ]?.popUp?.tags?.length
                                      }
                                      return linessave
                                    }
                                  )

                                  setLines(linessave)

                                  setLines(linessave)
                                  setTegged(true)
                                  setLoacal_id(getRandomId())
                                }}
                                isMulti
                                options={asMutable(
                                  lazyBrushTags.map((c) => ({
                                    value: c,
                                    label: c,
                                  }))
                                )}
                              />
                            </div>

                            <div style={{ marginTop: 4, display: "flex" }}>
                              <div style={{ flexGrow: 1 }} />
                              <Button
                                onClick={() => {
                                  if (!lines.isLocked) {
                                    setOpen(-1)
                                    setbrushHighlight(-1)
                                  }
                                }}
                                size="small"
                                variant="contained"
                                color="primary"
                              >
                                <CheckIcon />
                              </Button>
                            </div>
                          </div>
                        ) : (
                          !item.isHide && (
                            <div
                              style={{ padding: !item.isLocked && 8 }}
                              onClick={() => {
                                if (!lines.isLocked) {
                                  if (!isReadingMode) {
                                    setOpen(index)
                                    setbrushHighlight(index)
                                  }
                                }
                              }}
                            >
                              {item.isLocked ? (
                                <LockIcon fontSize="small" />
                              ) : (
                                <>
                                  {item?.popUp?.classification && (
                                    <div
                                      className="name"
                                      style={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        width: "max-content",
                                      }}
                                    >
                                      <div
                                        style={{
                                          backgroundColor: item?.color?.replace(
                                            "0.5",
                                            "1"
                                          ),
                                          width: "10px",
                                          height: "10px",
                                          boxShadow:
                                            "0px 0px 2px rgb(0 0 0 / 40%)",
                                          marginRight: "4px",
                                          borderRadius: "5px",
                                        }}
                                      />
                                      <span>
                                        {item?.popUp?.classification.label}
                                      </span>
                                    </div>
                                  )}
                                  <div className="tags">
                                    {item?.popUp?.tags?.map((t) => (
                                      <div className="tag">{`${t.label}`}</div>
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                          )
                        )}
                      </Paper>
                    </PreventScrollToParents>
                  </div>
                )
            )}
        </div>
      </ClickAwayListener>
    </ThemeProvider>
  )
}

export default BrushPopup

