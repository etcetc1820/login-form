import React from "react";
import "./simpleButton.scss";

interface ButtonProps {
  disabled?: boolean;
  classes?: string;
  type: "button" | "submit" | "reset";
  handlerClick?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  disabled,
  classes,
  type,
  handlerClick,
  children
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handlerClick}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;
