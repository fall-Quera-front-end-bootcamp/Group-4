import React, { ChangeEvent,useState ,useEffect } from 'react';
import Avatar from '../../Components/common/avatar/avatar';
import DynamicInput from '../../Components/common/input';
import DynamicButton from '../../Components/common/button';
import { fetchAccount } from '../../../services/account';
import { changePersonalInformation } from '../../../services/account';
import { Thumbnail } from 'react-bootstrap';

interface Profile {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string | null;
  thumbnail: string;
}

function Profile1() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [profile, setProfile] = useState<Profile|null>(null);
  const [profileImagePreview, setProfileImagePreview] = useState<string>(''); 
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null); 

  
  const user = localStorage.getItem('userId');

  useEffect(() => {
    const fetchWorkspaces = async () => {
        try {

            const profileData=await fetchAccount(user);
            setProfile(profileData);
            console.log(profileData);
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    fetchWorkspaces();
}, [setProfileImageFile]);


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

  const avatarData = {
    name: profile && (profile.first_name && profile.last_name) ? `${profile.first_name} ${profile.last_name}` : profile && profile.username || '',
    imageSrc: profile && profileImageFile ? `${profileImagePreview}` : (profile && profile.thumbnail ? `${profile.thumbnail}` : ''),
    color: 'blue'
  };

  const handleProfileImageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    event.preventDefault();
    event.stopPropagation();

    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImageFile(file);
        setProfileImagePreview(reader.result as string); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitChanges = async () => {
    try {

      const accountData = await fetchAccount(user);

      const userData = {
        username: accountData.username,
        email: accountData.email,
        first_name: firstName || accountData.first_name,
        last_name: lastName || accountData.last_name,
        phone_number: mobileNumber || accountData.phone_number,
        thumbnail: profileImageFile || accountData.thumbnail
      };
  
      
  
  
      const response = await changePersonalInformation(user, firstName , lastName, mobileNumber , profileImageFile , userData.email,userData.username);
  
      console.log("Changes submitted successfully:", response);
    } catch (error) {
      console.error('Error submitting changes:', error);
      
    }
  };


  return (
    <div className='w-[354px] h-[514px] flex flex-col justify-start items-end'>
      <h1 style={headerStyle} className='mb-[30px]'>اطلاعات فردی</h1>
      <div className='w-[354px] h-[438px] flex flex-col justify-start items-end'>
        <div className='w-[329px] h-[94] flex justify-between'>
          <div className='flex flex-col w-[212px] h-[81px] justify-between items-end mt-[5px]'>
            <label htmlFor="profileImageInput" className="w-[212px] h-[48px] border border-solid border-[#208D8E] bg-white text-[#208D8E] py-2 px-4 rounded-[8px] hover:bg-[#208D8E] hover:text-white flex justify-center items-center cursor-pointer">
              ویرایش تصویر پروفایل
              <input
                id="profileImageInput"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleProfileImageInputChange}
              />
            </label>
            <h1 style={detailStyle}>این تصویر برای عموم قابل نمایش است</h1>
          </div>
          <div className=' h-[33px] mt-3 flex justify-end items-center cursor-pointer'>
            {profile && (
              <Avatar
                size={80}
                borderRadius="50%"
                profile={avatarData}
                index={0}
                overlap={0}
              />
                        )}
                    </div>
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
                      onClick={handleSubmitChanges}
                      style={{marginLeft:"20px" , marginTop:"80px"}}
                   />
      </div>
    </div>
  );
}

export default Profile1;
