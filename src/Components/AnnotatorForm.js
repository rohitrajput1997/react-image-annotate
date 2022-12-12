import { Grid } from "@mui/material"
import React from "react"
import FormOCR from "../OCR/FormOCR"
import LocalStorage from "./LocalStorage"
let Getrules = LocalStorage.get_task_rules() || {}
window.editable_fields = Getrules.editable_fields
function AnnotatorForm({
  editable_arr = [],
  setAnnotatorFormArr,
  customize_arr = [],
  setCustomize = () => {},
}) {
  let {
    rules,
    editable_fields,
    save_mandatory_fields,
    find_and_replace,
    hide_physical_link,
    dropdown_data,
    visible_fields,
  } = Getrules || {}
  return (
    <>
      {editable_arr?.map((a, index) => {
        return (
          [
            "label",
            "textArea",
            "input",
            "dependentDropdown",
            "dropdown",
          ]?.includes(a?.input_type) &&
          editable_fields?.includes(a.title) &&
          !visible_fields?.includes(a.title) && (
            <Grid item xs={12} md={6} key={index} className="common_inputBox">
              <FormOCR
                index={index}
                editable_arr={editable_arr}
                setFormData={setAnnotatorFormArr}
                item={a}
                customized_column_arr={customize_arr}
                setCustomize={setCustomize}
              />
            </Grid>
          )
        )
      })}
    </>
  )
}

export default AnnotatorForm

