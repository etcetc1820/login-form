import React from "react";
import { Link } from "react-router-dom";
import "./topButtons.scss";

const TopButtons: React.FunctionComponent = () => {
  return (
    <div className="topButtonsWrapper">
      <div className="topButtonsRow">
        <Link to="/login" className="emptyLink">
          Login
        </Link>
        <Link to="/" className="emptyLink">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default TopButtons;
