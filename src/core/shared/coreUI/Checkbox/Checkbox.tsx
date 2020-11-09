import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./checkbox.scss";

interface CheckboxProps {
  name: string;
  value: string;
  handlerOnChange?: () => void;
}

const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  name,
  value,
  handlerOnChange,
  children
}) => {
  return (
    <label htmlFor={name} className="checkboxLabel">
      <input
        type="checkbox"
        id={name}
        name={name}
        value={value}
        onChange={handlerOnChange}
      />
      <div className="checkboxContent">
        <div className="customCheck">
          <FontAwesomeIcon icon={faCheck} color="#2D6CC0" />
        </div>
        <span>{children}</span>
      </div>
    </label>
  );
};

export default Checkbox;
