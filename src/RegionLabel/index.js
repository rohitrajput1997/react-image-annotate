// @flow

import CheckIcon from "@mui/icons-material/Check"
import TrashIcon from "@mui/icons-material/Delete"
import WarningAmberIcon from "@mui/icons-material/WarningAmber"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Paper from "@mui/material/Paper"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import TextField from "@mui/material/TextField"
import { makeStyles } from "@mui/styles"
import classnames from "classnames"
import React, { memo, useRef } from "react"
import CreatableSelect from "react-select/creatable"
import type { Region } from "../ImageCanvas/region-tools.js"
import styles from "./styles"

// import { getIn, setIn } from "seamless-immutable"

import { asMutable } from "seamless-immutable"
import LocalStorage from "../Components/LocalStorage.js"

const theme = createTheme()
const useStyles = makeStyles((theme) => styles)

type Props = {
  region: Region,
  editing?: boolean,
  allowedClasses?: Array<string>,
  allowedTags?: Array<string>,
  cls?: string,
  tags?: Array<string>,
  onDelete: (Region) => null,
  onChange: (Region) => null,
  onClose: (Region) => null,
  onOpen: (Region) => null,
  onRegionClassAdded: () => {},
  allowComments?: boolean,
  isImageMode?: boolean,
}

export const RegionLabel = ({
  region,
  editing,
  allowedClasses,
  allowedTags,
  onDelete,
  onChange,
  onClose,
  onOpen,
  onRegionClassAdded,
  allowComments,
  invaild_show,
  delete_annotation,
  setdelete_annotation,
  isReadingMode,
  isImageMode,
  regions,
  state,
}: Props) => {
  const classes = useStyles()
  const commentInputRef = useRef(null)
  const onCommentInputClick = (_) => {
    // The TextField wraps the <input> tag with two divs
    const commentInput = commentInputRef.current.children[0].children[0]

    if (commentInput) return commentInput.focus()
  }
  let visible_fields = LocalStorage.get_visible_fields()
  return (
    <ThemeProvider theme={theme}>
      <Paper
        onClick={() => !isReadingMode && (!editing ? onOpen(region) : null)}
        className={classnames(classes.regionInfo, {
          highlighted: region.highlighted,
        })}
        style={{
          border: !invaild_show && region?.invalid ? "2px solid red" : null,
        }}
      >
        {!editing ? (
          <div id="image_annotation">
            {region.cls && (
              <div className="name">
                <div
                  className="circle"
                  style={{ backgroundColor: region.color }}
                />
                {region.cls}
              </div>
            )}
            {region.tags && (
              <div className="tags">
                {region.tags.map((t) => (
                  <div key={t} className="tag">
                    {t}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div style={{ width: 200 }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  backgroundColor: region.color || "#888",
                  color: "#fff",
                  padding: 4,
                  paddingLeft: 8,
                  paddingRight: 8,
                  borderRadius: 4,
                  fontWeight: "bold",
                  textShadow: "0px 0px 5px rgba(0,0,0,0.4)",
                }}
              >
                {region.type}
              </div>
              <div style={{ flexGrow: 1 }} />
              <IconButton
                onClick={() => {
                  let delet_arr = [...delete_annotation]
                  delet_arr.push(region)
                  let filterArr =
                    delet_arr &&
                    delet_arr
                      .filter(
                        (arr, index, self) =>
                          index ===
                          self.findIndex((t) => t.id === arr.id && arr.id)
                      )
                      .map((item) => item)

                  setdelete_annotation(filterArr)
                  onDelete(region)
                }}
                tabIndex={-1}
                style={{ width: 22, height: 22 }}
                size="small"
                variant="outlined"
              >
                <TrashIcon style={{ marginTop: -8, width: 16, height: 16 }} />
              </IconButton>
              {invaild_show && (
                <IconButton
                  tabIndex={-1}
                  style={{ width: 22, height: 22 }}
                  size="small"
                  variant="outlined"
                >
                  <WarningAmberIcon
                    style={{
                      color: region?.invalid ? "#faad14" : "grey",
                      marginTop: -8,
                      width: 16,
                      height: 16,
                    }}
                    onClick={() => {
                      onChange({
                        ...(region: any),
                        invalid: !region?.invalid,
                      })
                    }}
                  />
                </IconButton>
              )}
            </div>
            {(allowedClasses || []).length > 0 && (
              <div style={{ marginTop: 6 }}>
                <CreatableSelect
                  // menuShouldBlockScroll={true}
                  menuPosition="fixed"
                  menuPlacement={"auto"}
                  placeholder="Classification"
                  onChange={(o, actionMeta) => {
                    if (actionMeta.action == "create-option") {
                      onRegionClassAdded(o.value)
                    }
                    return onChange({
                      ...(region: any),
                      cls: o.value,
                    })
                  }}
                  value={
                    region.cls ? { label: region.cls, value: region.cls } : null
                  }
                  options={
                    isImageMode
                      ? asMutable(
                          allowedClasses
                            .map((c) => ({ value: c, label: c }))
                            .filter(
                              ({ value: id1 }) =>
                                !visible_fields.includes(id1) &&
                                !regions.some(({ cls: id2 }) => {
                                  return id2 === id1
                                })
                            ) // roles.filter(({ value: id1 }) => !fields.roles.some(({ role: id2 }) => id2 === id1))
                        )
                      : asMutable(
                          allowedClasses.map((c) => ({ value: c, label: c }))
                        )
                  }
                />
              </div>
            )}
            {(allowedTags || []).length > 0 && (
              <div style={{ marginTop: 4 }}>
                <CreatableSelect
                  // menuShouldBlockScroll={true}
                  menuPosition="fixed"
                  menuPlacement={"auto"}
                  onChange={(newTags) =>
                    onChange({
                      ...(region: any),
                      tags: newTags.map((t) => t.value),
                      tag_count: newTags.map((t) => t.value)?.length,
                    })
                  }
                  placeholder="Tags"
                  value={(region.tags || []).map((c) => ({
                    label: c,
                    value: c,
                  }))}
                  isMulti
                  options={asMutable(
                    allowedTags.map((c) => ({ value: c, label: c }))
                  )}
                />
              </div>
            )}
            {allowComments && (
              <TextField
                InputProps={{
                  className: classes.commentBox,
                }}
                fullWidth
                multiline
                rows={3}
                ref={commentInputRef}
                onClick={onCommentInputClick}
                value={region.comment || ""}
                onChange={(event) =>
                  onChange({ ...(region: any), comment: event.target.value })
                }
              />
            )}
            {onClose && (
              <div style={{ marginTop: 4, display: "flex" }}>
                <div style={{ flexGrow: 1 }} />
                <Button
                  onClick={() => {
                    onClose(region)
                  }}
                  size="small"
                  variant="contained"
                  color="primary"
                >
                  <CheckIcon />
                </Button>
              </div>
            )}
          </div>
        )}
      </Paper>
    </ThemeProvider>
  )
}

export default memo(
  RegionLabel,
  (prevProps, nextProps) =>
    prevProps.editing === nextProps.editing &&
    prevProps.region === nextProps.region
)
