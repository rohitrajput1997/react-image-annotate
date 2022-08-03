import CheckIcon from "@mui/icons-material/Check"
import TrashIcon from "@mui/icons-material/Delete"
import { Button, IconButton, Paper } from "@mui/material"
import React from "react"
import CreatableSelect from "react-select/creatable"
import { asMutable } from "seamless-immutable"
import colors from "../colors"
const convertHextoRgb = (color) => {
  try {
    let hashRemove = color.replace("#", "")
    console.log(hashRemove, color)
    var aRgbHex = hashRemove.match(/.{1,2}/g)
    var aRgb = [
      parseInt(aRgbHex[0], 16),
      parseInt(aRgbHex[1], 16),
      parseInt(aRgbHex[2], 16),
    ]
    console.log(aRgb)
    return aRgb.toString()
  } catch (err) {
    var aRgbHex = "FF0000".match(/.{1,2}/g)
    var aRgb = [
      parseInt(aRgbHex[0], 16),
      parseInt(aRgbHex[1], 16),
      parseInt(aRgbHex[2], 16),
    ]
    return aRgb.toString()
  }
}
function BrushPopup({
  top,
  left,
  showTags,
  lines,
  lazyBrushClassification,
  lazyBrushTags,
  setLines,
  scale,
}) {
  return (
    <div>
      {showTags &&
        lines?.map(
          (item, index) =>
            item.tool === "pen" && (
              <div
                style={{
                  left: `${item.points[0] * scale}px`,
                  top: `${item.points[1] * scale}px`,
                  position: "absolute",
                }}
              >
                <Paper
                  style={{
                    zIndex: 110,
                    // top: `${19.166664123535156}px`,
                    // left: `${197.90878098221688}px`,
                    position: "absolute",
                    cursor: "pointer",
                  }}
                >
                  {item?.popUp?.open ? (
                    <div style={{ width: 200, padding: 10 }}>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <div
                          style={{
                            display: "flex",
                            backgroundColor:
                              colors[
                                lazyBrushClassification?.findIndex(
                                  (dropdown) =>
                                    dropdown ===
                                    item?.popUp?.classification?.label
                                ) || 0 % colors.length
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
                            linessave.splice(index, 1)
                            lines = linessave
                            setLines(linessave)
                          }}
                          tabIndex={-1}
                          style={{ width: 22, height: 22 }}
                          size="small"
                          variant="outlined"
                        >
                          <TrashIcon
                            style={{ marginTop: -8, width: 16, height: 16 }}
                          />
                        </IconButton>
                      </div>
                      <div style={{ marginTop: 6 }}>
                        <CreatableSelect
                          placeholder="Classification"
                          onChange={(o, actionMeta) => {
                            let linessave = [...lines]
                            lines[index].popUp.classification = o
                            lines[index].color = `rgba(${convertHextoRgb(
                              colors[
                                lazyBrushClassification?.findIndex(
                                  (dropdown) =>
                                    dropdown ===
                                    item?.popUp?.classification?.label
                                ) || 0 % colors.length
                              ] || "#FF0000"
                            )},0.5)`
                     
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
                          value={lines[index].popUp.tags}
                          placeholder="Tags"
                          onChange={(o, actionMeta) => {
                            let linessave = [...lines]
                            lines[index].popUp.tags = o
                            setLines(linessave)
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
                            let linessave = [...lines]
                            lines[index].popUp.open = false
                            setLines(linessave)
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
                    <div
                      style={{ padding: 8 }}
                      onClick={() => {
                        let linessave = [...lines]
                        lines[index].popUp.open = true
                        let i = 0
                        for (i = 0; i < lines?.length; i++) {
                          if (i !== index) {
                            lines[i].popUp.open = false
                          }
                        }
                        setLines(linessave)
                      }}
                    >
                      {item?.popUp?.classification && (
                        <div
                          className="name"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              backgroundColor:
                                colors[
                                  lazyBrushClassification?.findIndex(
                                    (dropdown) =>
                                      dropdown ===
                                      item?.popUp?.classification.label
                                  ) % colors.length
                                ],
                              width: 12,
                              height: 12,
                              borderRadius: 12,
                              marginRight: 8,
                            }}
                          />
                          <span>{item?.popUp?.classification.label}</span>
                        </div>
                      )}

                      <div>
                        {item?.popUp?.tags?.map((t) => (
                          <div
                            key={t.label}
                            style={{
                              color: "gray",
                              display: "inline-block",
                              margin: 1,
                              fontSize: 10,
                              textDecoration: "underline",
                            }}
                          >
                            {t.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </Paper>
              </div>
            )
        )}
    </div>
  )
}

export default BrushPopup
