import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { faTimes , faUserPlus ,faChain, faTags} from '@fortawesome/free-solid-svg-icons'
import { faFlag, faCalendar} from '@fortawesome/free-regular-svg-icons'
import DynamicButton from "../../Components/common/button";
import {Link} from "react-router-dom";
import Priority from "../../Components/Priority";
import Tags from "./Tags/Tags";
import {useEffect, useRef, useState} from "react";
import NewTag from "./Tags/NewTag/NewTag";
import Calendar from "../../Components/calendar/calendarview";


function NewTask () {
const [closeTask,setCloseTask]=useState(true)
const [open,setOpen]=useState(false)
const [priorityOpen, setPriorityOpen] =useState(false)
const handlerOpenTag=(e:any)=>{
e.preventDefault()

    setOpen(!open)
}
const handleCloseTask =()=>{
    setCloseTask(!closeTask)
}

return (

<>

            {/*--------------عنوان تسک----------*/}

    <div className={`${closeTask? 'visible' : 'hidden'}`}>

    <div dir="rtl"
                 className=" w-[1153px] h-[637px] items-center fixed top-[251px] left-[91px] rounded-[20px] p-[32px] gap-[40px]  shadow-md">
                <div className="w-[1089px] h-[34px] flex justify-between ">
                    <div className="w-[148px] h-[34px] gap-[13px] flex items-center">
                        <div className="w-[16px] h-[16px] rounded-[2px] bg-[#d9d9d9]"></div>
                        <span
                            className="w-[119px] h-[34px] font-medium text-[24px] leading-[33.82px] text-right text-[#1e1e1e] ">عنوان تسک</span>
                    </div>
                    <span onClick={handleCloseTask} className="cursor-pointer w-[32px] h-[32px] text-[#bdbdbd]"><FontAwesomeIcon icon={faTimes}/></span>
                </div>
                {/*------------------پروژه اول-----------*/}
                <div className="w-[1089px]  h-[34px] gap-[8px] mt-4 flex items-center ">
                    <div className="w-[14px] h-[23px]">
                        <span
                            className=" font-medium text-[16px] leading-[22.55px] text-right text-[#1e1e1e]">در</span>
                    </div>
                    <div
                        className=" w-[158px] h-[32px] rounded-[6px] border-2 pt-[5px] pr-[8px] pb-[4px] pl-[8px] gap-[10px] border-[#e9ebfo] bg-white">
                        <span className="w-[62px] h-[23px] font-medium text-[16px] leading-[22.55px] text-right">پروژه اول</span>
                    </div>
                    <div className="w-[26px] h-[23px]">
                        <span
                            className=" font-medium text-[16px] leading-[22.55px] text-right text-[#1e1e1e]">برای</span>
                    </div>
                    <div
                        className="w-[34px] h-[34px] rounded-[106.25px] border-[1.06px] border-dashed p-[4.25px] gap-[10.63px]">
                        <span className="text-[#c1c1c1] w-[20px] h-[20px] text-center cursor-pointer "><FontAwesomeIcon
                            icon={faUserPlus}/></span>
                    </div>
                </div>
                {/*    ----------------توضیحات برای تسک--------------*/}
                <div className="mt-4">
                    <textarea
                        className=" w-[1089px] h-[191px] rounded-[12px] border-2 border-[#e2e2e2] outline-0 inline-block"
                        placeholder="توضیحاتی برای این تسک بنویسید"/>
                </div>
                {/*-----------------------افزودن پیوست---------------------*/}
                <div className="w-[1089px] h-[32px] gap-[16px] flex mt-8">
                    <span className="w-[102px] h-[23px] font-medium text-[16px] leading-[22.55px] text-right">افزودن پیوست</span>
                    <button className="w-[112px] h-[32px] rounded-[4px] border-2 pt-[4px] pr-[8px] pb-[4px] pl-[8px] gap-[4px]
     border-[#208d8e]"><span className="text-[#208D8E] ml-2"><FontAwesomeIcon icon={faChain}/></span>آپلود فایل
                    </button>
                </div>
                {/*----------------------افزودن کاور-----------------------------*/}
                <div className="w-[1089px] h-[32px] gap-[16px] flex mt-8">
                    <span className="w-[102px] h-[23px] font-medium text-[16px] leading-[22.55px] text-right">افزودن کاور</span>
                    <button className="w-[112px] h-[32px] rounded-[4px] border-2 pt-[4px] pr-[8px] pb-[4px] pl-[8px] gap-[4px]
     border-[#208d8e]"><span className="text-[#208D8E] ml-2"><FontAwesomeIcon icon={faChain}/></span>آپلود فایل
                    </button>
                </div>

            {/*----------------ساختن تسک------------*/}
                <div className="w-[1089px] h-[50px] flex flex-row justify-between items-center mt-8 ">
                    <div className="w-[198px] h-[50px] gap-[24px] flex ">

                        <div onClick={()=>setPriorityOpen(!priorityOpen)} className="cursor-pointer hover:text-customBlue w-[50px] h-[50px] border-dashed border-[#c1c1c1] p-[6.67px] border-[1.39px] rounded-[138.89px] text-[#c1c1c1]"><span className="w-[29.41px]  h-[29.41px] items-center flex justify-center"><FontAwesomeIcon icon={faFlag}/></span></div>
                      <div className={`${priorityOpen ? 'visible': 'hidden'}`}>
                        <Priority/>
                      </div>
                        <Link to="/board/calendarview">
                        <div className=" cursor-pointer hover:text-customBlue w-[50px] h-[50px] border-dashed border-[#c1c1c1] p-[6.67px] border-[1.39px] rounded-[138.89px] text-[#c1c1c1]"><span className="w-[29.41px]  h-[29.41px] items-center flex justify-center"><FontAwesomeIcon icon={faCalendar}/></span></div>
                        </Link>
                        <div onClick={()=>setOpen(!open)} className=" hover:text-customBlue cursor-pointer w-[50px] h-[50px] border-dashed border-[#c1c1c1] p-[6.67px] border-[1.39px] rounded-[138.89px] text-[#c1c1c1]"><span className="w-[29.41px]  h-[29.41px] items-center flex justify-center"><FontAwesomeIcon icon={faTags}/></span></div>
                       {/*------------Tag --showing--------------------------------------------------------------*/}
                       <div className={`${open ?'visible':'hidden'}`}>
                        <Tags
                        />
                       </div>
                        {/*--------------------------------------------------------------------------------------*/}
                        </div>
                    <div className="w-[125px] h-[32px] ">
                        <DynamicButton text="ساختن تسک" width={125} height={32} padding={4}/>
                    </div>
                </div>


            </div>

    </div>
</>
    )


}

export default NewTask;


