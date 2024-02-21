import React from 'react'
import './HEaderStyle.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {    faCalendarDays} from "@fortawesome/free-regular-svg-icons" ;
import {faTableColumns , faListCheck , faShareNodes , faSearch , faSliders , faRotateRight} from "@fortawesome/free-solid-svg-icons";


 function Header () {

    return(

        <div>

            {/* container of header  */}
            <div className=" container pt-[16px] pb-[16px] flex  justify-between items-center W-[1034px] H-[64px] ">
                {/* left side of header */}
                <div className="w-[118px] h-[24px] gap-[5px] flex flex-row items-center justify-center ">
                    <div className=" w-[98px] h-[23px] line_effect_l">
                        <span className="cursor-pointer text-base font-medium leading-[22.55px] text-right ">  اشتراک گذاری</span>

                        <span className="absolute ml-2"><FontAwesomeIcon icon={faShareNodes}/></span>
                    </div>
                </div>

                {/* right side of the header----container---- */}
                <div className="w-[511px] h-[32px] justify-center
                 flex gap-[5px] ">
                    {/*---------calender------------*/}
                    <div className="cursor-pointer w-[98px] h-[23px] text-base font-medium
                     leading-[22.55px] text-right line_effect_r">تقویم

                        <span className=" ml-2 ">
                    <FontAwesomeIcon icon={faCalendarDays}/>
                        </span>
                    </div>

                    {/*----------column-sorting----------*/}
                    <span className="border-[#999999] border-l-[1px] w-[22px]"></span>
                    <div className="mr-6  cursor-pointer w-[98px] h-[23px] text-base font-medium
                     leading-[22.55px] text-right line_effect_r">نمایش ستونی
                        <span className="absolute ml-2 ">
                    <FontAwesomeIcon icon={faTableColumns}/>
                    </span>
                    </div>
                    {/*--------------list-sorting-------------*/}
                    <span className="border-[#999999] border-l-[1px] w-[22px]"></span>
                    <div className="mr-6 cursor-pointer w-[98px] h-[23px] text-base font-medium
                     leading-[22.55px] text-right line_effect_r
                       ">نمایش لیستی
                        <span className="absolute ml-2">
                    <FontAwesomeIcon icon={faListCheck}/>
                    </span>
                    </div>
                    {/*-------------------first-projects---------*/}
                    <span className="border-[#999999] border-l-[1px] w-[22px]"></span>
                    <span className="  w-[77px] h-[32px] font-extrabold text-[20px]
                    leading-[32px] text-right ">پروژه اول</span>
                </div>
            </div>
            {/*-----------------solid-border-under--menu-------------------------*/}
            <div className="border-b-[0.5px]  border-[#AAAAAA] w-[1034px ] "></div>
            {/*---------------------------section -2 -----------------------------------*/}
            {/*-------------------container------------------------------*/}
            <div dir="rtl" className=" container flex  justify-between items-center W-[1034px] H-[64px] gap-[40px] mt-2">
                {/*-----------------------input - container----------------------------*/}
                <div className="w-[200px] h-[24px] gap-[4px] flex flex-row">
                    <span className="text-base text-center ml-2"><FontAwesomeIcon icon={faSearch}/></span>
                    <input className=" border-none font-normal gap-[4px] w-[200px] h-[24px] text-sm leading-[16.91px] text-right text-[#959595] " type="text" placeholder="جستجو بین تسک ها"/>
                    <span className="border-[#999999] border-l-[1px] w-[22px]"></span>
                </div>
                {/*------------------filter---------------------*/}
                <div dir="rtl" className="w-[754px] h-[28px] gap-[16px]  flex items-center flex-row ">
                    <FontAwesomeIcon icon={faSliders}/>
                    <span className="font-normal text-sm leading-[16.91px] text-right cursor-pointer">فیلترها</span>
                    <div className="bg-[#D0EBFF] flex  items-center rounded-[4px] pb-[4px] pt-[4px] pl-[12px] pr-[12px] w-[160px] h-[25px] ">
                        <span className=" text-blue-500 leading-[16.91px] text-right text-xs ">دسته بندی شده با : وضعیت</span>
                    </div>
                    <div className=" w-[198px] h-[28px] flex flex-row justify-center items-center border-solid  border-2 rounded-[8px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] gap-[6px]  border-[#208D8E] cursor-pointer ">
                        <span className="text-sm mt-1"><FontAwesomeIcon icon={faRotateRight}/></span>
                        <span className="  text-[12px] font-normal leading-[16.9px] text-right ">بازگردانی تسک های آرشیو شده</span>
                    </div>
                </div>
            </div>
            {/*-----------------solid-border-under--menu-------------------------*/}
            <div className="border-b-[0.5px]  border-[#AAAAAA] w-[1034px ] mt-2"></div>


        </div>


    )
 }

export default Header;