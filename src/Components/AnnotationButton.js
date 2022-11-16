import { Button, CircularProgress } from "@mui/material"
import PropTypes from "prop-types"
import React from "react"

const AnnotationButton = ({
  shape,
  title,
  isPrimary,
  style,
  className,
  icon,
  onClick,
  loading,
  light,
  id,
  ribbonText,
  disabled,
  type = undefined,
}) => {
  let classNames = isPrimary
    ? `common_button_primary ${className ? className : ""}`
    : light
    ? `common_button_light ${className ? className : ""}`
    : type === "link"
    ? className
    : `common_button ${className ? className : ""}`
  classNames = `${classNames} ${disabled ? "custom_disabled_button" : ""}`
  return (
    <>
      <>
        <Button
          shape={shape}
          className={classNames}
          style={style}
          icon={icon}
          onClick={onClick}
          loading={loading}
          id={id}
          disabled={loading}
          type={type}
          startIcon={
            loading && (
              <CircularProgress
                style={{ color: light ? "#005f86" : "white" }}
              />
            )
          }
          variant="contained"
        >
          {title}
        </Button>
      </>
    </>
  )
}

export default AnnotationButton
AnnotationButton.propTypes = {
  title: PropTypes.string,
  light: PropTypes.bool,
  isPrimary: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  onblur: PropTypes.func,
  ribbonText: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
}
