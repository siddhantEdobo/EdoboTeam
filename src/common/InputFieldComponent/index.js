import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './InputFieldComponent.css'; 

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
    <div className="input-group mb-3 position-relative">
      {/* Input field */}
      <input
        type="text"
        className={`form-control ${successIcon ? 'has-success-icon' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label="Input Field"
      />

      {/* Success icon (green tick) inside input field */}
      {successIcon && (
        <span className="input-icon-right">
          <FontAwesomeIcon
            icon={successIcon}
            className={`text-success ${successColor}`}
          />
        </span>
      )}

      {/* Error icon (if needed) */}
      {errorIcon && (
        <span className="input-icon-right">
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
