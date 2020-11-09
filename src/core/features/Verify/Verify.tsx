import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSync } from "@fortawesome/free-solid-svg-icons";
import PopUpLayout from "../../layouts/PopUpLayout/PopUpLayout";
import Input from "../../shared/coreUI/Input/Input";
import Button from "../../shared/coreUI/SimpleButton/SimpleButton";
import api from "../../shared/constant";
import "./verify.scss";

const Login: React.FunctionComponent = () => {
  const history = useHistory();
  const [enteredCode, setEnteredCode] = useState("");
  const [showError, setShowError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = e.target as HTMLInputElement;

    setEnteredCode(input.value);
  };

  const handlerSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (enteredCode === api.code) {
      history.push("/user");
    } else {
      setShowError(true);
    }
  };

  return (
    <PopUpLayout>
      <form
        method="post"
        onSubmit={(e): void => handlerSubmit(e)}
        className="verifyForm"
      >
        <h3 className="title">Check your email</h3>
        <p className="subtitle">
          Enter the verification code we sent to your email
        </p>
        <Input
          placeholder="Enter code"
          name="code"
          type="text"
          handlerChange={handleChange}
        />
        {showError && <p className="errorCode">Invalid Code</p>}
        <Button type="submit" classes="mainBtn">
          Verify
        </Button>
        <div className="verifyActions">
          <Button
            handlerClick={(): void => history.goBack()}
            type="button"
            classes="backButton"
          >
            <FontAwesomeIcon icon={faArrowLeft} color="#747984" />
            <span>Back</span>
          </Button>
          <Button type="button" classes="resendButton">
            <FontAwesomeIcon icon={faSync} color="#2D6CC0" />
            <span>Resend Code</span>
          </Button>
        </div>
      </form>
    </PopUpLayout>
  );
};

export default Login;
