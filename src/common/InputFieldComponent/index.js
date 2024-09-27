// InputField.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InputFieldComponent = ({
  placeholder,
  value,
  onChange,
  icon,
  successIcon,
  successColor,
  errorIcon,
  errorColor,
}) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">
        <img
          src={icon}
          alt="icon"
          className="mob-login-component-phone-email-img-container"
        />
      </span>
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label="Input Field"
      />
      {successIcon && (
        <span className="input-group-text">
          <FontAwesomeIcon
            icon={successIcon}
            className={`text-success ${successColor}`}
          />
        </span>
      )}
      {errorIcon && (
        <span className="input-group-text">
          <FontAwesomeIcon
            icon={errorIcon}
            className={`text-danger ${errorColor}`}
          />
        </span>
      )}
    </div>
  );
};


export default InputFieldComponent;
