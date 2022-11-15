/** @format */
import PropTypes from "prop-types"
import React from "react"
// import { handleTooltipMessage } from '../../utils';
const AnnotationInput = ({
  ref,
  isTooltip,
  isAstrick,
  readOnly,
  labelClass,
  style,
  title,
  isRequired,
  onChange,
  validation = false,
  placeholder,
  value,
  errorMessage,
  name,
  type,
  onKeyDown,
  isDisabled,
  onblur,
  className,
  subTextAboveInput,
  onFocus,
  count,
}) => {
  function Count(str) {
    let upper = 0
    let lower = 0
    let number = 0
    for (var i = 0; i < str.length; i++) {
      if (str[i] >= "A" && str[i] <= "Z") upper++
      else if (str[i] >= "a" && str[i] <= "z") lower++
      else if (str[i] >= "0" && str[i] <= "9") number++
    }
    return upper + lower + number
  }
  const handleTooltipMessage = () => {}
  const showCharacterCount = (totalCount) => {
    return (
      <span
        style={{ fontSize: "0.7rem" }}
        className="text-green-600 flex justify-start absolute  bottom-2"
      >
        {String(totalCount).length}
      </span>
    )
  }

  return (
    <div
      className={`common_inputBox flex flex-col ${className ? className : ""}`}
    >
      {title && (
        <label className={`title_input_box ${labelClass}`}>
          {title}{" "}
          {isRequired ? (
            <span style={{ color: "red" }}>
              {isAstrick
                ? handleTooltipMessage({
                    title: "Mandatory field to proceed with Save & Next",
                    count: 2,
                    isTooltip: isTooltip,
                  })
                : handleTooltipMessage({
                    title: "Mandatory field to proceed with Submit",
                    count: 1,
                    isTooltip: isTooltip,
                  })}
            </span>
          ) : (
            ""
          )}
        </label>
      )}
      {subTextAboveInput && <label>{subTextAboveInput}</label>}
      <input
        readOnly={readOnly}
        style={style}
        autoComplete="off"
        className="font-MontMedium text-sm"
        onFocus={onFocus}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown ? onKeyDown : null}
        disabled={isDisabled}
        onBlur={onblur}
        min={0}
        spellCheck={false}
        ref={ref}
      />

      {validation && <span className="common_error">{errorMessage}</span>}
      {value?.length > 0 && count && showCharacterCount(value)}
    </div>
  )
}

export default AnnotationInput

AnnotationInput.propTypes = {
  title: PropTypes.string,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func,
  validation: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onKeyDown: PropTypes.func,
  isDisabled: PropTypes.bool,
  onblur: PropTypes.func,
  className: PropTypes.string,
  subTextAboveInput: PropTypes.string,
  onFocus: PropTypes.func,
  style: PropTypes.object,
  labelClass: PropTypes.string,
}
