import Comment from "../../Components/Comment";
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTags, faTimes, faUser, faShareNodes} from '@fortawesome/free-solid-svg-icons';
import {faFlag, faPlusSquare,faComment} from '@fortawesome/free-regular-svg-icons';
import {Link} from "react-router-dom";
import Avatar from "../../Components/common/avatar/avatar";
import profile from "../../Profile";
import './TaskInformation.css';
import Modal from "react-modal";



const TaskInformation =()=>{

    const [isModalOpen, setIsModalOpen] = useState(false);
    const FormStyle = {
        width: "470px",
        height: "332px",
    };

    const header = {
        fontWeight: 800,
        fontSize: "20px",
    };

    const PersonLinkStyle = {
        fontWeight: 400,
        fontSize: "14px",
    };

    const profile = [
        { name: 'حجت', imageSrc: '', color: '#007bff' },
    ];
    return(


        <>
        <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
            content: {
                width: "1350px",
                height: "596px",
                background:"white",
                borderRadius:"15px"
            }
            
        }}
        overlayClassName="custom-overlay" className="custom-modal"
    >
                <div className="cursor-pointer w-[24px] h-[24px] top-[33px] left-[36px] mt-[20px] ml-[20px]">
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
                                <div className=" bottom-0  absolute mr-[-22px]">
                                    <Comment />
                                </div>

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
                                <div className="w-[100px] h-[34px] flex ml-[25px]">
                                    {profile.map((profileData, index) => (
                                        <div className='flex justify-end items-center' key={index}>
                                            <h1 className='mr-[5px] ml-[10px]' style={PersonLinkStyle}>{profileData.name}</h1>
                                            <Avatar
                                                size={33}
                                                borderRadius="50%"
                                                profile={profileData}
                                                index={index}
                                                overlap={0}
                                            />
                                        </div>
                                    ))}
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
                                    className="mt-2 ">
                                    <textarea  className="w-[617px] h-[116px]  rounded-[12px] border-[#C1C1C1] border-[1px] p-[12px] gap-[10px] " >
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                    گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                                    برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                                    می باشد،

                                    </textarea>


                                </div>
                                <div className="cursor-pointer  mt-4 w-[128px] h-[24px] gap-[20px]">
                                    <span className="w-[24px] ml-1 h-[24px] text-[#208D8E] "><FontAwesomeIcon
                                        icon={faPlusSquare}/></span>
                                    <span
                                        className="w-[100px]  h-[17px] font-normal text-xs leading-[16.91px] text-right text-[#208D8E]">اضافه کردن پیوست</span>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>


                </div>


                </Modal>
                <button onClick={() => setIsModalOpen(true)}>Open Modal</button>


        </>




    )
}
export default TaskInformation