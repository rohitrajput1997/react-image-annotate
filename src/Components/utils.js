import React from "react"
export const image_ocr_map = (editable_fields, annotation) => {
  try {
    let mapArr = new Map()
    // eslint-disable-next-line no-unused-expressions
    annotation?.map((d, index) => {
      const data = editable_fields.find((e) => e.title === d.cls)
      mapArr.set(index, {
        value: data?.content,
        name: data?.title,
      })
    })

    return mapArr
  } catch {
    return []
  }
}
export const handleTooltipMessage = ({ title, count, isTooltip }) => {
  let starCount = "*".repeat(count)

  return isTooltip ? <>{` ${starCount}`}</> : " *"
}
