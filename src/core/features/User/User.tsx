import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
import { getUserById } from "../SignUp/signUp.selectors";
import PopUpLayout from "../../layouts/PopUpLayout/PopUpLayout";

const User: React.FunctionComponent = () => {
  const id = Number(sessionStorage.getItem("id"));
  const userInfo = useSelector((state: AppState) => getUserById(state, id));

  return (
    <PopUpLayout>
      {userInfo ? (
        Object.entries(userInfo).map(([name, value]) => {
          if (name !== "id") {
            return (
              <p key={name}>
                {name}: {value}
              </p>
            );
          }

          return null;
        })
      ) : (
        <p>Please login</p>
      )}
    </PopUpLayout>
  );
};

export default User;
