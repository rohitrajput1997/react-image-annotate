import React from "react"
/* eslint-disable no-unused-expressions */
export const errorSpan = (message) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <span className="common_error">{message}</span>
}
function stringToRegex(s, m) {
  try {
    return (m = s.match(/^([\/~@;%#'])(.*?)\1([gimsuy]*)$/))
      ? new RegExp(
          m[2],
          m[3]
            .split("")
            .filter((i, p, s) => s.indexOf(i) === p)
            .join("")
        )
      : new RegExp(s)
  } catch (err) {
    console.log(err)
  }
}
function round(num, no) {
  if (num && no) {
    const roundOff =
      Math.round((parseFloat(num) + Number.EPSILON) * Math.pow(10, no)) /
      Math.pow(10, no)
    return roundOff
  } else {
    return null
  }
}
export const trimRule = ({ rules_arr = [], content, onChangefield }) => {
  let trimRule = rules_arr?.findIndex((item) => item.rule === "Trim Whitespace")
  if (trimRule !== -1) {
    let newString =
      typeof content === "object"
        ? content
        : String(content)?.replace(/\s\s+/g, " ")?.trim()

    return onChangefield(newString !== "null" ? newString : "", false)
  } else {
    return onChangefield(content !== "null" ? content : "", false)
  }
}

export const TooltipMessage = ({ rules_arr = [], content, onChangefield }) => {
  try {
    let title = ""
    let i = 0
    rules_arr?.map((item) => {
      const data = item?.json?.required_fields?.filter(
        (req) => req.value === "compare" || req.value === "concat"
      )
      if (data?.length > 0) {
        const firstOutput = data?.map((dd) => dd?.child)?.flat(1)
        let val = ""
        for (i of firstOutput) {
          i.value?.map((result) => {
            val += `${result} `
          })
          title = `This field is concatenated of ${val}`
        }
      }
    })
    return title
  } catch (err) {
    console.log(err)
  }
}
export const validate_data = ({ rules_arr }) => {
  try {
    let opt = []
    rules_arr?.map((item) => {
      const data = item?.json?.required_fields?.filter(
        (req) => req.value === "validate_data"
      )
      if (data?.length > 0) {
        const firstOutput = data?.map((dd) => dd?.value)
        opt = firstOutput
      }
    })
    return opt?.includes("validate_data") ? true : false
  } catch (err) {
    console.log(err)
  }
}
export const autoLoadButton = ({ rules_arr = [] }) => {
  try {
    let title = ""
    let front_string = ""
    let i = 0
    rules_arr?.map((item) => {
      const data = item?.json?.required_fields?.filter(
        (req) => req.value === "autoload_data"
      )
      if (data?.length > 0) {
        const firstOutput = data?.map((dd) => dd?.child)?.flat(1)
        for (i of firstOutput) {
          if (i.type === "dropdown") {
            title = i.value
          } else if (i.type === "textarea") {
            front_string = i.value
          }
        }
      }
    })
    return { title, front_string }
  } catch (err) {
    console.log(err)
  }
}

export const fielderror = (
  rules = [],
  value = "",
  editable_arr,
  layouttype,
  submit,
  title
) => {
  let text = ""
  let messageShow = ""
  for (let i = 0; i < rules.length; i++) {
    let r = rules[i]

    if (r?.json?.rule_data?.regex) {
      const pattern = stringToRegex(`${r?.json?.rule_data?.regex}`)
      if (value) {
        if (r.rule_id === 5) {
          if (String(value)?.match(pattern)) {
            text = submit
              ? { [title]: true }
              : errorSpan(r?.json?.rule_data?.validation_message)
            messageShow = r?.json?.rule_data?.validation_message
            break
          }
        } else {
          if (!pattern?.test(String(value))) {
            text = submit
              ? { [title]: true }
              : errorSpan(r?.json?.rule_data?.validation_message)
            messageShow = r?.json?.rule_data?.validation_message
            break
          }
        }
      }
    }

    if (r?.json?.required_fields) {
      for (let j = 0; j < r?.json?.required_fields.length; j++) {
        let type = r?.json?.required_fields?.[j]?.value
        const child = r?.json?.required_fields?.[j]?.child || []

        if (
          type === "greater_than_a_number" ||
          type === "greater_than_a_field"
        ) {
          const no =
            type === "greater_than_a_field"
              ? getValueArr(child, editable_arr, layouttype, submit)
              : child[0].value
              ? { value: parseFloat(child?.[0].value), title: "" }
              : { value: 0, title: "" }
          let message =
            type === "greater_than_a_field" ? no?.["title"] : no?.["value"]

          if (value) {
            if (parseFloat(value) <= parseFloat(no?.["value"])) {
              text = submit
                ? { [title]: true }
                : errorSpan(`Value should be greater than ${message}`)
              messageShow = `Value should be greater than ${message}`
              break
            } else {
              if (isNaN(parseFloat(value))) {
                text = submit
                  ? { [title]: true }
                  : errorSpan(`Value should be greater than ${message}`)
                messageShow = `Value should be greater than ${message}`
                break
              }
            }
          }
        } else if (
          type === "less_than_a_number" ||
          type === "less_than_a_field"
        ) {
          const no =
            type === "less_than_a_field"
              ? getValueArr(child, editable_arr, layouttype, submit)
              : child?.[0].value
              ? { value: parseFloat(child?.[0].value), title: "" }
              : { value: 0, title: "" }
          let message =
            type === "less_than_a_field" ? no?.["title"] : no?.["value"]
          if (value) {
            if (parseFloat(value) >= parseFloat(no?.["value"])) {
              text = submit
                ? { [title]: true }
                : errorSpan(`Value should be lesser than ${message}`)
              messageShow = `Value should be lesser than ${message}`
              break
            } else {
              if (isNaN(parseFloat(value))) {
                text = submit
                  ? { [title]: true }
                  : errorSpan(`Value should be lesser than ${message}`)
                messageShow = `Value should be lesser than ${message}`
                break
              }
            }
          }
        } else if (
          type === "equal_to_a_number" ||
          type === "equal_to_a_field"
        ) {
          if (type === "equal_to_a_field") {
            const no = getValueArr(
              child,
              editable_arr,
              layouttype,
              submit,
              type
            )
            if (value) {
              if (String(value) !== String(no?.[0])) {
                text = submit
                  ? no === true
                    ? false
                    : { [title]: true }
                  : no === true
                  ? ""
                  : errorSpan(`Value should be equal to ${no?.[1]}`)
                messageShow = `Value should be equal to ${no?.[1]}`
                break
              }
            }
          } else {
            const no = parseFloat(child[0].value)
            if (value) {
              if (parseFloat(value) !== parseFloat(no)) {
                text = submit
                  ? no === true
                    ? false
                    : { [title]: true }
                  : no === true
                  ? ""
                  : errorSpan(`Value should be equal to ${no}`)
                messageShow = `Value should be equal to ${no}}`
                break
              } else {
                if (isNaN(parseFloat(value))) {
                  text = submit
                    ? { [title]: true }
                    : errorSpan(`Value should be equal to ${no}`)
                  messageShow = `Value should be equal to ${no}}`
                  break
                }
              }
            }
          }
        } else if (type === "length_range") {
          let childRange = child.map(({ value }) => value)?.toString()
          let RegexLength = childRange?.split(",")
          if (value && RegexLength?.[0] && RegexLength?.[1]) {
            if (
              value?.length >= parseInt(RegexLength?.[0]) &&
              value?.length <= parseInt(RegexLength?.[1])
            ) {
              //
            } else {
              text = submit
                ? { [title]: true }
                : errorSpan(
                    `Input value should be between  ${childRange.replace(
                      ",",
                      "-"
                    )} characters`
                  )
              messageShow = `Input value should be between  ${childRange.replace(
                ",",
                "-"
              )} characters}`

              break
            }
          }
        } else if (type === "custom_validation_by_regex") {
          let regex = child[0].value ? child[0].value : ""
          if (regex) {
            const pattern = stringToRegex(regex)
            if (value) {
              if (!pattern?.test(String(value))) {
                text = submit ? { [title]: true } : errorSpan("Invalid value")
                messageShow = "Invalid value"
                break
              }
            }
          }
        } else if (type === "round_off_till_a number") {
          const no = child[0].value ? child[0].value : ""
          if (no && value) {
            if (isNaN(round(value, parseInt(no)))) {
              text = submit
                ? { [title]: true }
                : errorSpan("Only numeric value is allow")
              messageShow = "Only numeric value is allow"
              break
            } else {
              text = submit
                ? {
                    [title]: messageShow.length
                      ? true
                      : String(round(value, parseInt(no))) !== String(value)
                      ? true
                      : false,
                  }
                : {
                    keys: "roundoff",
                    values: round(value, parseInt(no)),
                    messageShow:
                      String(round(value, parseInt(no))) !== String(value)
                        ? "Please round of the value"
                        : messageShow,
                  }
              break
            }
          }
        } else if (type === "mandatory_if_a_field_is_filled") {
          const no =
            type === "mandatory_if_a_field_is_filled"
              ? getValueArr(child, editable_arr, layouttype, submit, type)
              : child?.[0].value
              ? parseFloat(child[0].value)
              : 0
          if (value === "" || value === null || value === undefined) {
            if (!no) {
              text = submit
                ? { [title]: true }
                : errorSpan("Please fill mandatory fields")
              messageShow = "Please fill mandatory fields"
              break
            }
          }
        } else if (type === "non_mandatory_if_a_field_is_filled") {
          const no =
            type === "non_mandatory_if_a_field_is_filled"
              ? getValueArr(child, editable_arr, layouttype, submit, type)
              : child?.[0].value
              ? parseFloat(child[0].value)
              : 0

          if (value) {
            text = submit ? { ...no, parent: value } : false
            break
          }
        } else if (type === "concat") {
          let concatString = child?.map((item) =>
            editable_arr
              ?.map(
                (editable) =>
                  item?.value?.includes(editable.title) && editable?.content
              )
              .filter(Boolean)
          )
          let comaprestring = concatString.flat()?.join(" ")
          let result = comaprestring.localeCompare(value)
          text = submit
            ? { [title]: messageShow.length ? true : result ? true : false }
            : {
                keys: "concat",
                values: comaprestring,
                messageShow: result ? "Please concat this field" : messageShow,
              }
          break
        } else if (type === "compare") {
          try {
            let concatString = child?.map((item) =>
              editable_arr
                ?.map(
                  (editable) =>
                    item?.value?.includes(editable.title) && editable?.content
                )
                .filter(Boolean)
            )
            if (value) {
              let comaprestring = concatString.flat()?.join(" ")
              let result = comaprestring.localeCompare(value)
              if (result) {
                text = submit
                  ? { [title]: true }
                  : errorSpan(`Please update value to ${comaprestring}`)
                messageShow = `Please update value to ${comaprestring}`
                break
              }
            }
          } catch (err) {
            //
          }
          //
        } else if (type === "restrict_special_characters") {
          if (value) {
            try {
              var format = stringToRegex(`[${child[0].value}]`)
              if (format.test(value)) {
                text = submit
                  ? { [title]: true }
                  : errorSpan("Enter Characters to be Restricted")
                messageShow = "Enter Characters to be Restricted"
              }
            } catch (err) {
              console.log("resricted validation break")
            }
          } else {
            //
          }
        }
      }
    }
  }
  return text
}

export const getValueArr = (child, editable_arr, layouttype, submit, type) => {
  let value = ""
  let text = ""
  if (layouttype === "excel") {
    child?.forEach((c) => {
      c?.value?.forEach((v) => {
        try {
          editable_arr?.forEach((e1) => {
            if (type === "mandatory_if_a_field_is_filled") {
              if (e1.title === v) {
                if (
                  e1.content === null ||
                  e1.content === undefined ||
                  e1.content === ""
                ) {
                  text = submit ? true : true
                } else {
                  text = submit ? false : false
                }
              }
            } else if (type === "non_mandatory_if_a_field_is_filled") {
              if (e1.title === v) {
                if (
                  e1.content === null ||
                  e1.content === undefined ||
                  e1.content === ""
                ) {
                  text = submit
                    ? { title: e1.title, content: e1.content }
                    : { title: e1.title, content: e1.content }
                } else {
                  text = submit
                    ? { title: e1.title, content: e1.content }
                    : { title: e1.title, content: e1.content }
                }
              }
            } else {
              if (e1.title === v) {
                if (type === "equal_to_a_field" && e1.content) {
                  value = [e1.content, v]
                } else {
                  if (e1.content && isNaN(e1.content)) {
                    text = submit ? true : errorSpan("invalid data")
                  } else if (e1.content) {
                    value = { value: value + parseFloat(e1.content), title: v }
                  } else if (
                    value === "" ||
                    value === null ||
                    value == undefined
                  ) {
                    text = submit ? true : { value: value, title: v }
                  }
                }
              }
            }
          })
        } catch (err) {
          console.log(err)
        }
      })
    })
    if (text === "") {
      return value
    } else {
      return text
    }
  } else if (layouttype === "group") {
    child?.forEach((c) => {
      c?.value?.forEach((v) => {
        Object.keys(editable_arr).map((e) => {
          editable_arr[e].forEach((e1) => {
            if (type === "mandatory_if_a_field_is_filled") {
              if (e1.title === v) {
                if (
                  e1.content === null ||
                  e1.content === undefined ||
                  e1.content == ""
                ) {
                  text = submit ? true : true
                } else {
                  text = submit ? false : false
                }
              }
            } else {
              if (e1.title === v) {
                if (e1.content && isNaN(e1.content)) {
                  text = submit ? true : errorSpan("invalid data")
                } else if (e1.content) {
                  value = value + parseFloat(e1.content)
                }
              }
            }
          })
        })
      })
    })
    if (text === "") {
      return value
    } else {
      return text
    }
  } else if (layouttype === "form") {
    child?.forEach((c) => {
      c?.value?.forEach((v) => {
        try {
          editable_arr?.forEach((e1) => {
            if (type === "mandatory_if_a_field_is_filled") {
              if (e1.title === v) {
                if (
                  e1.content === null ||
                  e1.content === undefined ||
                  e1.content == ""
                ) {
                  text = submit ? true : true
                } else {
                  text = submit ? false : false
                }
              }
            } else if (type === "non_mandatory_if_a_field_is_filled") {
              if (e1.title === v) {
                if (
                  e1.content === null ||
                  e1.content === undefined ||
                  e1.content == ""
                ) {
                  text = submit ? { title: e1.title } : { title: e1.title }
                } else {
                  text = submit ? { title: e1.title } : { title: e1.title }
                }
              }
            } else {
              if (e1.title === v) {
                if (type === "equal_to_a_field" && e1.content) {
                  value = [e1.content, v]
                } else {
                  if (e1.content && isNaN(e1.content)) {
                    text = submit ? true : errorSpan("invalid data")
                  } else if (e1.content) {
                    value = { value: value + parseFloat(e1.content), title: v }
                  } else if (
                    value === "" ||
                    value === null ||
                    value == undefined
                  ) {
                    text = submit ? true : { value: value, title: v }
                  }
                }
              }
            }
          })
        } catch (err) {
          console.log(err, "form")
        }
      })
    })
    if (text === "") {
      return value
    } else {
      return text
    }
  }
}
