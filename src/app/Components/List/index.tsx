import React, { useState } from 'react';
import Avatars from '../common/avatar/avatars';
import upIcon from '../../Components/assets/icons/List/Up.png';
import downIcon from '../../Components/assets/icons/List/Down.png';
import pinkBox from '../../Components/assets/icons/List/pink.png';
import fori from '../assets/icons/PriorityIcons/fori.png';
import options from '../assets/icons/List/options.png';

function List() {
    const profiles = [
        { name: 'muhammadali ghasemi nezhad', imageSrc: '', color: '#007bff' },
        { name: 'hojjat iranmanesh', imageSrc: '', color: '#28a745' },
    ];
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const customStyle = {
        width: '986px',
        height: '47px',
        borderRadius: '4px',
        padding: '0px',
    };

    const pandding = {
        fontWeight: 800,
        fontSize: '16px',
    };

    const TitleOfTaskStyle = {
        fontWeight: 400,
        fontSize: '12px',
    };

    return (
        <div className="relative flex flex-col justify-between items-end h-[140px] w-[1011px]">
            <div className="flex items-center cursor-pointer flex" onClick={toggleMenu}>
                <div className="bg-[#E64980] flex justify-center items-center rounded-[4px] pb-[4px] pt-[4px] pl-[12px] pr-[12px] w-[84px] h-[32px] text-pink-200 leading-[16.91px] text-right text-xs" style={pandding}>
                    Pendding
                </div>
                {isOpen ? (
                    <img src={upIcon} alt="Up Icon" className="inline-block ml-2" />
                ) : (
                    <img src={downIcon} alt="Down Icon" className="w-15 h-15 inline-block ml-2" />
                )}
            </div>
            {isOpen && (
                <div className="flex flex-col justify-between h-[100px] w-[1011px]">
                    <div className="bg-white p-8 shadow-md flex justify-end items-center rounded-lg" style={customStyle}>
                        <img src={options} alt="option" className="w-[16px] h-[16px] inline-block mr-[10%] cursor-pointer" />
                        <img src={fori} alt="fori" className="w-[16px] h-[16px] inline-block mr-[10%] cursor-pointer" />
                        <p style={TitleOfTaskStyle} className="cursor-pointer mr-[10%]"> آبان۶</p>
                        <Avatars profiles={profiles} size={30}/>
                        <p style={TitleOfTaskStyle} className="cursor-pointer mr-2">این یک تیتر برای این تسک است</p>
                        <img src={pinkBox} alt="pinkBox" className="w-[16px] h-[16px] inline-block  cursor-pointer" />
                    </div>
                    <div className="bg-white p-8 shadow-md flex justify-end items-center rounded-lg" style={customStyle}>
                        <img src={options} alt="option" className="w-[16px] h-[16px] inline-block mr-[10%] cursor-pointer" />
                        <img src={fori} alt="fori" className="w-[16px] h-[16px] inline-block mr-[10%] cursor-pointer" />
                        <p style={TitleOfTaskStyle} className="cursor-pointer mr-[10%]"> آبان۶</p>
                        <Avatars profiles={profiles} size={30}/>
                        <p style={TitleOfTaskStyle} className="cursor-pointer mr-2">این یک تیتر برای این تسک است</p>
                        <img src={pinkBox} alt="pinkBox" className="w-[16px] h-[16px] inline-block  cursor-pointer" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default List;
