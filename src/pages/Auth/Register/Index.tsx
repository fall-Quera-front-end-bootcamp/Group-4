import Form from "../../../components/common/form/Index";
import DynamicInput from "../../../components/common/input";
import { Link } from 'react-router-dom';
import DynamicButton from "../../../components/common/button";
import { useState } from "react";
function Register() {

    const [username, setUsename] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");


    const customStyle = {
        width: '640px',
        height: '480px',
    };

    const header = {
        fontWeight: 800,
        fontSize: "32px"
    }

    const link = {
        textDecoration: "underline",
        fontWeight: 400,
        fontSize:"12px",
        paddingTop:'10px',
        color: "#1E1E1E",
    }

    const labels = {
        color: "#1E1E1E",
        fontWeight: 400,
        fontSize: "14px"
    };

    const register = {
        fontWeight: 800,
        fontSize: "16px"
    }

    const notRegister = {
        color: "#1E1E1E",
        fontWeight: 500,
        fontSize: "16px"
    }

    return (
        <div>
            <Form style={customStyle}>
                <h1 style={header}>ثبت‌نام در کوئرا تسک منیجر</h1>
                <div className="w-[592px] h-[355px] flex flex-col justify-center items-center pt-8">

                    <label style={labels} className="w-full flex flex-col
                     justify-center items-end pt-6">نام کاربری</label>
                    <DynamicInput
                        width={592}
                        height={40}
                        value={username}
                        onChange={(value) => setUsename(value)}
                        type={"text"}
                        style={{marginTop: '8px'}}
                    />
                    <label style={labels} className="w-full flex flex-col
                     justify-center items-end pt-6">ایمیل</label>
                    <DynamicInput
                        width={592}
                        height={40}
                        value={email}
                        onChange={(value) => setEmail(value)}
                        type={"email"}
                        style={{marginTop: '8px'}}
                    />

                    <label style={labels} className="w-full flex flex-col
                    justify-center items-end pt-6"> رمز
                        عبور</label>
                    <DynamicInput
                        width={592}
                        height={40}
                        value={password}
                        onChange={(value) => setPassword(value)}
                        type={"password"}
                        style={{marginTop: '8px'}}
                    />

                    <div className="w-full flex justify-end py-4">

                        <Link to="/register"  className="w-[190px] h-[23px] size-[16px] leading-[22.55px] text-right font-medium text-black hover:t pr-1"
                              style={register}>
                            <span className="underline underline-offset-4">قوانین و مقررات </span>
                            را میپذیرم
                        </Link>
                        <input className=" border-[#999999] w-[20px] h-[20px]  rounded-[4px] border-[1px]" type="checkbox"/>
                    </div>

                    <div className="pt-6">
                        <DynamicButton
                            text="ثبت نام"
                            width={592}
                            height={40}
                            onClick={() => console.log("Button clicked")}
                            bgColor="blue"
                            textColor="white"
                        />
                    </div>

                </div>
            </Form>
        </div>
    );
}


export default Register;