import React from "react";
import "./Authentication.scss";
import SignIn from "../SignIn/SignIn";
import SignUp from "../../components/sign-up/sign-up";

const Authentication = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
