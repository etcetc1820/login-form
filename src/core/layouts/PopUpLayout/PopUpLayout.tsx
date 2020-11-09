import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "../../shared/coreUI/SimpleButton/SimpleButton";
import "./popUpLayout.scss";

const PopUpLayout: React.FunctionComponent = ({ children }) => {
  const [isShow, setIsShow] = useState(true);

  const handlerClickClose = (): void => {
    setIsShow(false);
  };

  return isShow ? (
    <div className="formWrapper">
      <Button type="button" handlerClick={handlerClickClose} classes="closeBtn">
        <FontAwesomeIcon icon={faTimes} color="#747984" />
      </Button>
      {children}
    </div>
  ) : null;
};

export default PopUpLayout;
