// @flow

import BrushIcon from "@mui/icons-material/Brush"
import { Grid, Paper } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { useTheme } from "@mui/material/styles"
import React from "react"

export const BrushDialog = ({ open, onClose, brushRadius, setbrushRadius }) => {
  //   const settings = useSettings()
  const brushArr = [5, 10, 12, 16]

  const theme = useTheme()

  return (
    <Dialog open={open || false} onClose={onClose}>
      <DialogTitle>Brush Pointer</DialogTitle>
      <DialogContent style={{ minWidth: 200 }}>
        <Grid
          container={"sm"}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {brushArr.map((item) => (
            <Grid
              item
              xs={6}
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                setbrushRadius(item)
                onClose()
              }}
            >
              <Paper
                brushRadius={brushRadius}
                item={item}
                elevation={0}
                variant="outlined"
                square
                style={{
                  background: brushRadius === item && "#005f86",
                  textAlign: "center",
                  color: brushRadius === item && "white",
                  padding: theme.spacing(1),
                  ...theme.typography.body2,
                }}
              >
                <BrushIcon style={{ height: item }} />
                {item}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      {/* <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions> */}
    </Dialog>
  )
}

export default BrushDialog
