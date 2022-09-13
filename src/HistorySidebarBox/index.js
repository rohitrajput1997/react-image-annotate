// @flow

import HistoryIcon from "@mui/icons-material/History"
import UndoIcon from "@mui/icons-material/Undo"
import { grey } from "@mui/material/colors"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction"
import ListItemText from "@mui/material/ListItemText"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { makeStyles } from "@mui/styles"
import isEqual from "lodash/isEqual"
import moment from "moment"
import React, { memo } from "react"
import { setIn } from "seamless-immutable"
import SidebarBoxContainer from "../SidebarBoxContainer"
const theme = createTheme()
const useStyles = makeStyles((theme) => ({
  emptyText: {
    fontSize: 14,
    fontWeight: "bold",
    color: grey[500],
    textAlign: "center",
    padding: 20,
  },
}))

const listItemTextStyle = { paddingLeft: 16 }

export const HistorySidebarBox = ({
  history,
  onRestoreHistory,
  delete_annotation,
  setdelete_annotation,
}: {
  history: Array<{ name: string, time: Date }>,
}) => {
  const classes = useStyles()
  const undoAnnotation = () => {
    let lastElement = window.undoArray[window.undoArray.length - 1]
    if (lastElement === "annotation") {
      onRestoreHistory()
      let newArr = [...window.undoArray]
      newArr.splice(window.undoArray.length - 1, 1)

      window.undoArray = newArr
    } else if (lastElement === "brush") {
      window.undoBrush()
      let newArr = [...window.undoArray]
      newArr.splice(window.undoArray.length - 1, 1)
      window.undoArray = newArr
    }
  }
  const handleUndoKeydown = () => {
    if (
      window.annotation_redo[window.annotation_redo.length - 1]?.brush?.points
        ?.length
    ) {
      window.hendleBrush_redo()
    } else if (
      window.annotation_redo[window.annotation_redo.length - 1]?.annotation
    ) {
      window.hendleAnnotation_redo()
    }
  }
  const handleKeydown = (key) => {
    if (window.undoArray.length) {
      if (key.ctrlKey && key.code === "KeyZ") {
        undoAnnotation()
      } else if (
        key.target.id === "undo" ||
        key.target.ariaLabel === "undo annotation" ||
        [...(key?.target?.parentNode?.classList || [])].indexOf("fa-undo") !==
          -1
      ) {
        undoAnnotation()
      }
    } else {
      console.log("cant undo anymore")
    }
    if (key.ctrlKey && key.code === "KeyY") {
      handleUndoKeydown()
    } else if (
      key.target.id === "redo" ||
      key.target.ariaLabel === "redo annotation" ||
      [...(key?.target?.parentNode?.classList || [])].indexOf("fa-redo") !== -1
    ) {
      handleUndoKeydown()
    }
  }
  const clearWindow = () => {
    window.removeEventListener("keydown", handleKeydown)

    window.removeEventListener("click", handleKeydown)
  }
  React.useEffect(() => {
    window.addEventListener("click", handleKeydown)
    window.addEventListener("keydown", handleKeydown)
    return () => {
      clearWindow()
    }
  }, [])

  React.useEffect(() => {
    if (
      history.length > window.undoArray.filter((d) => d === "annotation").length
    ) {
      window.undoArray = [...window.undoArray, "annotation"]
    }
  }, [history.length])

  return (
    <ThemeProvider theme={theme}>
      <SidebarBoxContainer
        title="History"
        icon={<HistoryIcon style={{ color: grey[700] }} />}
        expandedByDefault
      >
        <List>
          {history.length === 0 && (
            <div className={classes.emptyText}>No History Yet</div>
          )}
          {history.map(({ name, time }, i) => (
            <ListItem button dense key={i}>
              <ListItemText
                style={listItemTextStyle}
                primary={name}
                secondary={moment(time).format("LT")}
              />
              {i === 0 && (
                <ListItemSecondaryAction
                  onClick={() => {
                    if (name === "Delete Region") {
                      console.log(history)
                    }
                    onRestoreHistory()
                  }}
                >
                  <IconButton>
                    <UndoIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              )}
            </ListItem>
          ))}
        </List>
      </SidebarBoxContainer>
    </ThemeProvider>
  )
}

export default memo(HistorySidebarBox, (prevProps, nextProps) => {
  return isEqual(
    prevProps.history.map((a) => [a.name, a.time]),
    nextProps.history.map((a) => [a.name, a.time])
  )
})
