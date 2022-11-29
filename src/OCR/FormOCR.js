/* eslint-disable no-unused-expressions */
import { Typography } from "@mui/material"
import React from "react"
import NormalInput from "../Components/AnnoatationNormalInput"
import AnnotationInput from "../Components/AnnotationInput"
import LocalStorage from "../Components/LocalStorage"
import {
  errorSpan,
  fielderror,
  ShowCount,
  trimRule,
} from "../Components/ValidationCheck"
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
    symbol_find_replace,
  } = Getrules || {}
  let rule_arr = rules?.[title]
  const onActionFieldError = (title, border) => {
    return fielderror(rule_arr, content, formData, "form", false, title, border)
  }
  const fieldValidationMessage = (border) => {
    let { keys, messageShow } = onActionFieldError() || {}
    let errorMess = border ? messageShow?.length : errorSpan(messageShow)

    return keys !== "roundoff"
      ? keys !== "concat"
        ? onActionFieldError()
        : errorMess
      : errorMess
  }
  const handleOnChangeFields = (value) => {
    let { keys, values } = onActionFieldError()
    let data = [...formData]
    if (keys === "concat") {
      data[index].content = values
    } else {
      data[index].content = value
    }
    setFormData(data)
  }
  const handleRulesApplyOnFoucsBlur = () => {
    let { keys, values } = onActionFieldError() || {}
    console.log(onActionFieldError())
    keys === "roundoff" ? handleOnChangeFields(values, false) : null
    keys === "concat" ? handleOnChangeFields(values, false) : null

    let find_replace_arr = find_and_replace?.[title] || []
    let string = values || content

    if (keys === "concat") {
      string = values
    }

    try {
      if (string) {
        for (let i = 0; i < find_replace_arr?.length; i++) {
          string = string?.replaceAll(
            find_replace_arr[i].search,
            find_replace_arr[i].replace
          )
        }
        let symbol_find_replace_rule = symbol_find_replace?.[title] || {}
        let { find_replace, symbol } = symbol_find_replace_rule || {}
        let symbol_rule_string = ""
        if (find_replace?.length && symbol_rule_string) {
          string = symbol_rule_string
        }
        string = trimRule({ rules_arr: rule_arr, content: string })
        handleOnChangeFields(string)
      }
    } catch (err) {
      console.log("handle_symbol_find_replace break", err)
    }
  }

  return input_type === "label" ? (
    <>
      <p className="font-MontSemiBold task_formlabel">{display_label}</p>
      <Typography>{content}</Typography>
    </>
  ) : input_type === "textArea" ? (
    <>
      <AnnotationInput
        isRequired={mandatory === "mandatory"}
        rows={3}
        title={display_label}
        id={display_label}
        value={content}
        fullWidth
        onChange={(e) => {
          handleOnChangeFields(e.target.value)
        }}
        focused
        onblur={() => handleRulesApplyOnFoucsBlur()}
      />
      {ShowCount({ rules_arr: rules?.[display_label] }) && (
        <span
          style={{ fontSize: "0.7rem" }}
          className="text-green-600 flex justify-start"
        >
          {String(content).length}
        </span>
      )}
      {fieldValidationMessage()}
    </>
  ) : input_type === "input" ? (
    <>
      <NormalInput
        onFocus={() => handleRulesApplyOnFoucsBlur()}
        labelClass="task_formlabel"
        title={display_label}
        value={content}
        onChange={(e) => {
          handleOnChangeFields(e.target.value)
        }}
        isRequired={
          save_mandatory_fields?.includes(title) || mandatory === "mandatory"
        }
        isAstrick={save_mandatory_fields?.includes(title)}
        onblur={() => {
          handleRulesApplyOnFoucsBlur()
        }}
        count={false}
        isTooltip={true}
        // readOnly={valueExist ? readOnly : false}
      />

      {ShowCount({ rules_arr: rules?.[display_label] }) && (
        <span
          style={{ fontSize: "0.7rem" }}
          className="text-green-600 flex justify-start"
        >
          {String(content).length}
        </span>
      )}

      {fieldValidationMessage()}
    </>
  ) : null
}

export default FormOCR

