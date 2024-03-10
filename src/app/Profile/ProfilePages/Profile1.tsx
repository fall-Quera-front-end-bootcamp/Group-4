import React, { ChangeEvent,useState } from 'react';
import Avatar from '../../Components/common/avatar/avatar';
import DynamicInput from '../../Components/common/input';
import DynamicButton from '../../Components/common/button';

function Profile1() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const headerStyle = {
    fontWeight: 700,
    fontSize: "31px"
  };

  const detailStyle = {
    fontWeight: 400,
    fontSize: "12px"
  };

  const LabelStyle = {
    fontWeight: 400,
    fontSize: "14px"
  };


  return (
    <div className='w-[354px] h-[514px] flex flex-col justify-start items-end'>
      <h1 style={headerStyle} className='mb-[30px]'>اطلاعات فردی</h1>
      <div className='w-[354px] h-[438px] flex flex-col justify-start items-end'>
        <div className='w-[329px] h-[94] flex justify-between'>
          <div className='flex flex-col w-[212px] h-[81px] justify-between items-end mt-[5px]'>
            <button className="w-[212px] h-[48px] border border-solid border-[#208D8E] bg-white text-[#208D8E] py-2 px-4 rounded-[8px] hover:bg-[#208D8E] hover:text-white flex justify-center items-center">ویرایش تصویر پروفایل</button>
            <h1 style={detailStyle}>این تصویر برای عموم قابل نمایش است</h1>
          </div>
          <Avatar
            size={90}
            borderRadius="50%"
            profile={{ name: "hojiiiZhooon", color: "orange" }}
            index={0} 
            overlap={10}
          />
        </div>
        <div className='w-[354px] h-[236px] flex flex-col justify-between items-end'>
        <div className='w-[354px] h-[68px] flex flex-col justify-center items-end pt-[70px] ml-[20px]'>
                      <label htmlFor="workspaceName" className='pb-[10px]' style={LabelStyle}>نام </label>
                      <DynamicInput
                      type='text'
                      width={354}
                      height={40}
                      value={firstName}
                      onChange={(value: string) => setFirstName(value)}
                      />
            </div>
            <div className='w-[354px] h-[68px] flex flex-col justify-center items-end pt-[70px] ml-[20px]'>
                      <label htmlFor="workspaceName" className='pb-[10px]' style={LabelStyle}>نام خانوادگی</label>
                      <DynamicInput
                      type='text'
                      width={354}
                      height={40}
                      value={lastName}
                      onChange={(value: string) => setLastName(value)}
                      />
            </div>
            <div className='w-[354px] h-[68px] flex flex-col justify-center items-end pt-[70px] ml-[20px]'>
                      <label htmlFor="workspaceName" className='pb-[10px]' style={LabelStyle}>شماره موبایل </label>
                      <DynamicInput
                      type='number'
                      width={354}
                      height={40}
                      value={mobileNumber}
                      onChange={(value: string) => setMobileNumber(value)}
                      />
            </div>
            
        </div>
        <DynamicButton
                      text='ثبت تغییرات'
                      width={354}
                      height={36}
                      borderRadius={6}
                      fontWeight={800}
                      fontSize='14px'
                      onClick={()=>{console.log("hojii")}}
                      style={{marginLeft:"20px" , marginTop:"80px"}}
                   />
      </div>
    </div>
  );
}

export default Profile1;
