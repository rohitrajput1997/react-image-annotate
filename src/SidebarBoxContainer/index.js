// @flow

import { createTheme, ThemeProvider } from "@mui/material/styles"
import { makeStyles } from "@mui/styles"
import classnames from "classnames"
import SidebarBox from "ns_workflow_workspace/SidebarBox"
import React, { memo, useState } from "react"
import useEventCallback from "use-event-callback"

const theme = createTheme()
const useStyles = makeStyles((theme) => ({
  container: { margin: 8 },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    flexGrow: 1,
    paddingLeft: 8,
    color: "#005f86 !important",
    "& span": {
      color: "#005f86 !important",
      fontSize: 12,
    },
  },
  expandButton: {
    padding: 0,
    width: 30,
    height: 30,
    "& .icon": {
      marginTop: -6,
      width: 20,
      height: 20,
      transition: "500ms transform",
      "&.expanded": {
        transform: "rotate(180deg)",
        position: "fixed !important",
        right: "0px !important",
        zIndex: "100 !important",
      },
    },
  },
  expandedContent: {
    maxHeight: 500,
    overflowY: "auto",
    "&.noScroll": {
      overflowY: "visible",
      overflow: "visible",
    },
  },
}))

export const SidebarBoxContainer = ({
  icon,
  title,
  subTitle,
  children,
  noScroll = false,
  expandedByDefault = false,
}) => {
  const classes = useStyles()
  const content = (
    <div
      className={classnames(classes.expandedContent, noScroll && "noScroll")}
    >
      {children}
    </div>
  )

  const [expanded, changeExpanded] = useState(expandedByDefault)
  const toggleExpanded = useEventCallback(() => changeExpanded(!expanded))

  return (
    <ThemeProvider theme={theme}>
      <SidebarBox icon={icon} title={title}>
        {children}
      </SidebarBox>
    </ThemeProvider>
  )
}

export default memo(
  SidebarBoxContainer,
  (prev, next) => prev.title === next.title && prev.children === next.children
)

