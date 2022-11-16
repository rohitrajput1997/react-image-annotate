import { faTag, faVectorSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Grid } from "@mui/material"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import * as React from "react"
import AnnotationInput from "./AnnotationInput"

export default function MiniDrawer({
  image_canvas,
  state,
  isImageMode,
  onClickIconSidebarItem,
  layoutORC,
  onChangeLayoutORC,
  handleSubmit,
  isSubmitDisabled,
  deleteAnnotationAllow = false,
  tilte_key = "",
}) {
  const [open, setOpen] = React.useState(false)

  const faStyle = { marginTop: 4, width: 16, height: 16, marginBottom: 4 }
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

  return (
    <>
      <div style={{ display: "flex" }}>
        <>
          <>
            <List>
              {["show-tags", "create-box"].map((text, index) => (
                <ListItem
                  key={text}
                  disablePadding
                  sx={{ display: "block" }}
                  onClick={() => {
                    onClickIconSidebarItem({ name: text })
                  }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {"create-box" === text ? (
                        <FontAwesomeIcon
                          size="xs"
                          fixedWidth
                          icon={faVectorSquare}
                          color={state.selectedTool === text && "#005f86"}
                          style={faStyle}
                        />
                      ) : "show-tags" === text ? (
                        <FontAwesomeIcon
                          size="xs"
                          fixedWidth
                          icon={faTag}
                          color={state.showTags && "#005f86"}
                          style={faStyle}
                        />
                      ) : null}
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </>
          {image_canvas}
        </>
        <div style={{ margin: `10px 20px` }}>
          {/* {isImageMode && (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <AnnotationButton
                  onClick={() => {
                    handleSubmit(state, layoutORC)
                  }}
                  title={"Submit"}
                  isPrimary
                  loading={isSubmitDisabled}
                ></AnnotationButton>
              </div>
            </>
          )} */}
          <Grid
            container
            spacing={(4, 4)}
            direction="column"
            style={{
              maxHeight: "400px",
              overflowY: "scroll",
              overflowX: "hidden",
              minHeight: "400px",
              marginTop: "5px",
            }}
          >
            {layoutORC.map((a, index) => {
              let value = a.value
              let key = a.key
              return (
                a.value && (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    key={index}
                    className="common_inputBox"
                  >
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
                        onChangeLayoutORC(e, key)
                      }}
                      focused
                    />
                  </Grid>
                )
              )
            })}
          </Grid>
        </div>
      </div>
    </>
  )
}
