import React from "react";
import PropTypes from "prop-types";

import MainBeforeLogin from "../components/Main/MainBeforeLogin";
import MainAfterLogin from "../components/Main/MainAfterLogin";
import ChooseStudent from "./ChooseStudent";
import { useAuth } from "../Context/auth/auth";

const Main = () => {
  const auth = useAuth();
  return (
    <>
      {auth?.isLoggedIn ? (
        auth?.isStudent ? (
          <MainAfterLogin />
        ) : (
          <ChooseStudent />
        )
      ) : (
        <MainBeforeLogin />
      )}
    </>
  );
};

Main.propsTypes = {
  isLoggedIn: PropTypes.bool,
  setIsLoggedIn: PropTypes.func,
  userObj: PropTypes.bool,
};

export default Main;
