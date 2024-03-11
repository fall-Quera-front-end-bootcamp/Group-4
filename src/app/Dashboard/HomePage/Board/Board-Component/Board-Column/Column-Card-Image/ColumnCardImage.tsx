import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faListAlt } from "@fortawesome/free-regular-svg-icons";
import jalaliMoment from 'jalali-moment';
import { selectWorkspaceId } from '../../../../../../../Features/workspaceSlice';
import { selectProjectId } from '../../../../../../../Features/projectSlice';
import { RootState } from "../../../../../../../utils/store";
import { useSelector } from "react-redux";

interface Task {
    id: number;
    name: string;
    description: string;
    deadline: string;
    priority: number;
    attachment: string;
    thumbnail: string;
    order: number;
    members: string;
    created_at: string;
}

interface ColumnCardImageProps {
    task: Task;
    projectName: string;
}

const ColumnCardImage: React.FC<ColumnCardImageProps> = ({ task , projectName}) => {

    const workspaceId = useSelector((state: RootState) => selectWorkspaceId(state));
    const projectId = useSelector((state: RootState) => selectProjectId(state));

    const pDeadline = jalaliMoment(task.deadline, 'YYYY-MM-DD').locale('fa').format('D MMMM');

    return (
        <div>
            <div className="rounded-[16px] p-[16px] gap-[16px] bg-white drop-shadow-md flex flex-col justify-center items-center">
            {task.thumbnail && ( 
                    <div className="flex justify-center w-[218px] h-[134px]">
                        <img className="rounded-[4px]" src={`http://185.8.174.74:8000${task.thumbnail}`} alt="" />
                    </div>
                )}
                <div dir="rtl" className="w-[238px] h-[43px] gap-[9px] flex flex-col mt-4">
                    <div className="min-w-[46px] h-[17px]">
                        <span className="font-medium text-[12px] leading-[16.91px] text-right text-[#534D60]">{projectName}</span>
                    </div>
                    <div dir="rtl" className="w-[218px] h-[17px] font-medium text-[12px] leading-[16.91px] text-right gap-[4px]">
                        <span className="font-normal text-sm leading-[16.91px text-right text-[#0E0E0E] h-[17px] w-[170px]">{task.name}</span>
                        <span className="mr-1"> <FontAwesomeIcon icon={faListAlt} /></span>
                    </div>
                </div>
                <div dir="rtl">
                    <div className="w-[235px] h-[17px] gap-[8px] mt-3">
                        <span className="text-[#FA5252] text-sm"><FontAwesomeIcon icon={faFlag} /></span>
                        <span className="mr-1 font-medium text-[12px] leading-[16.91px] text-right">{pDeadline}</span>
                    </div>
                </div>
                <div dir="rtl">
                <div className="w-[240px] h-[24px] gap-[8px] flex-row flex mt-6">
                    {/* {tags.map((tag, index) => (
                        <div key={index} className={`text-[#228BE6] bg-[#D0EBFF] inline-block rounded-[14px] pr-[8px] pl-[8px]`}>
                            <span className="w-[25px] h-[17px] font-extrabold text-[12px] leading-[16.91px] text-right">{tag}</span>
                        </div>
                    ))} */}
                </div>
                </div>
            </div>
        </div>
    );
}

export default ColumnCardImage;
