import React, {JSX, useState} from "react";
import Form from "../../../../../../../../Components/common/form/Index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle, faWindowClose} from "@fortawesome/free-regular-svg-icons";
import {faChain} from "@fortawesome/free-solid-svg-icons";
import DynamicInput from "../../../../../../../../Components/common/input";
import DynamicButton from "../../../../../../../../Components/common/button";
import {faDotCircle} from "@fortawesome/free-solid-svg-icons";


const customStyle = {
    width: "547px",
    height: "369px",
    gap: "40px",
    borderRadius: "12px",
    padding: "20px",

};
const customStyleInput = {
    backgroundColor: "#F0F1F3",
    borderRadius: "5px 20px",
}
const customStylebtn = {
    borderRadius: "50px",
}

interface ShareWorkspaceProp {

}

const ShareWorkspace: React.FC<ShareWorkspaceProp> = (): JSX.Element => {
    const [shareworkspace, setShareworkspace] = useState('')

    return (
        <>


            <Form style={customStyle}>
                {/* ---card body ------START*/}
                {/*--------اشتراک گذاری ورک اسپیس------------*/}
                <div className="flex justify-center items-center w-[507px] h-[28px] gap-[40px] ">
                    <div className="w-[452px] h-[32px] flex flex-row items-center justify-between gap-[10px]">
                        <div className="w-[24px] h-[24px]">
                            {/*<FontAwesomeIcon icon={faArrowLeft}/>*/}
                        </div>
                        <div className="font-extrabold
                 text-[24px] leading-[32px] text-center text-[#1E1E1E]">اشتراک گذاری ورک اسپیس
                        </div>
                        <div className="cursor-pointer text-[#323232] w-[24px] h-[24px] ml-4"><FontAwesomeIcon
                            icon={faWindowClose}/></div>
                    </div>

                </div>
                {/*------دعوت با ایمیل-----*/}
                <div dir="rtl" className="w-[507px] gap-[24px] h-[261px] ">
                <span className=" w-[507px] h-[40px]  flex">
                    <DynamicInput
                        width={416}
                        height={40}
                        value={shareworkspace}
                        onChange={() => console.log("input change")}
                        type={"text"}
                        placeholder="دعوت با ایمیل"
                        style={customStyleInput}
                    />
                    <DynamicButton
                        text="ارسال"
                        width={91}
                        height={40}
                        onClick={() => console.log("Button Clicked")}
                        bgColor="#208D8E"
                        fontSize="14px"
                        fontWeight={800}
                        padding={10}
                        borderRadius={6}

                    />
                </span>
                    {/*    --------------لینک خصوصی---------*/}
                    <div dir="rtl" className="mt-4 w-[507px]  h-[22px] flex justify-between items-center">
                        <div className="w-[111px] h-[20px] flex">
                            <span className="w-[20px] h-[20px] ml-1"><FontAwesomeIcon icon={faChain}/></span>
                            <span className="w-[83px] h-[20px] font-medium text-[14px] leading-[19.73px] text-right">لینک خصوصی</span>
                        </div>
                        <button className=" w-[74px] h-[22px] gap-[10px] border-[#E9EBF0]
                         border-2 rounded-[6px] bg-white pt-[3px] pr-[12px] pb-[2px] pl-[12px]
                           font-medium text-[12px] leading-[16.91px] text-right">کپی لینک
                        </button>
                    </div>
                    {/*-----------------اشتراک گذاشته شده-----------*/}
                    <div dir="rtl" className="mt-4 w-[507px] h-[151px] gap-[16px] ">
            <span className="w-[131px] h-[20px] font-medium text-[14px] text-[#7D828C]
             leading-[19.73px] text-center">اشتراک گذاشته شده با</span>
                        <div className="w-[507px] h-[115px] gap-[8px] ">
                            {/*----------Workspace Owner---------*/}
                            <div className="w-[507px] h-[33px] flex justify-between items-center ">
                                <div className="w-[181px] h-[33px] gap-[7px] flex items-center">
                                    <img
                                        className="w-[34px] h-[33px] rounded-[100%] object-cover   pt-[9px] pr-[8px] pb-[7px] pl-[8px]"
                                        src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=XdZqQ92Yk82otKZio_pE0KURn0U08sIr5Vz9bFSm7bM="/>
                                    <span className="w-[18px] h-[20px] font-medium
                   text-[14px] leading-[19.73px] text-right">من</span>
                                    <div
                                        className="w-[114px] h-[25px] gap-[10px] rounded-[6px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] bg-[#D0EBFF]">
                          <span className="flex items-center w-[98px] h-[17px] font-[400] text-[12px] leading-[16.91px]
                           text-right text-[#228BE6]">Workspace Owner</span>
                                    </div>
                                </div>
                                <button
                                    className=" w-[89px] h-[26px] gap-[10px] border-2 border-[#A6A7A7] rounded-[6px]
                       pt-[5px] pr-[8px] pb-[4px] pl-[8px] bg-white
                      font-medium text-[12px] leading-[16.91px] text-[#A6A7A7] text-right">دسترسی کامل
                                </button>
                            </div>

                            {/*    --------------------@Gmail --section--1-----------*/}
                            <div className=" w-[507px] h-[33px] flex justify-between items-center mt-4">
                                {/*-----------Sararahimmi@gmail.com------*/}
                                <div className="w-[192px] h-[33px] gap-[8px]  flex items-center">
                                    <div
                                        className=" bg-[#F27474] w-[34px] h-[33px] rounded-[100px] pt-[9px] pr-[8px] pb-[7px] pl-[8px] items-center flex justify-center">
                                        <span
                                            className="font-medium text-[12px] leading-[16.91px] text-right w-[15px] h-[17px]">SR</span>
                                    </div>
                                    <span
                                        className=" w-[150px] h-[20px]  font-medium text-[14px] leading-[19.73px] text-right">Sararahimi@Gmail.Com</span>

                                </div>

                                {/*-------دسترسی کامل--------*/}
                                <div className="w-[227px] h-[27px] gap-[4px] flex items-center">
                                    <div
                                        className="w-[117px] h-[27px] gap-[10px] pt-[5px] pr-[8px] pb-[4px] pl-[8px] flex items-center">
                                        <select className=" outline-0 rounded-[6px] border-2 border-[#E9EBF0]">
                                            <option
                                                className="font-[400] text-[12px] text-right leading-[16.91px]">دسترسی
                                                کامل
                                            </option>
                                            <option
                                                className="font-[400] text-[12px] text-right leading-[16.91px]">دسترسی
                                                کامل
                                            </option>
                                            <option
                                                className="font-[400] text-[12px] text-right leading-[16.91px]">دسترسی
                                                کامل
                                            </option>
                                            <option
                                                className="font-[400] text-[12px] text-right leading-[16.91px]">دسترسی
                                                کامل
                                            </option>
                                        </select>
                                    </div>
                                    {/*    ---------------همه پروژه ها-----------*/}
                                    <div
                                        className="w-[106px] h-[27px] gap-[10px] pt-[5px] pr-[8px] pb-[4px] pl-[8px]  flex items-center">
                                        <select className=" outline-0 rounded-[6px] border-2 border-[#E9EBF0]">
                                            <option className="font-[400] text-[12px] text-right leading-[16.91px]">همه
                                                پروژه ها
                                            </option>
                                            <option className="font-[400] text-[12px] text-right leading-[16.91px]">همه
                                                پروژه ها
                                            </option>
                                            <option className="font-[400] text-[12px] text-right leading-[16.91px]">همه
                                                پروژه ها
                                            </option>
                                            <option className="font-[400] text-[12px] text-right leading-[16.91px]">همه
                                                پروژه ها
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                                {/*    --------------------@Gmail --section--2-----------*/}

                                <div className=" w-[507px] h-[33px] flex justify-between items-center mt-4 ">
                                    {/*-----------Sararahimmi@gmail.com------*/}
                                    <div className="w-[192px] h-[33px] gap-[8px]  flex items-center">
                                        <div
                                            className=" bg-[#F27474] w-[34px] h-[33px] rounded-[100px] pt-[9px] pr-[8px] pb-[7px] pl-[8px] items-center flex justify-center">
                                            <span
                                                className="font-medium text-[12px] leading-[16.91px] text-right w-[15px] h-[17px]">SR</span>
                                        </div>
                                        <span
                                            className=" w-[150px] h-[20px]  font-medium text-[14px] leading-[19.73px] text-right">Sararahimi@Gmail.Com</span>
                                    </div>
                                    {/*-------دسترسی ادیت--------*/}
                                    <div className="w-[227px] h-[27px] gap-[4px] flex items-center">
                                        <div
                                            className="w-[117px] h-[27px] gap-[10px] pt-[5px] pr-[8px] pb-[4px] pl-[8px] flex items-center">
                                            <select className=" outline-0 rounded-[6px] border-2 border-[#E9EBF0]">
                                                <option
                                                    className="font-[400] text-[12px] text-right leading-[16.91px]">دسترسی
                                                    ادیت
                                                </option>
                                                <option
                                                    className="font-[400] text-[12px] text-right leading-[16.91px]">دسترسی
                                                    ادیت
                                                </option>
                                                <option
                                                    className="font-[400] text-[12px] text-right leading-[16.91px]">دسترسی
                                                    ادیت
                                                </option>
                                                <option
                                                    className="font-[400] text-[12px] text-right leading-[16.91px]">دسترسی
                                                    ادیت
                                                </option>
                                            </select>
                                        </div>
                                        {/*    ---------------پروژه اول-----------*/}
                                        <div
                                            className="w-[106px] h-[27px] gap-[10px] pt-[5px] pr-[8px] pb-[4px] pl-[8px]  flex items-center">
                                            <select className=" outline-0 rounded-[6px] border-2 border-[#E9EBF0]">
                                                <option
                                                    className="font-[400] text-[12px] text-right leading-[16.91px]">پروژه
                                                    اول
                                                </option>
                                                <option
                                                    className="font-[400] text-[12px] text-right leading-[16.91px]">پروژه
                                                    اول
                                                </option>
                                                <option
                                                    className="font-[400] text-[12px] text-right leading-[16.91px]">پروژه
                                                    اول
                                                </option>
                                                <option
                                                    className="font-[400] text-[12px] text-right leading-[16.91px]">پروژه
                                                    اول
                                                </option>
                                            </select>

                                        </div>
                                    </div>



                            </div>
                        </div>
                    </div>
                </div>
            </Form>

        </>

    )


}

export default ShareWorkspace