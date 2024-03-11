import React from 'react'
import SideBar from '../Components/SideBar'
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import DynamicButton from '../Components/common/button';
import BackIcon from '../../app/Components/assets/icons/backRight.png'
import PersonalityInfoIcon from '../Components/assets/icons/Profile/personalityInformation.png'
import AccountInfo from '../Components/assets/icons/Profile/accountInformation.png'
import settingIcon from '../Components/assets/icons/Profile/setting.png'
import { Link } from "react-router-dom";



function ProfilePage() {

  

  const SidBarItemsStyle = {
    fontWeight:500,
    fontSize:"20px"
  }

  const handleClick = () => {
    console.log("back button")
  };

  return (
    <div>
      <div className="fixed top-0 right-0 h-screen w-80 bg-white flex flex-col justify-start items-center border-l-2 border-gray-200 z-10">
      <div className=" font-extrabold   text-[32px] bg-gradient-to-r from-[#118C80] to-[#4AB7D8] inline-block text-transparent bg-clip-text  pt-10 pb-10">
          کوئرا تسک منیجر
      </div>
      <div className='w-[226px] flex justify-end'>
        <DynamicButton
          text="بازگشت" 
          width={113} 
          height={36} 
          onClick={handleClick}
          bgColor="#118C80" 
          textColor="#FFFFFF" 
          fontSize="20px" 
          fontWeight={500}
          padding={10} 
          borderRadius={8} 
          icon={BackIcon} 
          type="button"
          style={{ marginTop: 20 }}
        />
      </div>
      <div className='w-[226px] flex flex-col justify-end mr-[70px] mt-[80px]'>
          <Link to="/profile/profile1">
            <div className='w-[266px] h-[36px] flex justify-end items-center cursor-pointer pb-[50px]'>
              <h1 style={SidBarItemsStyle}>اطلاعات فردی</h1>
              <img src={PersonalityInfoIcon} alt="PersonalityInfoIcon" />
            </div>
          </Link>
          <Link to="/profile/profile2">
            <div className='w-[266px] h-[36px] flex justify-end items-center cursor-pointer '>
              <h1  style={SidBarItemsStyle}>اطلاعات حساب</h1>
              <img src={AccountInfo} alt="AccountInfo" />
            </div>
          </Link>
          <Link to="/profile/profile3">
            <div className='w-[266px] h-[36px] flex justify-end items-center cursor-pointer pt-[50px]'>
              <h1  style={SidBarItemsStyle}>تنظیمات</h1>
              <img src={settingIcon} alt="settingIcon" />
            </div>
          </Link>
      </div>

    </div>
    <div className='w-[1120px] h-screen flex justify-end items-center pr-[50px]'>
    <Outlet />
    </div>
    </div>
    
  )
}

export default ProfilePage