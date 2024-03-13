import React from "react";
import { useAppDispatch, useAppSelector } from "../../utils/store";
import { initialState } from "./slice";
import { FORGET_PASSWORD, LOGIN, REGISTER, RESET_PASSWORD } from "./constant";
import ForgetPassword from "./Components/ForgetPassword";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ResetPassword from "./Components/ResetPassword";

function AuthentictionPages() {
  const { mode } = useAppSelector(
    (state) => state.authenticator || initialState
  );
  const dispath = useAppDispatch();

  const render = () => {
    switch (mode) {
      case LOGIN:
        return <Login />;
      case FORGET_PASSWORD:
        return <ForgetPassword />;
      case REGISTER:  
        return <Register/>;
      case RESET_PASSWORD:
        return <ResetPassword/>  
      default:
        return "";
    }
  };

  return render();
}

export default AuthentictionPages as React.FC<any>;
