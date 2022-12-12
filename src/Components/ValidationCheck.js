import React from "react"
/* eslint-disable no-unused-expressions */

export const errorSpan = (message) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <span className="common_error">{message}</span>
}
function removeLeadingZeros(str) {
  // Regex to remove leading
  // zeros from a string
  const regex = new RegExp("^0+(?!$)", "g")

  // Replaces the matched
  // value with given string
  str = str.replaceAll(regex, "")

  return str
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
function isNumeric(n) {
  try {
    let num = String(n)?.trim()
    return !isNaN(parseFloat(num) && isFinite(num))
  } catch {
    return false
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
export const trimRule = ({
  rules_arr = [],
  content,
  onChangefield,
  params,
}) => {
  let trimRule = rules_arr?.findIndex((item) => item.rule === "Trim Whitespace")
  if (trimRule !== -1) {
    let newString =
      typeof content === "object"
        ? content
        : String(content)?.replace(/\s\s+/g, " ")?.trim()
    return newString
  } else {
    return content
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
export const isNonMandatoryEditable = ({ rules_arr = [], editable_arr }) => {
  try {
    let readOnly = ""
    let title = ""
    let i = 0
    rules_arr?.map((item) => {
      const data = item?.json?.required_fields?.filter(
        (req) => req.value === "non_mandatory_if_a_field_is_filled"
      )
      if (data?.length > 0) {
        const firstOutput = data?.map((dd) => dd?.child)?.flat(1)
        for (i of firstOutput) {
          if (i.type === "checkbox") {
            readOnly = i.value === true ? true : false
          } else if (i.type === "dropdown") {
            title = i.value
          }
        }
      }
    })
    let valueExist = editable_arr?.find(
      (item) => title.includes(item.title) && item.content
    )?.content
    return { readOnly, title, valueExist }
  } catch (err) {
    console.log(err)
  }
}

export const handle_symbol_find_replace = (
  user_rule_arr = [],
  original_string = "",
  symbol
) => {
  let new_string = ""
  for (let i = 0; i < original_string.length; i++) {
    let total_string = ""
    if (original_string[i] === symbol) {
      for (let j = i; j < original_string.length + 1; j++) {
        if (original_string[j] !== symbol) {
          i = j - 1
          break
        }
        if (original_string[j] === symbol) {
          total_string += original_string[j]
        }
      }
      if (user_rule_arr.find((val) => val.search === total_string)) {
        new_string += user_rule_arr.find(
          (val) => val.search === total_string
        ).replace
      } else {
        new_string += total_string
      }
    } else {
      new_string += original_string[i]
    }
  }
  return new_string
}

export const ShowCount = ({ rules_arr = [] }) => {
  try {
    let opt = []
    rules_arr?.map((item) => {
      const data = item?.json?.required_fields?.filter(
        (req) => req.value === "length_range"
      )
      if (data?.length > 0) {
        const firstOutput = data?.map((dd) => dd?.value)
        opt = firstOutput
      }
    })
    return opt?.includes("length_range") ? true : false
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
              String(value)?.length >= parseInt(RegexLength?.[0]) &&
              String(value)?.length <= parseInt(RegexLength?.[1])
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
                ? { [title]: true, mandatory: "" }
                : errorSpan("Please fill mandatory fields")
              messageShow = "Please fill mandatory fields"
              break
            } else {
              text = submit ? { [title]: false, mandatory: false } : errorSpan()

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

          if (!value) {
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
        } else if (type === "contains") {
          try {
            let contains_rule_arr =
              child?.map((item) =>
                editable_arr?.reduce((acc, editable) => {
                  if (
                    item?.value?.includes(editable.title) &&
                    editable?.content?.trim()
                  ) {
                    acc[editable?.content?.trim()] = editable.title
                    // acc[editable.title] = editable?.content?.trim();
                  }
                  return acc
                }, {})
              ) || []
            // let contain_arr = child?.map((item) => editable_arr?.map((editable) => item?.value?.includes(editable.title) && editable?.content?.trim()).filter(Boolean));

            if (value) {
              let final_obj = contains_rule_arr.flat().filter(Boolean)?.[0]
              let final_contain_arr = Object.keys(final_obj || {})
              let missing_word = []
              const data =
                final_contain_arr.map((item) => {
                  let arr_item = item?.toLowerCase()
                  let main_string = String(value)
                    ?.toLowerCase()
                    .replace(/[()]/g, "")
                  var pattern = new RegExp("(^|\\W)" + arr_item + "($|\\W)")

                  let condition = main_string.match(pattern)
                  if (condition) {
                    let matching_word = condition[0].trim()
                    let index_number =
                      condition.index === 0 ? 0 : condition.index + 1
                    let subString = main_string.substring(
                      index_number,
                      index_number + item.length
                    )
                    if (matching_word === subString) {
                      return item
                    } else {
                      missing_word.push(`${final_obj[item]} '${item}'`)
                      return -1
                    }
                  } else {
                    missing_word.push(` ${final_obj[item]} '${item}'`)
                    return -1
                  }
                }) || []
              if (data.includes(-1) && missing_word?.length) {
                text = submit
                  ? { [title]: true }
                  : errorSpan(`${missing_word} not available`)
                messageShow = `${missing_word} not available`
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
        } else if (type === "start_end_string") {
          let checkStart = true
          const validatingValue = r?.json?.required_fields[0]?.child?.[1]?.value

          if (value) {
            try {
              if (
                r?.json?.required_fields[0]?.child?.[0]?.value?.[0] === "start"
              ) {
                checkStart = value.startsWith(validatingValue)
                if (!checkStart) {
                  text = submit
                    ? { [title]: true }
                    : errorSpan(`Text should start with ${validatingValue}`)
                  messageShow = `Text should start with ${validatingValue}`
                }
              } else if (
                r?.json?.required_fields[0]?.child?.[0]?.value?.[0] === "end"
              ) {
                checkStart = value.endsWith(validatingValue)
                if (!checkStart) {
                  text = submit
                    ? { [title]: true }
                    : errorSpan(`Text should ends with ${validatingValue}`)
                  messageShow = `Text should ends with ${validatingValue}`
                }
              }
            } catch (err) {
              console.log("Start and ends strings are not matching")
            }
          } else {
            //
          }
        } else if (type === "lesser_greater_than_a_field_value_specific") {
          let compared_arr = r?.json?.required_fields[0]?.child || []
          let findCompareFiled =
            compared_arr?.find(
              (item) => item.label === "Select A Field to be compared with"
            )?.value || []
          let compare_field_shouldbe =
            compared_arr?.find(
              (item) => item.label === "Compared field should be"
            ) || {}
          let selected_value =
            compared_arr?.find(
              (item) => item.label === "Value for the selected field should be"
            )?.value || ""
          let find_field =
            compared_arr?.find(
              (item) => item.label === "Final field should be"
            ) || []
          let final_field_sholuld_be =
            compared_arr?.find(
              (item) => item.label === "Value for the final field should be"
            )?.value || ""
          let user_final_fields = editable_arr?.find(
            (item) => item.title === findCompareFiled?.[0]
          )?.content
          // text = submit ? { [title]: true } : errorSpan(` ${user_final_fields}`);

          if (isNumeric(user_final_fields) && isNumeric(value)) {
            try {
              if (
                eval(
                  removeLeadingZeros(user_final_fields) +
                    compare_field_shouldbe.value +
                    removeLeadingZeros(selected_value)
                )
              ) {
                if (
                  !eval(
                    removeLeadingZeros(value) +
                      find_field.value +
                      removeLeadingZeros(final_field_sholuld_be)
                  )
                ) {
                  text = submit
                    ? { [title]: true }
                    : errorSpan(
                        `${title} ${find_field.message} ${final_field_sholuld_be} if the ${findCompareFiled} ${compare_field_shouldbe.message} ${selected_value}`
                      )
                  messageShow = `${title} ${find_field.message} ${final_field_sholuld_be} if the ${findCompareFiled} ${compare_field_shouldbe.message} ${selected_value}`
                  break
                }
              }
            } catch (err) {
              //
              console.log(err, "logical operator break")
            }
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
      try {
        typeof c?.value === "object" &&
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
                        value = {
                          value: value + parseFloat(e1.content),
                          title: v,
                        }
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
      } catch (err) {
        console.log(err)
      }
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
                  e1.content === ""
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
      try {
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
                      value = {
                        value: value + parseFloat(e1.content),
                        title: v,
                      }
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
      } catch (err) {
        console.log(err)
      }
    })
    if (text === "") {
      return value
    } else {
      return text
    }
  }
}

