import React from "react";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialButton from "../coreUI/SocialButton/SocialButton";

const SocialButtons: React.FunctionComponent = () => {
  return (
    <div className="socialButtonsWrapper">
      <SocialButton social="facebook">
        <FontAwesomeIcon icon={faFacebookF} />
        <span>Facebook</span>
      </SocialButton>
      <SocialButton social="google">
        <FontAwesomeIcon icon={faGoogle} />
        <span>Google</span>
      </SocialButton>
    </div>
  );
};

export default SocialButtons;
