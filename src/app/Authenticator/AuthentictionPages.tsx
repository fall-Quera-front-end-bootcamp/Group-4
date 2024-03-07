import React from "react";
import { useAppDispatch, useAppSelector } from "../../utils/store";
import { initialState } from "./slice";
import { FORGET_PASSWORD, LOGIN } from "./constant";
import ForgetPassword from "./Components/ForgetPassword";
import Login from "./Components/Login";

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
      default:
        return "";
    }
  };

  return render();
}

export default AuthentictionPages as React.FC<any>;
