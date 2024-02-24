import React, {useState} from "react";
import {HexColorPicker} from "react-colorful";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faBan, faDotCircle} from '@fortawesome/free-solid-svg-icons';
import Form from "../../../../../Components/common/form/Index";
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import DynamicButton from "../../../../../Components/common/button";

const customStyle = {
    width: "500px",
    height: "413px",
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

interface workspaceProps {
    text: string,
    title: string | number,
    bool: boolean,
}

const WorkspaceThree = () => {
    const [color, setColor] = useState();
    const colorHandler = () => {
        setColor(color)

    }
    return (

        <Form style={customStyle}>
            {/* ---card body ------START*/}
            {/*--------ورک اسپیس------------*/}
            <div className="flex justify-center items-center w-[452px] h-[140px] gap-[40px] ">
                <div className="w-[452px] h-[32px] flex flex-row items-center justify-between gap-[10px]">
                    <div className="w-[24px] h-[24px]"><FontAwesomeIcon icon={faArrowLeft}/></div>
                    <div className="font-extrabold text-[24px] leading-[32px] text-center text-[#1E1E1E]">مرور اطلاعات
                    </div>
                    <div className="cursor-pointer text-[#323232] w-[24px] h-[24px] ml-4"><FontAwesomeIcon
                        icon={faTimesCircle}/></div>
                </div>
            </div>
            {/*------نام ورک اسپیس-----*/}

            <div dir="rtl"
                 className="w-[453px] h-[165px] gap-[16px] pt-[16px] pr-[12px] pb-[16px] pl-[12px] border-[0.5px] rounded-[8px] border-[#AAAAAA]">
                <div className="w-[429px] h-[34px] justify-between flex">
                            <span
                                className="font-extrabold text-[14px] leading-[19.73px] text-right">نام ورک اسپیس</span>
                    <span className="font-extrabold text-[14px] leading-[19.73px] text-right ">تیم طراحی</span>

                </div>
                <div className="w-[429px] h-[34px] justify-between flex">
                            <span
                                className="font-extrabold text-[14px] leading-[19.73px] text-right">رنگ ورک اسپیس</span>
                    <span className="w-[15px] h-[15px] rounded-[2px] bg-[#82C91E]"></span>
                </div>

                <div className="w-[429px] h-[34px] justify-between flex">
                            <span
                                className="font-extrabold text-[14px] leading-[19.73px] text-right">اعضا</span>
                    <div className=" w-[36px] h-[33px]">
                        <img
                            className="w-[36px] h-[33px] rounded-[100%] object-cover   pt-[9px] pr-[8px] pb-[7px] pl-[8px]"
                            src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=XdZqQ92Yk82otKZio_pE0KURn0U08sIr5Vz9bFSm7bM="/>
                    </div>
                </div>


            </div>
            {/* ---card body ------END*/}
            {/*------card Button--- START */}
            <DynamicButton
                text="ساختن ورک اسپیس"
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
                <div className="text-gray-400"><FontAwesomeIcon icon={faDotCircle}/></div>
                <div className="text-gray-700"><FontAwesomeIcon icon={faDotCircle}/></div>
            </div>
        </Form>
    )
};

export default WorkspaceThree