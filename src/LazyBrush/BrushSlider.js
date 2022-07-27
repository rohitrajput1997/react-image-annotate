import BrushIcon from "@mui/icons-material/Brush"
import ClearAllIcon from "@mui/icons-material/ClearAll"
import { createTheme, Fab, Tooltip } from "@mui/material"
import Slider from "@mui/material/Slider"
import * as React from "react"

export default function VerticalSlider({
  setTool,
  brushRadius,
  setbrushRadius,
}) {
  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault()
    }
  }
  const muiTheme = createTheme({
    slider: {
      trackColor: "yellow",
      selectionColor: "red",
    },
  })

  return (
    <>
      <Slider
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: "slider-vertical",
          },
        }}
        marks
        orientation="vertical"
        defaultValue={30}
        aria-label="Temperature"
        valueLabelDisplay="auto"
        onKeyDown={preventHorizontalKeyboardNavigation}
        onChange={(e) => {
          setbrushRadius(e.target.value)
        }}
        value={brushRadius}
        max={20}
        min={1}
        size="small"
        // classes={{
        //   thumb: classes.thumb,
        //   rail: classes.rail,
        //   track: classes.track,
        //   valueLabel: classes.valueLabel,
        //   mark: classes.mark,
        // }}
      />
      <Tooltip title="Brush">
        <Fab
          style={{
            width: "20px",
            minHeight: "20px",
            height: "20px",
            marginTop: "1px",
            background: "rgb(0, 95, 134)",
          }}
          size="small"
          color="primary"
          aria-label="add"
          marks
          onClick={() => setTool("pen")}
          // components={{ Thumb: AirbnbThumbComponent }}
        >
          <BrushIcon style={{ width: "0.7rem", height: "0.7rem" }} />
        </Fab>
      </Tooltip>
      <Tooltip title="Eraser">
        <Fab
          style={{
            width: "20px",
            minHeight: "20px",
            height: "20px",
            marginTop: "1px",
            background: "rgb(0, 95, 134)",
          }}
          size="small"
          color="primary"
          onClick={() => setTool("eraser")}
        >
          <ClearAllIcon style={{ width: "0.7rem", height: "0.7rem" }} />
        </Fab>
      </Tooltip>
    </>
  )
}

