import DynamicButton from "../../../../../Components/common/button";
import React, {JSX, useState} from "react";
import DynamicInput from "../../../../../Components/common/input";
import Form from "../../../../../Components/common/form/Index";
import { faTimesCircle  } from '@fortawesome/free-regular-svg-icons';
import { faDotCircle,faTimes ,faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import WorkspaceTwo from "./Workspace-Two";

const customStyle = {
    width: "500px",
    height: "268px",
    gap:"40px",
    borderRadius: "20px",

};
const labels = {
    color: "#1E1E1E",
    fontWeight: 400,
    fontSize: "14px",
};
const customStylebtn = {
    padding:"10px",
}

interface openProps{
    open?:any;

    setopen?: any;

}


const WorkspaceOne :React.FC<openProps> = ({open ,setopen}):JSX.Element=> {

    const [workspace, setWorkspace] = useState("");
    const [WorkspaceClose,setWorkspaceClose]=useState(true)

    return (

        <div className={`${!WorkspaceClose? 'hidden':''}`}>
<Form style={customStyle}>

    {/* ---card body ------START*/}
    {/*--------ورک اسپیس------------*/}
    <div className="flex justify-center items-center w-[452px] h-[140px] gap-[40px] ">
        <div className="w-[452px] h-[32px] flex flex-row items-center justify-between gap-[10px]">
            <div className="w-[24px] h-[24px]">
                {/*<FontAwesomeIcon icon={faArrowLeft}/>*/}
            </div>
                <div className="font-extrabold
                 text-[24px] leading-[32px] text-center text-[#1E1E1E]">ساختن ورک اسپیس جدید</div>
        <div onClick={()=> setWorkspaceClose(!WorkspaceClose)} className="cursor-pointer text-[#323232] w-[24px] h-[24px] ml-4"><FontAwesomeIcon icon={faTimes}/></div>
        </div>

    </div>
{/*------نام ورک اسپیس-----*/}
        <div dir="rtl" className="w-[415px] h-[68px] gap-[8px] flex flex-col">
            <label
                style={labels}
                className="leading-[19.73px] text-right">
                نام ورک اسپیس
            </label>
            <DynamicInput
                width={415}
                height={40}
                value={workspace}
                onChange={()=>console.log('input change')}
                type={"text"}
            />
        </div>
    {/* ---card body ------END*/}

    {/*------card Button--- START */}

    <DynamicButton
        text="ادامه"
        width={415}
        height={40}
        onClick={()=>setopen(!open)}
        bgColor="#208D8E"
        fontSize="14px"
        fontWeight={800}
        padding={10}
    />




    <div className=" flex-row flex  w-[40px] h-[8px] gap-[8px]">
        <div className="text-gray-700"><FontAwesomeIcon icon={faDotCircle}/></div>
        <div className="text-gray-400"><FontAwesomeIcon icon={faDotCircle}/></div>
        <div className="text-gray-400"><FontAwesomeIcon icon={faDotCircle}/></div>
    </div>
</Form>
        </div>
    )


}

export default WorkspaceOne