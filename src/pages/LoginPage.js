import React from "react";
import Login from "../components/Login";
import { PageDiv } from "./Recruit";

const LoginPage = (props) => {
  return (
    <PageDiv>
      <Login setIsLoggedIn={props.setIsLoggedIn} setUser={props.setUser}></Login>
    </PageDiv>
  );
};

export default LoginPage;
