import React from 'react';
import Form from '../common/form/Index';
import DeleteIcon from '../../Components/assets/icons/Delete.png';
import DynamicInput from '../common/input';
import PersonLink from '../../Components/assets/icons/personLink.png';
import DynamicButton from '../common/button';
import Avatar from '../common/avatar/avatar';
import Tag from '../common/tag';
import DownArrow from '../../Components/assets/icons/DownArrow.png'

function ShareWorkspace() {

    const FormStyle = {
        width: "547px",
        height: "369px",
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
        <Form style={FormStyle}>
            <div className='flex p1 mb-[40px]'>
                <div className='w-[507px] h-[28px] flex justify-center items-center'>
                    <h1 style={header} className='ml-[15px]'>اشتراک‌گذاری ورک‌اسپیس‌</h1>
                </div>
                <div>
                    <img src={DeleteIcon} alt="preDeleteIconv" className='cursor-pointer' />
                </div>
            </div>
            <div className='w-[507px] h-[261px] flex flex-col justify-center items-center'>
                <DynamicInput
                    width={507}
                    height={40}
                    value=""
                    onChange={(value) => console.log(value)}
                    placeholder="دعوت با ایمیل"
                    rtlPlaceholder={true}
                    buttonText="ارسال" 
                    onButtonClick={() => console.log("Button clicked")}
                    style={{right: "416px"}} 
                />
                <div className='w-[507px] h-[22px] flex justify-between items-center mt-[20px]'>
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
                <div className='w-[507px] h-[151px] mt-[20px] flex flex-col'>
                    <h1 style={{ ...PersonLinkStyle, direction: 'rtl' }} className='text-gray-600'>اشتراک‌گذاشته شده با</h1>
                    <div className='w-[507px] h-[74px] flex justify-between items-center '>
                    <DynamicButton
                                text="همه پروژه‌ها"
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
                    <div className='w-[507px] h-[74px] flex justify-between items-center '>
                    <DynamicButton
                                text="پروژه‌اول"
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
    )
}

export default ShareWorkspace;
