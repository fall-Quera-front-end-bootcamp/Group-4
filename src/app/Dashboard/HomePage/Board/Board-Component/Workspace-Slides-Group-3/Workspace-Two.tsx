import React, {useState} from "react";
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import Form from "../../../../../Components/common/form/Index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import DynamicButton from "../../../../../Components/common/button";
import {faDotCircle, faArrowLeft, faBan} from "@fortawesome/free-solid-svg-icons";
import { ColorPicker } from 'primereact/colorpicker';
import { Formik } from 'formik';

const customStyle = {
    width: "500px",
    height: "268px",
    gap: "40px",
    borderRadius: "20px",

};
const labels = {
    color: "#1E1E1E",
    fontWeight: 400,
    fontSize: "14px",
};
const customStylebtn = {
    padding: "10px",
};
interface workspaceProps{
    text:string,
    title: string | number,
    bool:boolean,
}
function WorkspaceTwo ()  {
// const [color1 , setColor1] = useState('#4C6EF5')
// const [color2 , setColor2] = useState('#228BE6')
// const [color3 , setColor3] = useState('#15AABF')
// const [color4 , setColor4] = useState('#12B886')
// const [color5 , setColor5] = useState('#208D8E')
// const [color6 , setColor6] = useState('#40C057')
// const [color7 , setColor7] = useState('#82C91E')
// const [color8 , setColor8] = useState('#FAB005')
// const [color9 , setColor9] = useState('#FD7E14')
// const [color10 , setColor10] = useState('#FA5252')
// const [color11 , setColor11] = useState('#E64980')
// const [color12 , setColor12] = useState('#BE4BDB')
// const [color13 , setColor13] = useState('#7950F2')


    return (
        <div className="border-y-green-400 absolute ">


            <Form style={customStyle}>



                {/* ---card body ------START*/}
                {/*--------ورک اسپیس------------*/}
                <div className="flex justify-center items-center w-[452px] h-[140px] gap-[40px] ">
                    <div className="w-[452px] h-[32px] flex flex-row items-center justify-between gap-[10px]">
                        <div className="w-[24px] h-[24px]"><FontAwesomeIcon icon={faArrowLeft}/></div>
                        <div className="font-extrabold text-[24px] leading-[32px] text-center text-[#1E1E1E]">انتخاب رنگ
                            ورک اسپیس
                        </div>
                        <div className="cursor-pointer text-[#323232] w-[24px] h-[24px] ml-4"><FontAwesomeIcon
                            icon={faTimesCircle}/></div>
                    </div>
                </div>
                {/*------نام ورک اسپیس-----*/}
                <div dir="rtl" className="w-[415px] h-[68px] gap-[8px] flex flex-col">
                    <label style={labels} className="leading-[19.73px] text-right">رنگ ورک اسپیس</label>
                    <div className="w-[453px] h-[86px] gap-[16px]">
                        <div dir="rtl">
                            <div className="flex flex-row flex-wrap gap-[11px] w-[293px] h-[58px]">
                                <div className="flex">
                                    <div className="w-[70px] h-[70px] rounded-[8px] bg-[#7D828C]">ت ط</div>
                                    <div className=" w-[15px] h-[15px] "><span> <FontAwesomeIcon icon={faBan}/></span>
                                    </div>
                                    <div className="w-[293px] h-[86px] flex flex-row flex-wrap  gap-[16px]">
                                        {/*-----colors ---picker ----section*/}

                                        <div className=" flex flex-row flex-wrap gap-[11px] w-[293px] h-[58px]">

                                            <div
                                                className="cursor-pointer rounded-lg w-[20px] h-[20px] bg-[#4C6EF5]"></div>
                                            <div
                                                className="cursor-pointer rounded-lg w-[20px] h-[20px] bg-[#228BE6]"></div>
                                            <div
                                                className="cursor-pointer rounded-lg w-[20px] h-[20px] bg-[#15AABF]"></div>
                                            <div
                                                className="cursor-pointer rounded-lg w-[20px] h-[20px] bg-[#12B886]"></div>
                                            <div
                                                className="cursor-pointer rounded-lg w-[20px] h-[20px] bg-[#208D8E]"></div>
                                            <div
                                                className="cursor-pointer rounded-lg w-[20px] h-[20px] bg-[#40C057]"></div>
                                            <div
                                                className="cursor-pointer rounded-lg w-[28px] h-[28px] bg-[#82C91E] relative">
                                                <span
                                                    className="cursor-pointer absolute w-[12px] h-[12px] bg-white rounded-[10px] left-[8px] top-[8px] "></span>
                                            </div>
                                            <div
                                                className="cursor-pointer rounded-lg w-[20px] h-[20px] bg-[#FAB005]"></div>
                                            <div
                                                className="cursor-pointer rounded-lg w-[20px] h-[20px] bg-[#FD7E14] "></div>
                                            <div
                                                className="cursor-pointer rounded-lg w-[20px] h-[20px] bg-[#FA5252] "></div>
                                            <div
                                                className="cursor-pointer rounded-lg w-[20px] h-[20px] bg-[#E64980] "></div>
                                            <div
                                                className="cursor-pointer rounded-lg w-[20px] h-[20px] bg-[#BE4BDB] "></div>
                                            <div
                                                className="cursor-pointer rounded-lg w-[20px] h-[20px] bg-[#7950F2] "></div>


                                        </div>
                                        {/*    <ColorPicker value={color1} style={{}}*/}
                                        {/*                 onChange={(e: any) => {*/}
                                        {/*                     setColor1(e.value)*/}
                                        {/*                 }}/>*/}

                                        {/*    <ColorPicker value={color2} onChange={(e: any) => {*/}
                                        {/*        setColor2(e.value)*/}
                                        {/*    }}/>*/}
                                        {/*    <ColorPicker value={color3} onChange={(e: any) => {*/}
                                        {/*        setColor3(e.value)*/}
                                        {/*    }}/>*/}
                                        {/*    <ColorPicker value={color4} onChange={(e: any) => {*/}
                                        {/*        setColor4(e.value)*/}
                                        {/*    }}/>*/}
                                        {/*    <ColorPicker value={color5} onChange={(e: any) => {*/}
                                        {/*        setColor5(e.value)*/}
                                        {/*    }}/>*/}
                                        {/*    <ColorPicker value={color6} onChange={(e: any) => {*/}
                                        {/*        setColor6(e.value)*/}
                                        {/*    }}/>*/}
                                        {/*    <ColorPicker value={color7} onChange={(e: any) => {*/}
                                        {/*        setColor7(e.value)*/}
                                        {/*    }}/>*/}
                                        {/*    <ColorPicker value={color8} onChange={(e: any) => {*/}
                                        {/*        setColor8(e.value)*/}
                                        {/*    }}/>*/}
                                        {/*    <ColorPicker value={color9} onChange={(e: any) => {*/}
                                        {/*        setColor9(e.value)*/}
                                        {/*    }}/>*/}
                                        {/*    <ColorPicker value={color10} onChange={(e: any) => {*/}
                                        {/*        setColor10(e.value)*/}
                                        {/*    }}/>*/}
                                        {/*    <ColorPicker value={color11} onChange={(e: any) => {*/}
                                        {/*        setColor11(e.value)*/}
                                        {/*    }}/>*/}
                                        {/*    <ColorPicker value={color12} onChange={(e: any) => {*/}
                                        {/*        setColor12(e.value)*/}
                                        {/*    }}/>*/}
                                        {/*    <ColorPicker value={color13} onChange={(e: any) => {*/}
                                        {/*        setColor13(e.value)*/}
                                        {/*    }}/>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---card body ------END*/}
                {/*------card Button--- START */}
                <DynamicButton
                    text="ادامه"
                    width={415}
                    height={40}
                    onClick={() => console.log("Button Clicked")}
                    bgColor="#208D8E"
                    fontSize="14px"
                    fontWeight={800}
                    padding={10}
                />
                <div className=" flex-row flex  w-[40px] h-[8px] gap-[8px]">
                    <div className="text-gray-400"><FontAwesomeIcon icon={faDotCircle}/></div>
                    <div className="text-gray-700"><FontAwesomeIcon icon={faDotCircle}/></div>
                    <div className="text-gray-400"><FontAwesomeIcon icon={faDotCircle}/></div>
                </div>
            </Form>
        </div>
    )
}

export default WorkspaceTwo