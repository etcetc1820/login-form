import React from "react";
import "./formLayout.scss";

const FormLayout: React.FunctionComponent = ({ children }) => {
  return <section className="formLayout">{children}</section>;
};

export default FormLayout;
