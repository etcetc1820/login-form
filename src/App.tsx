import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import configureStore from "./core/store/configureStore";
import FormLayout from "./core/layouts/FormLayout/FormLayout";
import TopButtons from "./core/features/TopButtons/TopButtons";
import SignUp from "./core/features/SignUp/components/SignUp";
import Login from "./core/features/Login/Login";
import CheckEmail from "./core/features/Verify/Verify";
import User from "./core/features/User/User";
import "./assets/scss/common.scss";

const App: React.FunctionComponent = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Router>
        <FormLayout>
          <TopButtons />
          <Switch>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/verify">
              <CheckEmail />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <SignUp />
            </Route>
          </Switch>
        </FormLayout>
      </Router>
    </Provider>
  );
};

export default App;
