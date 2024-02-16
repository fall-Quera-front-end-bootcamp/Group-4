import Form from "../../../components/common/form/Index";
import DynamicInput from "../../../components/common/input";
import { Link } from 'react-router-dom';
import DynamicButton from "../../../components/common/button";
import { useState } from "react";
function ForgetPassword() {

  const [email, setEmail] = useState("");
  const [showOtherForm, setShowOtherForm] = useState(false);

  const customStyle = {
    width: '640px',
    height: '304px',
  };

  const secondForm = {
    width: '640px',
    height: '142px',
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

  };

  const handleButtonClick = () => {
    setShowOtherForm(true);
  };
  
  return (
    <div>
      {!showOtherForm ? (
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
              type={"email"}
            />
            <div style={{paddingTop: '18px',}}>
              <DynamicButton
                  text="دریافت ایمیل بازیابی رمز عبور"
                  width={592}
                  height={40}
                  onClick={handleButtonClick}
                  bgColor="blue"
                  textColor="white"
                  fontWeight={800}
                  fontSize="14px"
                />
            </div> 
            <Link to="/login" className="text-customBlue hover:text-customBlueLight pr-1" style={register}>بازگشت</Link>
          </div>
       </Form>
      ):(
        <Form style={secondForm}>
          <h1 style={header}>فراموشی رمز عبور</h1>
          <p className="pt-8">لینک تغییر رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید</p>
        </Form>
      )}
    </div>  
  );
}

export default ForgetPassword;