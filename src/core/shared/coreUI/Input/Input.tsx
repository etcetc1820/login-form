import React, { useState, useRef } from "react";
import classNames from "classnames";
import SimpleButton from "../SimpleButton/SimpleButton";
import "./input.scss";

interface InputProps {
  name: string;
  value?: string;
  type: "text" | "email" | "password";
  placeholder?: string;
  handlerChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  smallInput?: boolean;
  data?: {
    [index: string]: {
      value: string;
      error: boolean;
    };
  };
}

const Input: React.FunctionComponent<InputProps> = ({
  name,
  value,
  type,
  placeholder,
  handlerChange,
  smallInput,
  data
}) => {
  const errorInput = data ? data[name].error : false;
  const inputWrapperClasses = classNames("inputWrapper", {
    smallInput,
    errorInput
  });
  const [isPassword, setIsPassword] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const showPassword = (): void => {
    const input = inputRef.current;

    input?.setAttribute("type", isPassword ? "text" : "password");
    setIsPassword(!isPassword);
  };

  return (
    <div className={inputWrapperClasses}>
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={
          handlerChange ? (e): void => handlerChange(e) : (): void => {}
        }
        className="input"
        ref={inputRef}
      />
      {type === "password" && (
        <SimpleButton
          classes="passwordBtn"
          type="button"
          handlerClick={showPassword}
        >
          {isPassword ? "Show" : "Hide"}
        </SimpleButton>
      )}
      {errorInput && <p className="errorMessage">{placeholder} required</p>}
    </div>
  );
};

export default Input;
