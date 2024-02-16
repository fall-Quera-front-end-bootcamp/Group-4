import Form from "../../../components/common/form/Index";
import DynamicInput from "../../../components/common/input";
import { Link } from 'react-router-dom';
import DynamicButton from "../../../components/common/button";
import { useState } from "react";
function ForgetPassword() {

  const [email, setEmail] = useState("");

  const customStyle = {
    width: '640px',
    height: '304px',
  };

  const header = {
    fontWeight: 800,
    fontSize: "32px"
  };

  const labels = {
    color: "#1E1E1E",
    fontWeight: 400,
    fontSize: "14px"
  };

  const register = {
    fontWeight: 800,
    fontSize: "16px",
    padding: "20px 0px 10px 0px"

  }
  
  return (
    <div>
      <Form style={customStyle}> 
        <h1 style={header}>فراموشی رمز عبور</h1>
        <div className="w-full flex flex-col justify-center items-center pt-8">
          <label style={labels}className="w-full flex flex-col justify-center items-end">ایمیل خود را وارد کنید</label>
           <DynamicInput
            width={592}
            height={40}
            value={email}
            onChange={(value) => setEmail(value)} 
            style={{ marginTop: '8px' }}
          />
          <div style={{paddingTop: '18px',}}>
            <DynamicButton
                text="دریافت ایمیل بازیابی رمز عبور"
                width={592}
                height={40}
                onClick={() => console.log("Button clicked")} 
                bgColor="blue"
                textColor="white"
              />
          </div> 
          <Link to="/login" className="text-customBlue hover:text-customBlueLight pr-1" style={register}>بازگشت</Link>
        </div>
      </Form>
    </div>  
  );
}

export default ForgetPassword;