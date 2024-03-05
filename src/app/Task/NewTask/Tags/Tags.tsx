import React, {JSX, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import NewTag from "./NewTag/NewTag";



interface tagProp{


}
const Tags : React.FC<tagProp> = ():JSX.Element  =>{
const [openNewTag,setOpenNewTag] = useState(false);

    return (

<div className="  shadow-md w-[173px] bg-white h-[160px]  top-[1244px] left-[1025px] rounded-[8px] p-[8px] gap-[16px]">
    <div className="w-[157px] h-[32px] rounded-[4px] py-[4px] px-[8px] bg-[#e9e9e9] items-center flex justify-between">
        <span className="w-[24px] h-[24px] text-[#bdbdbd]"><FontAwesomeIcon icon={faSearch}/></span>
        <span onClick={()=>setOpenNewTag(!openNewTag)} className= " w-[109px] h-[17px] font-medium text-[12px] leading-[16.91px] text-right">جستجو یا ساختن تگ</span>
        {/*-------NewTag----showing------------------------------------------*/}
        <div className={`${openNewTag ?'visible':'hidden'}`}>
        <NewTag/>
    </div>
    {/* ----------------------------------------------------------------------*/}
    </div>
    <div className="w-[153px] h-[96px] gap-[12px] flex flex-col">
        <div className=" mt-2 flex items-center justify-between ">
            <span
                className=" cursor-pointer flex items-center w-[41px] h-[24px] rounded-[14px] px-[8px] bg-[#D0EBFF] text-[#228BE6] font-extrabold text-[12px] leading-[16.91px] text-right ">درس</span>
            <span>...</span>
        </div>
        <div className="  flex items-center justify-between ">
            <span
                className="cursor-pointer flex items-center w-[31px] h-[24px] rounded-[14px] px-[8px] bg-[#F3D9FA] text-[#BE4BDB] font-extrabold text-[12px] leading-[16.91px] text-right ">کار</span>
            <span>...</span>
        </div>
        <div className="  flex items-center justify-between ">
            <span
                className="cursor-pointer flex items-center w-[42px] h-[24px] rounded-[14px] px-[8px] bg-[#C5F6FA] text-[#15AABF] font-extrabold text-[12px] leading-[16.91px] text-right ">پروژه</span>
            <span>...</span>
        </div>

    </div>
</div>

    )
}
export default Tags