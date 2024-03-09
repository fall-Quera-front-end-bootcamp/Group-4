import React, { ChangeEvent,useState } from 'react';
import Avatar from '../../Components/common/avatar/avatar';
import DynamicInput from '../../Components/common/input';
import DynamicButton from '../../Components/common/button';

function Profile2() {

  const [email, setEmail] = useState("");
  const [usename, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
    <div className='w-[354px] h-[556px] flex flex-col justify-start items-end'>
      <h1 style={headerStyle} className='mb-[10px]'>اطلاعات حساب</h1>
      <div className='w-[354px] h-[510px] flex flex-col justify-start items-end'>
        <div className='w-[354px] h-[404px] flex flex-col justify-between items-end'>
        <div className='w-[354px] h-[68px] flex flex-col justify-center items-end pt-[70px] ml-[20px]'>
                      <label htmlFor="workspaceName" className='pb-[10px]' style={LabelStyle}>ایمیل</label>
                      <DynamicInput
                      type='email'
                      width={354}
                      height={40}
                      value={email}
                      onChange={(value: string) => setEmail(value)}
                      />
            </div>
            <div className='w-[354px] h-[68px] flex flex-col justify-center items-end pt-[70px] ml-[20px]'>
                      <label htmlFor="workspaceName" className='pb-[10px]' style={LabelStyle}>نام کاربری</label>
                      <DynamicInput
                      type='text'
                      width={354}
                      height={40}
                      value={usename}
                      onChange={(value: string) => setUsername(value)}
                      />
            </div>
            <div className='w-[354px] h-[68px] flex flex-col justify-center items-end pt-[70px] ml-[20px]'>
                      <label htmlFor="workspaceName" className='pb-[10px]' style={LabelStyle}>رمز عبور فعلی</label>
                      <DynamicInput
                      type='password'
                      width={354}
                      height={40}
                      value={currentPassword}
                      onChange={(value: string) => setCurrentPassword(value)}
                      />
            </div>
            <div className='w-[354px] h-[68px] flex flex-col justify-center items-end pt-[70px] ml-[20px]'>
                      <label htmlFor="workspaceName" className='pb-[10px]' style={LabelStyle}>رمز عبور جدید</label>
                      <DynamicInput
                      type='password'
                      width={354}
                      height={40}
                      value={newPassword}
                      onChange={(value: string) => setNewPassword(value)}
                      />
            </div>
            <div className='w-[354px] h-[68px] flex flex-col justify-center items-end pt-[70px] ml-[20px]'>
                      <label htmlFor="workspaceName" className='pb-[10px]' style={LabelStyle}>تکرار رمز عبور جدید</label>
                      <DynamicInput
                      type='password'
                      width={354}
                      height={40}
                      value={confirmPassword}
                      onChange={(value: string) => setConfirmPassword(value)}
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

export default Profile2;
