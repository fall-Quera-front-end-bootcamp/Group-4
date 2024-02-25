import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faListAlt } from "@fortawesome/free-regular-svg-icons";
import jalaliMoment from 'jalali-moment';

interface ColumnCardImageProps {
    id?: number; 
    imgSrc: string;
    projectName: string;
    title: string;
    deadline: string;
    state: string;
    tags: string[];
}

const ColumnCardImage: React.FC<ColumnCardImageProps> = ({ imgSrc, projectName, title, deadline, state ,tags}) => {
    const pDeadline = jalaliMoment(deadline, 'YYYY/MM/DD').locale('fa').format('D MMMM');

    return (
        <div>
            <div className="rounded-[16px] p-[16px] gap-[16px] bg-white drop-shadow-md">
                {imgSrc && ( 
                    <div className="flex justify-center w-[218px] h-[134px]">
                        <img className="rounded-[4px]" src={imgSrc} alt="" />
                    </div>
                )}
                <div dir="rtl" className="w-[238px] h-[43px] gap-[9px] flex flex-col mt-4">
                    <div className="min-w-[46px] h-[17px]">
                        <span className="font-medium text-[12px] leading-[16.91px] text-right text-[#534D60]">{projectName}</span>
                    </div>
                    <div dir="rtl" className="w-[218px] h-[17px] font-medium text-[12px] leading-[16.91px] text-right gap-[4px]">
                        <span className="font-normal text-sm leading-[16.91px text-right text-[#0E0E0E] h-[17px] w-[170px]">{title}</span>
                        <span className="mr-1"> <FontAwesomeIcon icon={faListAlt} /></span>
                    </div>
                </div>
                <div dir="rtl">
                    <div className="w-[78px] h-[17px] gap-[8px] mt-3">
                        <span className="text-[#FA5252] text-sm"><FontAwesomeIcon icon={faFlag} /></span>
                        <span className="mr-1 font-medium text-[12px] leading-[16.91px] text-right">{pDeadline}</span>
                    </div>
                </div>
                <div dir="rtl">
                <div className="w-[91px] h-[24px] gap-[8px] flex-row flex mt-6">
                    {tags.map((tag, index) => (
                        <div key={index} className={`text-[#228BE6] bg-[#D0EBFF] inline-block rounded-[14px] pr-[8px] pl-[8px] `}>
                            <span className="w-[25px] h-[17px] font-extrabold text-[12px] leading-[16.91px] text-right">{tag}</span>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
}

export default ColumnCardImage;
