/* eslint-disable no-loop-func */
/* eslint-disable no-unused-expressions */
import { Typography } from "@mui/material"
import React from "react"
import CreatableSelect from "react-select/creatable"
import NormalInput from "../Components/AnnoatationNormalInput"
import AnnotationInput from "../Components/AnnotationInput"
import LocalStorage from "../Components/LocalStorage"

import {
  errorSpan,
  fielderror,
  isNonMandatoryEditable,
  ShowCount,
  trimRule,
} from "../Components/ValidationCheck"
let Getrules = LocalStorage.get_task_rules() || {}
let editable_type = [
  "textArea",
  "dropdown",
  "multiSelectDropdown",
  "dependentDropdown",
  "input",
  "date",
  "checkbox",
  "radio",
  "classification",
  "tags",
  "text_annotation",
]

function FormOCR({
  index,
  formData,
  setFormData,
  item,
  editable_arr,
  customized_column_arr,
  column_key,
  setCustomize,
}) {
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
    dependent_rule_all_data,
  } = Getrules || {}
  let rule_arr = rules?.[title]
  const onActionFieldError = (title, border) => {
    return fielderror(
      rule_arr,
      content,
      editable_arr,
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
        ? onActionFieldError()
        : errorMess
      : errorMess
  }
  const handleOnChangeFields = (value) => {
    let { keys, values } = onActionFieldError()
    let data = [...editable_arr]
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
  let getDependentFields = dependent_rule_all_data?.[0]?.dependent_rule?.[title]
  let getDropdown_data = dependent_rule_all_data?.[0]?.dependent_data
  let getFieldContent =
    [...editable_arr, ...customized_column_arr]?.find(
      (item) => item.title === getDependentFields
    )?.content || ""
  const handledependentDropdown = (event, detect, isDependent, title) => {
    let update_Dependentvalue = (arr) => {
      let editable = [...editable_arr]
      let customize = [...customized_column_arr]
      let editable_key = ""
      let customized_key = ""
      if (column_key === "editable_column") {
        editable_key = "editable"
        customized_key = "customized_column"
      } else if (column_key === "customized_column") {
        editable_key = "customized_column"
        customized_key = "editable"
      }

      editable.map((item, editable) => {
        if (arr.includes(String(item.title))) {
          let data = [...editable_arr]
          data[editable].content = ""
          setFormData(data)
        }
      })
      customize?.map((item, customizeIndex) => {
        if (arr.includes(String(item.title))) {
          let data = [...customized_column_arr]
          data[customizeIndex].content = ""
          setCustomize(data)
        }
      })
    }
    if (!detect && isDependent) {
      let dependentKeys = Object.keys(
        dependent_rule_all_data?.[0]?.dependent_rule || {}
      )
      update_Dependentvalue(dependentKeys)
    } else if (isDependent) {
      let d = dependent_rule_all_data?.[0]?.dependent_rule
      let d1 = []
      let current = title
      let nextCheck = false
      do {
        nextCheck = false
        Object.keys(d).map((key) => {
          if (d[key] === current) {
            nextCheck = true
            d1.push(key)
            current = key
          }
        })
      } while (nextCheck)
      update_Dependentvalue(d1)
    }
    handleOnChangeFields(event, false, event)
    if (!detect && isDependent) {
      let dependentKeys = Object.keys(
        dependent_rule_all_data?.[0]?.dependent_rule || {}
      )

      update_Dependentvalue(dependentKeys)
    }
  }
  let { readOnly, valueExist } =
    isNonMandatoryEditable({
      rules_arr: rule_arr,
      editable_arr: [...editable_arr, customized_column_arr],
    }) || {}
  let editable =
    editable_fields?.includes(title) &&
    (editable_type.includes(input_type) ? true : false)
  return input_type === "label" ? (
    <>
      <p className="font-MontSemiBold task_formlabel">{display_label}</p>
      <Typography>{content}</Typography>
    </>
  ) : input_type === "textArea" ? (
    <>
      <AnnotationInput
        labelClass="task_formlabel"
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
        readOnly={valueExist ? readOnly : false}
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
        readOnly={valueExist ? readOnly : false}
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
  ) : input_type === "dependentDropdown" ? (
    <>
      <label
        className="title_input_box task_formlabel"
        style={{ ...labelStyle }}
      >
        {display_label}
      </label>
      <CreatableSelect
        isSearchable={true}
        menuPosition="fixed"
        menuPlacement={"auto"}
        onChange={(e) => {
          handledependentDropdown(e.value, getDependentFields, true, title)
        }}
        placeholder={display_label}
        value={content && { value: content, label: content }}
        options={
          getDependentFields
            ? getDropdown_data[getDependentFields]?.[getFieldContent]?.map(
                (c) => ({
                  value: c,
                  label: c,
                })
              )
            : Object.keys(getDropdown_data?.[title] || {}).map((c) => ({
                value: c,
                label: c,
              }))
        }
      />
    </>
  ) : input_type === "dropdown" ? (
    <>
      <label
        className="title_input_box task_formlabel"
        style={{ ...labelStyle }}
      >
        {display_label}
      </label>
      <CreatableSelect
        isSearchable={true}
        menuPosition="fixed"
        menuPlacement={"auto"}
        onChange={(e) => {
          handleOnChangeFields(e.value, getDependentFields, true, title)
        }}
        placeholder={display_label}
        value={content && { value: content, label: content }}
        options={LocalStorage.get_dropdown()?.[title]?.map((c) => ({
          label: c.label,
          value: c.value,
        }))}
      />
    </>
  ) : null
}

export default FormOCR

