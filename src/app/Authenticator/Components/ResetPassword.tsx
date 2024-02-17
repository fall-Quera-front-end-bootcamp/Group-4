import React, { useState } from "react";
import Form from "../../Components/common/form/Index";
import DynamicInput from "../../Components/common/input";
import { Link } from "react-router-dom";
import DynamicButton from "../../Components/common/button";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [passwordrepeat, setPasswordRepeat] = useState("");

  const customStyle = {
    width: "640px",
    height: "369px",
    borderRadius: "20px",
  };

  const header = {
    fontWeight: 800,
    fontSize: "32px",
  };

  const labels = {
    color: "#1E1E1E",
    fontWeight: 400,
    fontSize: "14px",
  };

  return (
    <div>
      <Form style={customStyle}>
        <h1 style={header}>تغییر رمز عبور</h1>
        <div className="w-full flex flex-col justify-center items-center pt-8">
          <label
            style={labels}
            className="w-full flex flex-col justify-center items-end"
          >
            رمز عبور جدید را وارد کنید
          </label>
          <DynamicInput
            width={592}
            height={40}
            value={password}
            onChange={(value) => setPassword(value)}
            style={{ marginTop: "8px" }}
            type={"password"}
          />
          <label
            style={labels}
            className="w-full flex flex-col justify-center items-end pt-6"
          >
            تکرار رمز عبور
          </label>
          <DynamicInput
            width={592}
            height={40}
            value={passwordrepeat}
            onChange={(value) => setPasswordRepeat(value)}
            style={{ marginTop: "8px" }}
            type={"password"}
          />

          <div className="pt-6">
            <Link to="/login">
              <DynamicButton
                text="اعمال تغییرات"
                width={592}
                height={48}
                onClick={() => console.log("Button clicked")}
                bgColor="blue"
                textColor="white"
                fontWeight={800}
                fontSize="14px"
              />
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default ResetPassword;
