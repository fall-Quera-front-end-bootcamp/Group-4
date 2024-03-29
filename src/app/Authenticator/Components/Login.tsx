import React, { useState } from "react";
import Form from "../../Components/common/form/Index";
import DynamicInput from "../../Components/common/input";
import { Link } from "react-router-dom";
import DynamicButton from "../../Components/common/button";
import { login } from "../../../services/account";
import { useNavigate } from "react-router-dom";
import { useAppDispatch , useAppSelector} from "../../../utils/store";
import { setMode } from "../slice";
import { FORGET_PASSWORD, REGISTER } from "../constant";
import authSlice from "../authSlice";
import {setAuthenticated , setError} from "../authSlice"


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);


  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      

      const response = await login(username, password);
      
      console.log("Login response:", response);
      console.log("Login successful:", response);
      dispatch(setAuthenticated(true));
      navigate("/workspace");
    } catch (error) {
      console.error("Login failed:", error);
      dispatch(setError("Login failed: " + error));
    }
  };

  const customStyle = {
    width: "640px",
    height: "429px",
    borderRadius: "20px",
  };

  const header = {
    fontWeight: 800,
    fontSize: "32px",
  };

  const link = {
    textDecoration: "underline",
    fontWeight: 400,
    fontSize: "12px",
    paddingTop: "10px",
    color: "#1E1E1E",
  };

  const labels = {
    color: "#1E1E1E",
    fontWeight: 400,
    fontSize: "14px",
  };

  const register = {
    fontWeight: 800,
    fontSize: "16px",
  };

  const notRegister = {
    color: "#1E1E1E",
    fontWeight: 500,
    fontSize: "16px",
  };

  const handleForgotPasswordClick = () => {
    dispatch(setMode(FORGET_PASSWORD));
  };

  const handleRegisterClick = () =>{
    dispatch(setMode(REGISTER));
  }

  return (
    <div>
      <Form style={customStyle} onSubmit={handleLogin}>
        <h1 style={header}>(: به کوئرا تسک منیجر خوش برگشتی </h1>
        <div className="w-full flex flex-col justify-center items-center pt-8">
          <label
            style={labels}
            className="w-full flex flex-col justify-center items-end"
          >
            نام کاربری
          </label>
          <DynamicInput
            width={592}
            height={40}
            value={username}
            onChange={(value) => setUsername(value)}
            style={{ marginTop: "8px" }}
            type={"text"}
          />
          <label
            style={labels}
            className="w-full flex flex-col justify-center items-end pt-6"
          >
            رمز عبور
          </label>
          <DynamicInput
            width={592}
            height={40}
            value={password}
            onChange={(value) => setPassword(value)}
            style={{ marginTop: "8px" }}
            type={"password"}
          />
          <p
            style={link}
            className="w-full flex flex-col justify-center items-end pt-6 cursor-pointer"
            onClick={handleForgotPasswordClick}
          >
            رمز عبور خود را فراموش کرده‌اید؟
          </p>
          <div className="pt-6">
            <DynamicButton
              text="ورود"
              width={592}
              height={40}
              bgColor="blue"
              textColor="white"
              fontWeight={800}
              fontSize="14px"
              type="submit"
              borderRadius={6}
            />
            <div className="w-full flex justify-center items-center py-4">
              <p
                onClick={handleRegisterClick}
                className="text-customBlue hover:text-customBlueLight pr-1 cursor-pointer"
                style={register}
              >
                ثبت‌نام
              </p>
              <h1 style={notRegister}>ثبت‌نام نکرده‌ای؟</h1>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Login;
