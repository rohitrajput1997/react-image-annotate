import { Grid } from "@mui/material"
import React from "react"
import FormOCR from "../OCR/FormOCR"
import LocalStorage from "./LocalStorage"
let Getrules = LocalStorage.get_task_rules() || {}
window.editable_fields = Getrules.editable_fields
function AnnotatorForm({ AnnotatorFormArr = [], setAnnotatorFormArr }) {
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
      {AnnotatorFormArr?.map((a, index) => {
        return (
          ["label", "textArea", "input"]?.includes(a?.input_type) &&
          editable_fields?.includes(a.title) &&
          !visible_fields?.includes(a.title) && (
            <Grid item xs={12} md={6} key={index} className="common_inputBox">
              <FormOCR
                index={index}
                formData={AnnotatorFormArr}
                setFormData={setAnnotatorFormArr}
                item={a}
                editable_data={AnnotatorFormArr}
              />
            </Grid>
          )
        )
      })}
    </>
  )
}

export default AnnotatorForm
