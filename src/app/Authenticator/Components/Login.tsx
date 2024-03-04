import React, { useState } from "react";
import Form from "../../Components/common/form/Index";
import DynamicInput from "../../Components/common/input";
import { Link } from "react-router-dom";
import DynamicButton from "../../Components/common/button";
import { login } from "../../../services/account";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    // Function to handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // Prevent default form submission behavior
  
      try {
        // Call the login function with username and password
        const response = await login(username, password);
        
        // Handle successful login, such as redirecting to another page
        console.log("Login successful:", response);
  
      } catch (error) {
        // Handle login error, such as displaying error message to user
        console.error("Login failed:", error);
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

  return (
    <div>
      <Form style={customStyle} onSubmit={handleSubmit} >
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
          <Link
            to="/forgetpassword"
            style={link}
            className="w-full flex flex-col justify-center items-end pt-6"
          >
            رمز عبور خود را فراموش کرده‌اید؟
          </Link>
          <div className="pt-6">
            <DynamicButton
              text="ورود"
              width={592}
              height={40}
              onClick={() => console.log("Button clicked")}
              bgColor="blue"
              textColor="white"
              fontWeight={800}
              fontSize="14px"
            />
            <div className="w-full flex justify-center items-center py-4">
              <Link
                to="/register"
                className="text-customBlue hover:text-customBlueLight pr-1"
                style={register}
              >
                ثبت‌نام
              </Link>
              <h1 style={notRegister}>ثبت‌نام نکرده‌ای؟</h1>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Login;
