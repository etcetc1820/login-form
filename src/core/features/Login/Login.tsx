import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
import PopUpLayout from "../../layouts/PopUpLayout/PopUpLayout";
import Input from "../../shared/coreUI/Input/Input";
import Button from "../../shared/coreUI/SimpleButton/SimpleButton";
import SocialButtons from "../../shared/SocialButtons/SocialButtons";
import Checkbox from "../../shared/coreUI/Checkbox/Checkbox";
import { getUsers } from "../SignUp/signUp.selectors";
import "./login.scss";

const Login: React.FunctionComponent = () => {
  const id = Number(sessionStorage.getItem("id"));
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const [showError, setShowError] = useState(false);
  const users = useSelector((state: AppState) => getUsers(state));
  const history = useHistory();

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = e.target as HTMLInputElement;
    const inputName: string = input.name;
    const inputVal = input.value;

    if (inputName in loginData) {
      const newData = {
        ...loginData,
        [inputName]: inputVal
      };

      setLoginData(newData);
    }
  };

  const handlerSubmit = (e: FormEvent): void => {
    e.preventDefault();
    let correctData = false;

    Object.entries(users).forEach(([, user]) => {
      if (
        String(user.email) === loginData.email &&
        String(user.password) === loginData.password
      ) {
        correctData = true;
        sessionStorage.setItem("id", String(user.id));
        history.push("/user");
      }
    });

    setShowError(!correctData);
  };

  return (
    <PopUpLayout>
      {id ? (
        <p>You are already logged in</p>
      ) : (
        <form method="post" onSubmit={handlerSubmit}>
          <h3 className="title">Login</h3>
          <Input
            placeholder="Email address"
            name="email"
            type="email"
            handlerChange={handlerChange}
          />
          <Input
            placeholder="Password"
            name="password"
            type="password"
            handlerChange={handlerChange}
          />
          <Checkbox value="remember" name="rememberMe">
            Remember me
          </Checkbox>
          <Button type="submit" classes="mainBtn">
            Login
          </Button>
          {showError && <p className="errorExist">Please, try again.</p>}
          <a href="/login#" className="forgotLink">
            Forgot password
          </a>
          <div className="orWrapper">
            <div className="orLine" />
            <span>Or</span>
            <div className="orLine" />
          </div>
          <SocialButtons />
          <p className="bottomText">
            Don't have an account? <Link to="/">Sign Up</Link>
          </p>
        </form>
      )}
    </PopUpLayout>
  );
};

export default Login;
