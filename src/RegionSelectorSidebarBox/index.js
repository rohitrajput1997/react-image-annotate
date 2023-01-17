// @flow

import TrashIcon from "@mui/icons-material/Delete"
import LockIcon from "@mui/icons-material/Lock"
import UnlockIcon from "@mui/icons-material/LockOpen"
import RegionIcon from "@mui/icons-material/PictureInPicture"
import ReorderIcon from "@mui/icons-material/SwapVert"
import VisibleIcon from "@mui/icons-material/Visibility"
import VisibleOffIcon from "@mui/icons-material/VisibilityOff"
import { Tooltip } from "@mui/material"
import { grey } from "@mui/material/colors"
import Grid from "@mui/material/Grid"
import { createTheme, styled, ThemeProvider } from "@mui/material/styles"
import { makeStyles } from "@mui/styles"
import classnames from "classnames"
import isEqual from "lodash/isEqual"
import React, { memo, useState } from "react"
import SidebarBoxContainer from "../SidebarBoxContainer"
import styles from "./styles"

const theme = createTheme()
const useStyles = makeStyles((theme) => styles)

const HeaderSep = styled("div")(({ theme }) => ({
  borderTop: `1px solid ${grey[200]}`,
  marginTop: 2,
  marginBottom: 2,
}))

const Chip = ({ color, text }) => {
  const classes = useStyles()
  return (
    <span className={classes.chip}>
      <div className="color" style={{ backgroundColor: color }} />
      <div className="text">{text}</div>
    </span>
  )
}

const RowLayout = ({
  header,
  highlighted,
  order,
  classification,
  area,
  tags,
  trash,
  lock,
  visible,
  onClick,
}) => {
  const classes = useStyles()
  const [mouseOver, changeMouseOver] = useState(false)
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => changeMouseOver(true)}
      onMouseLeave={() => changeMouseOver(false)}
      className={classnames(classes.row, { header, highlighted })}
    >
      <Grid container alignItems="center">
        <Grid item xs={2}>
          <div style={{ textAlign: "right", paddingRight: 10 }}>{order}</div>
        </Grid>
        <Grid item xs={5}>
          {classification}
        </Grid>
        <Grid item xs={2}>
          <div style={{ textAlign: "right", paddingRight: 6 }}>{area}</div>
        </Grid>
        <Grid item xs={1}>
          {trash}
        </Grid>
        <Grid item xs={1}>
          {lock}
        </Grid>
        <Grid item xs={1}>
          {visible}
        </Grid>
      </Grid>
    </div>
  )
}

const RowHeader = () => {
  return (
    <RowLayout
      header
      highlighted={false}
      order={<ReorderIcon className="icon" />}
      classification={<div style={{ paddingLeft: 10 }}>Class</div>}
      // area={<PieChartIcon className="icon" />}
      trash={
        <Tooltip title="Delete">
          <TrashIcon className="icon" />
        </Tooltip>
      }
      lock={
        <Tooltip title="Lock/Unlock">
          <LockIcon className="icon" />
        </Tooltip>
      }
      visible={
        <Tooltip title="Show/Hide">
          <VisibleIcon className="icon" />
        </Tooltip>
      }
    />
  )
}

const MemoRowHeader = memo(RowHeader)

const Row = ({
  region: r,
  highlighted,
  onSelectRegion,
  onDeleteRegion,
  onChangeRegion,
  visible,
  locked,
  color,
  cls,
  index,
  delete_annotation,
  setdelete_annotation,
}) => {
  return (
    <RowLayout
      header={false}
      highlighted={highlighted}
      onClick={() => onSelectRegion(r)}
      order={`#${index + 1}`}
      classification={<Chip text={cls || ""} color={color || "#ddd"} />}
      area=""
      trash={
        <Tooltip title="Delete">
          <TrashIcon
            onClick={() => {
              onDeleteRegion(r)
              let delet_arr = [...delete_annotation]
              delet_arr.push(r)
              let filterArr =
                delet_arr &&
                delet_arr
                  .filter(
                    (arr, index, self) =>
                      index === self.findIndex((t) => t.id === arr.id && arr.id)
                  )
                  .map((item) => item)
              setdelete_annotation(filterArr)
            }}
            className="icon2"
          />
        </Tooltip>
      }
      lock={
        r.locked ? (
          <Tooltip title="Unlock">
            <LockIcon
              onClick={() => onChangeRegion({ ...r, locked: false })}
              className="icon2"
            />
          </Tooltip>
        ) : (
          <Tooltip title="Lock">
            <UnlockIcon
              onClick={() => onChangeRegion({ ...r, locked: true })}
              className="icon2"
            />
          </Tooltip>
        )
      }
      visible={
        r.visible || r.visible === undefined ? (
          <Tooltip title="Hide">
            <VisibleIcon
              onClick={() => onChangeRegion({ ...r, visible: false })}
              className="icon2"
            />
          </Tooltip>
        ) : (
          <Tooltip title="Show">
            <VisibleOffIcon
              onClick={() => onChangeRegion({ ...r, visible: true })}
              className="icon2"
            />
          </Tooltip>
        )
      }
    />
  )
}

const MemoRow = memo(
  Row,
  (prevProps, nextProps) =>
    prevProps.highlighted === nextProps.highlighted &&
    prevProps.visible === nextProps.visible &&
    prevProps.locked === nextProps.locked &&
    prevProps.id === nextProps.id &&
    prevProps.index === nextProps.index &&
    prevProps.cls === nextProps.cls &&
    prevProps.color === nextProps.color
)

const emptyArr = []

export const RegionSelectorSidebarBox = ({
  regions = emptyArr,
  onDeleteRegion,
  onChangeRegion,
  onSelectRegion,
  delete_annotation,
  setdelete_annotation,
}) => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <SidebarBoxContainer
        title="Regions"
        subTitle=""
        icon={<RegionIcon style={{ color: grey[700] }} />}
        expandedByDefault
      >
        <div className={classes.container}>
          <MemoRowHeader />
          <HeaderSep />
          {regions.map((r, i) => (
            <MemoRow
              key={r.id}
              {...r}
              region={r}
              index={i}
              onSelectRegion={onSelectRegion}
              onDeleteRegion={onDeleteRegion}
              onChangeRegion={onChangeRegion}
              delete_annotation={delete_annotation}
              setdelete_annotation={setdelete_annotation}
            />
          ))}
        </div>
      </SidebarBoxContainer>
    </ThemeProvider>
  )
}

const mapUsedRegionProperties = (r) => [
  r.id,
  r.color,
  r.locked,
  r.visible,
  r.highlighted,
]

export default memo(RegionSelectorSidebarBox, (prevProps, nextProps) =>
  isEqual(
    (prevProps.regions || emptyArr).map(mapUsedRegionProperties),
    (nextProps.regions || emptyArr).map(mapUsedRegionProperties)
  )
)
