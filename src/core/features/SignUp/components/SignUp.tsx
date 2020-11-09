import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLastId, getUsers } from "../signUp.selectors";
import { saveUser } from "../signUp.actions";
import PopUpLayout from "../../../layouts/PopUpLayout/PopUpLayout";
import Input from "../../../shared/coreUI/Input/Input";
import Button from "../../../shared/coreUI/SimpleButton/SimpleButton";
import SocialButtons from "../../../shared/SocialButtons/SocialButtons";
import { AppState } from "../../../store/store";
import "./signUp.scss";

interface DataInterface {
  [index: string]: {
    value: string;
    error: boolean;
  };
}

const SignUp: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<DataInterface>({
    firstName: {
      value: "",
      error: false
    },
    lastName: {
      value: "",
      error: false
    },
    email: {
      value: "",
      error: false
    },
    password: {
      value: "",
      error: false
    }
  });
  const [userExist, setUserExist] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const lastId = useSelector((state: AppState) => getLastId(state));
  const users = useSelector((state: AppState) => getUsers(state));

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = e.target as HTMLInputElement;
    const inputName: string = input.name;
    const inputVal = input.value;

    if (inputName in formData) {
      const newData = {
        ...formData,
        [inputName]: {
          error: inputVal.length < 1,
          value: inputVal
        }
      };

      setFormData(newData);
    }
  };

  const validateForm = (): number => {
    let numberOfErrors = 0;
    let newData = { ...formData };

    Object.entries(newData).forEach(([index, inputInfo]) => {
      let error = false;

      if (inputInfo.value.length < 1) {
        error = true;
        numberOfErrors++;
      }

      newData = {
        ...newData,
        [index]: { ...newData[index], error }
      };

      setFormData(newData);
    });

    return numberOfErrors;
  };

  const handlerSaveUser = (): void => {
    let userInfo = { id: lastId };

    Object.entries(formData).forEach(([index, inputInfo]) => {
      userInfo = {
        ...userInfo,
        [index]: inputInfo.value
      };
    });

    dispatch(saveUser(userInfo));
    sessionStorage.setItem("id", String(userInfo.id));
  };

  const handlerSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const errors = validateForm();
    let exist = false;

    Object.entries(users).forEach(([, user]) => {
      if (String(user.email) === formData.email.value) {
        exist = true;
      }
    });

    if (errors === 0 && !exist) {
      history.push("/verify");
      handlerSaveUser();
    }

    setUserExist(exist);
  };

  return (
    <PopUpLayout>
      <form method="post" onSubmit={(e): void => handlerSubmit(e)}>
        <h3 className="title">Sign Up</h3>
        <div className="rowInputs">
          <Input
            placeholder="First Name"
            name="firstName"
            type="text"
            smallInput
            handlerChange={handlerChange}
            data={formData}
          />
          <Input
            placeholder="Last Name"
            name="lastName"
            type="text"
            smallInput
            handlerChange={handlerChange}
            data={formData}
          />
        </div>
        <Input
          placeholder="Email address"
          name="email"
          type="email"
          handlerChange={handlerChange}
          data={formData}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          handlerChange={handlerChange}
          data={formData}
        />
        <Button type="submit" classes="mainBtn">
          Sign Up
        </Button>
        {userExist && (
          <p className="errorExist">
            An account has already been registered with this email.
            <br />
            <Link to="/login">Log in</Link> to your account.
          </p>
        )}
        <div className="orWrapper">
          <div className="orLine" />
          <span>Or</span>
          <div className="orLine" />
        </div>
        <SocialButtons />
        <p className="bottomText">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </PopUpLayout>
  );
};

export default SignUp;
