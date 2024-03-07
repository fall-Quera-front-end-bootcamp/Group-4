import React from 'react';
import MoreColumn from '../../../../../../Components/MoreColumn';
import { useState } from 'react';

interface ColumnOpenProps {
    state: string;
    number: number;
    borderColor: string; 
}

const ColumnOpen: React.FC<ColumnOpenProps> = ({ state, number, borderColor }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    return (
        <div className={`flex-row-reverse flex justify-between h-[40px] gap-[80px] rounded-[16px] border-t-[2px] shadow border-[#FD7E14] bg-white pt-[8px] pr-[12px] pb-[8px] pl-[12px] overflow-x-auto`}>
            <div className="h-[24px] gap-[4px] items-center justify-center flex flex-row">
                <div className="bg-[#F4F4F4] rounded-[50px] w-[14px] h-[19px] flex justify-center items-center gap-[10px] pt-[2px] pr-[4px] pl-[4px]">
                    <span className="text-[#1E1E1E] w-[6px] h-[17px] font-medium text-[12px] leading-[16.91px] text-right">{number}</span>
                </div>
                <span className="font-medium text-[12px] leading-[16.91px] text-right text-[#1E1E1E]">{state}</span>
            </div>
            <div className="flex flex-row justify-center h-[24px] gap-[4px]">
                <span className="w-[24px] h-[24px] cursor-pointer">+</span>
                <span className="w-[20px] h-[20px] mb-4 cursor-pointer" onClick={toggleModal}>...</span>
            </div>
            {isModalOpen && <MoreColumn />}
        </div>
    );
}

export default ColumnOpen;
