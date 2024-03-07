import React from 'react';
import Form from '../common/form/Index';
import DeleteIcon from '../../Components/assets/icons/Delete.png';
import DynamicInput from '../common/input';
import PersonLink from '../../Components/assets/icons/personLink.png';
import DynamicButton from '../common/button';
import Avatar from '../common/avatar/avatar';
import Tag from '../common/tag';
import DownArrow from '../../Components/assets/icons/DownArrow.png';

interface ShareProjectProps {
    onCloseModal: () => void;
}

function ShareProject({ onCloseModal }: ShareProjectProps) {

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


    return (
       <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
             <Form style={FormStyle}>
            <div className='flex p1 mb-[40px]'>
                <div className='w-[430px] h-[32px] flex justify-center items-center'>
                    <h1 style={header} className='ml-[15px]'>به اشتراک‌گذاری پروژه‌</h1>
                </div>
                <div>
                    <img src={DeleteIcon} alt="preDeleteIconv" className='cursor-pointer' onClick={onCloseModal}/>
                </div>
            </div>
            <div className='w-[430px] h-[220px] flex flex-col justify-center items-center'>
                <DynamicInput
                    width={430}
                    height={40}
                    value=""
                    onChange={(value) => console.log(value)}
                    placeholder="دعوت با ایمیل"
                    rtlPlaceholder={true}
                    buttonText="ارسال" 
                    onButtonClick={() => console.log("Button clicked")} 
                />
                <div className='w-[430px] h-[22px] flex justify-between items-center mt-[20px]'>
                    <DynamicButton
                        text="کپی لینک"
                        width={74}
                        height={22}
                        onClick={() => { console.log("test") }}
                        bgColor="white"
                        textColor="black"
                        fontSize="12px"
                        fontWeight={400}
                        borderRadius={6}
                    />
                    <div className='w-[100px] h-[20px] flex cursor-pointer'>
                        <h1 style={PersonLinkStyle}>لینک خصوصی</h1>
                        <img src={PersonLink} alt="personLink" className='w-[20px] h-[20px]' />
                    </div>
                </div>
                <div className='w-[430px] h-[110px] mt-[20px] flex flex-col'>
                    <h1 style={{ ...PersonLinkStyle, direction: 'rtl' }} className='text-gray-600'>اشتراک‌گذاشته شده با</h1>
                    <div className='w-[430px] h-[74px] flex justify-between items-center '>
                    <DynamicButton
                                text="دسترسی کامل"
                                width={89}
                                height={26}
                                onClick={() => { console.log("test") }}
                                bgColor="white"
                                textColor="black"
                                fontSize="12px"
                                fontWeight={400}
                                borderRadius={6}
                            />
                        <div className='w-[176px] h-[33px] flex justify-end'>
                            {profile.map((profileData, index) => (
                                <div className='flex justify-end items-center' key={index}>
                                    <Tag
                                        backgroundColor="#D0EBFF"
                                        textColor="#228BE6"
                                        text="مالک"
                                    />
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
                        </div>
                    </div>
                    <div className='w-[430px] h-[74px] flex justify-between items-center '>
                    <DynamicButton
                                text="دسترسی کامل"
                                width={117}
                                height={27}
                                onClick={() => { console.log("test") }}
                                bgColor="white"
                                textColor="black"
                                fontSize="12px"
                                fontWeight={400}
                                borderRadius={6}
                                icon={DownArrow} 
                            />
                        <div className='w-[176px] h-[33px] flex justify-end'>
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
                        </div>
                    </div>
                </div>
            </div>
        </Form>
       </div>
    )
}

export default ShareProject;
