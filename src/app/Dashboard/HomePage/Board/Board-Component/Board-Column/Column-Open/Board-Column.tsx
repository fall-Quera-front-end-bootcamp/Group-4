import React from 'react';
// import MoreColumn from '../../../../../../Components/MoreModal';
import { useState } from 'react';
import MoreIconDropdown from '../../../../../../Components/common/moreButton/Board/index';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from "react-redux";
import AddIcon from '../../../../../../Components/assets/icons/MoreColumn/add.png';
import EditIcon from '../../../../../../Components/assets/icons/MoreColumn/editColumn.png';
import EditColor from '../../../../../../Components/assets/icons/MoreColumn/editColor.png';
import DeleteIcon from '../../../../../../Components/assets/icons/MoreColumn/deleteRedIcon.png';


interface ColumnOpenProps {
    state: string;
    number: number;
    borderColor: string;
    boardId: number; 
}

const ColumnOpen: React.FC<ColumnOpenProps> = ({ state, number, borderColor, boardId}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    


    return (
        <div className={`flex-row-reverse flex justify-between h-[40px] gap-[80px] rounded-[16px] border-t-[2px] shadow border-${borderColor} bg-white pt-[8px] pr-[12px] pb-[6px] pl-[12px] overflow-x-auto w-[249px] mb-[10px] ml-[10px]`}>
            <div className="h-[24px] gap-[4px] items-center justify-center flex flex-row">
                <div className="bg-[#F4F4F4] rounded-[50px] w-[14px] h-[19px] flex justify-center items-center gap-[10px] pt-[2px] pr-[4px] pl-[4px]">
                    <span className="text-[#1E1E1E] w-[6px] h-[17px] font-medium text-[12px] leading-[16.91px] text-right">{number}</span>
                </div>
                <span className="font-medium text-[12px] leading-[16.91px] text-right text-[#1E1E1E]">{state}</span>
            </div>
            <div className='w-[48px] h-[24px] flex justify-between items-center'>
                <button className='w-[24px] h-[24px] cursor-pointer'>+</button>
                <div className='w-[26px] h-[26px] mb-[7px]'>
                <MoreIconDropdown boardId={boardId}> 
                                                <MenuItem onClick={()=>{}}>
                                                    <div className='flex w-[169px] justify-end items-center'>
                                                        <h1 className='mr-[5px]'>افزودن تسک</h1>
                                                        <img src={AddIcon} alt="AddIcon" />
                                                    </div>
                                                </MenuItem>                                        
                                                <MenuItem onClick={()=>{}}>
                                                    <div className='flex w-[169px] justify-end items-center'>
                                                        <h1 className='mr-[5px]'>ویرایش نام ستون</h1>
                                                        <img src={EditIcon} alt="EditIcon" />
                                                    </div>
                                                </MenuItem>
                                                
                                                <MenuItem onClick={()=>{}}>
                                                    <div className='flex w-[169px] justify-end items-center'>
                                                        <h1 className='mr-[5px]'>ویرایش رنگ</h1>
                                                        <img src={EditColor} alt="EditColor" />
                                                    </div>
                                                </MenuItem>
                                                <MenuItem onClick={()=>{}}>
                                                    <div className='flex w-[169px] justify-end items-center mb-[10px]'>
                                                        <h1 className='mr-[5px]'>حذف</h1>
                                                        <img src={DeleteIcon} alt="DeleteIcon" />
                                                    </div>
                                                </MenuItem>
                                                <MenuItem onClick={()=>{}}>
                                                </MenuItem>
                                            </MoreIconDropdown>
                </div>

            </div>
            {/* {isModalOpen && <MoreColumn />} */}
        </div>
    );
}


export default ColumnOpen;
