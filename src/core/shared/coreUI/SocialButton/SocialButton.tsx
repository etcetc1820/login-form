import React from "react";
import classNames from "classnames";
import "./socialButton.scss";

interface SocialButtonProps {
  disabled?: boolean;
  handlerClick?: () => void;
  social: "facebook" | "google";
}

const SocialButton: React.FunctionComponent<SocialButtonProps> = ({
  disabled,
  handlerClick,
  social,
  children
}) => {
  const SocialButtonClasses = classNames("socialButton", {
    socialGoogle: social === "google",
    socialFacebook: social === "facebook"
  });

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handlerClick}
      className={SocialButtonClasses}
    >
      {children}
    </button>
  );
};

export default SocialButton;
