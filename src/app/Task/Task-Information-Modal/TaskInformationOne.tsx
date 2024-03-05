import React, {JSX} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTags, faTimes, faUser, faShareNodes} from '@fortawesome/free-solid-svg-icons';
import {faFlag, faPlusSquare,faComment} from '@fortawesome/free-regular-svg-icons';
import {Link} from "react-router-dom";
import board from "../../Dashboard/HomePage/Board/Board";
import Board from "../../Dashboard/HomePage/Board/Board";
interface TaskInfoProp{

}
const TaskInformationOne: React.FC<TaskInfoProp> = (): JSX.Element => {

    return (

        <>
            <form className="w-[1352px] m-20  h-[596px] top-[1952px] left-[118px] rounded-[20px]">
                <div className="cursor-pointer w-[24px] h-[24px] top-[33px] left-[36px]">
                    <Link to="/board">
                    <FontAwesomeIcon icon={faTimes}/>
                    </Link>
                </div>

                {/*------------------------------------------------------------------*/}
                <div className=" w-[1316px] h-[506px] top-[90px] flex absolute ">
                    {/*  ---------ا-----------  */}
                    <div dir="rtl" className=" w-[659px] h-[506px] flex justify-between">
                        <div className="  w-[659px] h-[81px] gap-[24px]">
                            <div className="w-[659px] h-[57px] gap-[214px] pr-[20px] pl-[36px]">
                            {/*   =================================================================================== */}

                            {/*-----------اردیبهشت و پس فردا-------*/}
                                <div className=" w-[216px] h-[57px] gap-[24px] flex items-center ">
                                    {/*----------------تردیبهشت1402----------*/}
                                    <div className="flex flex-col justify-center items-center w-[120px] h-[48px] gap-[8px]">
                                        <span className="w-[70px] h-[17px] font-normal text-[12px] leading-[16.91px] text-right text-[#BBBBBB]">ساخته شده در</span>
                                        <span className="w-[120px] h-[23px] font-medium text-[16px] leading-[22.55px] text-right text-[#1e1e1e]">1 اردیبهشت 1402 </span>
                                    </div>
                                    {/*--------border line-------*/}
                                    <div className="border-[1px] w-[57px] border-[#F4F4F4] h-[57px]"></div>
                                    {/*--------پس فردا--------------*/}
                                    <div className="flex flex-col justify-center items-center w-[115px] h-[48px] gap-[8px]">
                                        <span className="w-[33px] h-[17px] font-normal text-[12px] leading-[16.91px] text-right text-[#BBBBBB]">ددلاین</span>
                                        <span className=" w-[56px] h-[23px] font-medium text-[16px] leading-[22.55px] text-right text-[#1e1e1e]">پس فردا</span>
                                    </div>
                                </div>
                                {/*---------------------کامنت شما-------------------*/}
                                {/*<div dir="rtl" className="w-[659px] h-[67px] bg-sky-400 relative flex justify-between">*/}
                                {/*    <div className="w-[74px] h-[23px] top-[13px] left-[569px] absolute*/}
                                {/*font-medium text-base leading-[22.55px] text-right text-[#AEAEAE]">کامنت شما</div>*/}
                                {/*    <span className="w-[24px] h-[24px] top-[13px] absolute left-[36px] text-[#AEAEAE]">*/}
                                {/*    <FontAwesomeIcon icon={faComment}/></span>*/}
                                {/*</div>*/}
                            </div>
                            {/*---------------border-------------------*/}
                            <div className="border-[1px] border-[#F4F4F4] w-[657px] rotate-180"></div>
                        </div>
                    </div>
                    {/*--------border--line-------*/}
                    <div className="border-[1px] border-[#F4F4F4] h-[500px] absolute top-[5px] left-[659px]  "></div>
                    {/*------------اشتراک گذاری------------*/}
                    <div dir="rtl" className="bg-white w-[657px] h-[367px] gap-[24px] ">
                        <div className="bg-white w-[657px] h-[57px] flex justify-between items-center">
                            <div className="flex w-[238px] h-[34px] gap-[16px]">
                                <button
                                    className="w-[111px] h-[30px] gap-[2px] bg-[#F84747] rounded-[4px] text-white">Open
                                </button>
                                {/*----------------عکس پروفایل---------------*/}
                                <div className="w-[68px] h-[34px] flex">
                                    <img alt="profile photo"
                                         className="z-50  absolute w-[34px] h-[34px] object-cover  rounded-[100%] "
                                         src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=XdZqQ92Yk82otKZio_pE0KURn0U08sIr5Vz9bFSm7bM="/>
                                    <div
                                        className="z-0 mr-6 border-[1.6px] border-[#C1C1C1] border-dashed  w-[34px] h-[34px] rounded-[106.25px] p-[4.25px] gap-[10.63px]  ">
                                       <span
                                           className="text-[#C1C1C1] flex justify-center items-center"> <FontAwesomeIcon
                                           icon={faUser}/></span>
                                    </div>
                                </div>
                                <div
                                    className=" cursor-pointer flex justify-center items-center border-[#FB0606] p-[4.53px] border-[0.94px] border-dashed  w-[34px] h-[34px] rounded-[94.44px]">
                                    <span className="text-[#FB0606] w-[20px] h-[20px] "><FontAwesomeIcon icon={faFlag}/></span>
                                </div>
                            </div>
                            {/*    --------------------اشتراک گذاری----------------*/}
                            <div className="w-[118px] h-[24px]  flex">
                                <span className=" w-[24px] h-[24px] text-[#BDBDBD]"><FontAwesomeIcon
                                    icon={faShareNodes}/></span>
                                <span
                                    className=" cursor-pointer w-[89px] h-[23px] font-medium text-[16px] leading-[22.55px] text-right text-[#1e1e1e]">اشتراک گذاری</span>
                            </div>
                        </div>
                        {/*---------------border-boten-----------------*/}
                        <div className="border-[1px] border-[#F4F4F4] w-[657px] rotate-180"></div>

                        {/*----------------------------عنوان تسک------------------------------*/}
                        <div className=" mt-4 w-[657px] h-[262px] px-[20px] gap-[24px]">
                            <div
                                className="flex justify-center items-center text-[#C1C1C1] w-[34px] h-[34px] rounded-[94.44px] border-dashed border-[0.94px] p-[4.53px]">
                              <span className="w-[20px] h-[20px] text-[#C1C1C1]">
                                   <FontAwesomeIcon icon={faTags}/>
                              </span>
                            </div>

                            {/*    ------------------------------------*/}

                            <div className=" w-[617px] h-[156px] gap-[8px] mt-4">

                                <span className="w-[116px] h-[32px] font-extrabold text-[24px] leading-8 text-right ">عنوان تسک</span>

                                <div
                                    className="w-[617px] h-[116px] mt-2 rounded-[12px] border-[#C1C1C1] border-[1px] p-[12px] gap-[10px] ">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                    گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                                    برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                                    می باشد،
                                </div>
                                <div className="cursor-pointer  mt-4 w-[128px] h-[24px] gap-[20px]">
                                    <span className="w-[24px] ml-1 h-[24px] text-[#208D8E] "><FontAwesomeIcon
                                        icon={faPlusSquare}/></span>
                                    <span
                                        className="w-[100px]  h-[17px] font-normal text-xs leading-[16.91px] text-right text-[#208D8E]">اضافه کردن پیوست</span>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>


            </form>


        </>
    )
}
export default TaskInformationOne