import React, {JSX} from "react";
import { faPlus ,faShareNodes,faPalette, faChain,faTrash} from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DynamicButton from "../../../../../../../Components/common/button";

interface TaskCreateProp{

}
const TaskCreate :React.FC<TaskCreateProp>=():JSX.Element=>{

    return(
        // column more
        <div dir="rtl"
             className="bg-white z-50 shadow-md w-[184px] h-[204px] top-[1581px] left-[2742px] rounded-[8px] p-[12px] gap-[16px]">
            {/*---------ساختن تسک جدید-----*/}
            <div className="cursor-pointer w-[160px] h-[128px] gap-[16px] flex flex-col">
                <div className="flex items-center w-[139px] h-[20px] gap-[8px]">
                    <span className="w-[20px] h-[20px]"><FontAwesomeIcon icon={faPlus}/></span>
                    <span
                        className="w-[111px] h-[20px] text-[#1e1e1e] font-medium text-[14px] leading-[19.73px] text-right">ساختن تسک جدید</span>
                </div>
                {/*----------ویرایش نام پروژه-----------*/}
                <div className=" cursor-pointer flex items-center w-[169px] h-[20px] gap-[8px]">
                    <span className="w-[20px] h-[20px]"><FontAwesomeIcon icon={faPenToSquare}/></span>
                    <span
                        className="w-[141px] h-[20px] text-[#1e1e1e] font-medium text-[14px] leading-[19.73px] text-right">ویرایش نام پروژه</span>
                </div>

                {/*    ------------------کپی لینک-----------------*/}
                <div className="cursor-pointer flex items-center w-[86px] h-[20px] gap-[8px]">
                    <span className="w-[20px] h-[20px]"><FontAwesomeIcon icon={faChain}/></span>
                    <span
                        className="w-[58px] h-[20px] text-[#1e1e1e] font-medium text-[14px] leading-[19.73px] text-right">کپی رنگ</span>
                </div>
                {/*    --------------------حذف--------------*/}
                <div className="cursor-pointer flex items-center w-[59px]  h-[20px] gap-[8px]">
                    <span className="w-[20px] h-[20px] text-[#FA5252]"><FontAwesomeIcon icon={faTrash}/></span>
                    <span
                        className="w-[31px] h-[20px] text-[#FA5252] font-medium text-[14px] leading-[19.73px] text-right">حذف</span>
                </div>


            </div>
            {/*  ----------دکمه اشتراک گذاری------  */}
            <div className="mt-4">
                <DynamicButton text="اشتراک گذاری" width={160} height={36}/>
            </div>
</div>


            )


}



export default TaskCreate