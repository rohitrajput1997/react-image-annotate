import { Typography } from "@mui/material"
import React from "react"
import AnnotationInput from "../Components/AnnotationInput"

function FormOCR({ index, formData, setFormData, item }) {
  let {
    invalid,
    description_labelling,
    image_urls_labelling,
    title,
    default_type,
    display_label,
    content,
    input_type,
    value,
    other_value,
    mandatory,
    history_hide,
  } = item || {}
  return input_type === "label" ? (
    <>
      <p className="font-MontSemiBold task_formlabel">{display_label}</p>
      <Typography>{content}</Typography>
    </>
  ) : input_type === "textArea" ? (
    <>
      <label className="task_formlabel" htmlFor={display_label}>
        {display_label}
      </label>
      <AnnotationInput
        isRequired={mandatory === "mandatory"}
        rows={3}
        // title={value.name}
        id={display_label}
        value={content}
        fullWidth
        onChange={(e) => {
          let data = [...formData]
          data[index].content = e.target.value
          setFormData(data)
        }}
        focused
      />
    </>
  ) : null
}

export default FormOCR

