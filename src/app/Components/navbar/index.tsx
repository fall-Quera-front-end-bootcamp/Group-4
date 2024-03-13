import React from "react";
import DynamicButton from "../common/button";
import { useAppDispatch } from "../../../utils/store";
import { setMode } from "../../Authenticator/slice";
import { REGISTER, LOGIN } from "../../Authenticator/constant";
interface Iprops extends React.PropsWithChildren {}

function Navbar(children: Iprops): JSX.Element {
  const dispatch = useAppDispatch();

  const handleRegisterClick = () =>{
    dispatch(setMode(REGISTER));
  };

   const handleLoginClick = () =>{
    dispatch(setMode(LOGIN));
  }

  return (
    <div className="w-full h-[45px] top-[80px] left-[80px] container flex  justify-between absolute">
      <div className="w-[214px] h-[40px] gap-[7px] justify-center items-center flex">
        <DynamicButton
          text="ورود"
          width={95}
          height={40}
          onClick={handleLoginClick}
          bgColor="blue"
          textColor="white"
          fontWeight={800}
          fontSize="14px"
          borderRadius={6}
        />
        <p
          onClick={handleRegisterClick}
          className="font-medium text-[16px] leading-[22.55px] text-right text-black w-[134px] h-[23px] hover:text-gray-700 cursor-pointer"
        >
          ثبت نام نکرده ای؟
        </p>
      </div>

      <div className=" w-[235px] h-[45px] font-extrabold leading-[45.09px] text-right text-[32px] bg-gradient-to-r from-[#118C80] to-[#4AB7D8] inline-block text-transparent bg-clip-text ">
        کوئرا تسک منیجر
      </div>
    </div>
  );
}

export default Navbar;
