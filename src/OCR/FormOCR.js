import { Typography } from "@mui/material"
import React from "react"
import AnnotationInput from "../Components/AnnotationInput"
import LocalStorage from "../Components/LocalStorage"
import { errorSpan, fielderror } from "../Components/ValidationCheck"
let Getrules = LocalStorage.get_task_rules() || {}
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
    editable_data,
  } = item || {}
  let labelStyle = {
    width: "90%",
    overflow: "hidden",

    wordBreak: "break-all",
    display: "inline-block",
  }

  let {
    rules,
    editable_fields,
    save_mandatory_fields,
    find_and_replace,
    hide_physical_link,
    dropdown_data,
  } = Getrules || {}
  let rule_arr = rules?.[title]
  const onActionFieldError = (title, border) => {
    return fielderror(
      rule_arr,
      content,
      editable_data,
      "form",
      false,
      title,
      border
    )
  }
  const fieldValidationMessage = (border) => {
    let { keys, messageShow } = onActionFieldError() || {}
    let errorMess = border ? messageShow?.length : errorSpan(messageShow)

    return keys !== "roundoff"
      ? keys !== "concat"
        ? keys !== "compare"
          ? onActionFieldError()
          : errorMess
        : errorMess
      : errorMess
  }
  return input_type === "label" ? (
    <>
      <p className="font-MontSemiBold task_formlabel">{display_label}</p>
      <Typography>{content}</Typography>
    </>
  ) : input_type === "textArea" ? (
    <>
      <label
        className="task_formlabel"
        htmlFor={display_label}
        style={{ ...labelStyle }}
        title={display_label}
      >
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
      {fieldValidationMessage()}
    </>
  ) : null
}

export default FormOCR

