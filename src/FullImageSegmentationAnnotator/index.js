// @flow
import React from "react"
import Annotator from "../Annotator"

export default (props) => {
  return (
    <Annotator
      {...props}
      fullImageSegmentationMode={true}
      enabledTools={[
        "select",
        "create-point",
        "create-box",
        "create-polygon",
        "show-mask",
      ]}
    />
  )
}
