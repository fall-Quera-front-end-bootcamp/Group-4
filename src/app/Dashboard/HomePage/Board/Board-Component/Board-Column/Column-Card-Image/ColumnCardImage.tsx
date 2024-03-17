import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faListAlt } from "@fortawesome/free-regular-svg-icons";
import jalaliMoment from 'jalali-moment';
import { useNavigate } from 'react-router-dom';
import { selectWorkspaceId } from '../../../../../../../Features/workspaceSlice';
import { selectProjectId } from '../../../../../../../Features/projectSlice';
import { RootState } from "../../../../../../../utils/store";
import { useSelector } from "react-redux";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getBoards } from '../../../../../../../services/board';
import { createTask } from '../../../../../../../services/task';
import { deleteTask } from '../../../../../../../services/task';
import { useDispatch } from "react-redux";
import { setWorkspaceId } from "../../../../../../../Features/workspaceSlice"
import { setProjectId } from "../../../../../../../Features/projectSlice";
import { setBoardId } from '../../../../../../../Features/boardSlice';
import DeleteIcon from '../../../../../../Components/assets/icons/MoreColumn/deleteRedIcon.png'



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
interface Board {
    id: number;
    name: string;
    order: number;
    tasks: string;
    tasks_count: string;
    is_archive: boolean;
    color: string;
}

interface ColumnCardImageProps {
    task: Task;
    projectName: string;
    boardId:number;
}

const ColumnCardImage: React.FC<ColumnCardImageProps> = ({ task , projectName , boardId}) => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const taskIid=task.id;
    const workspaceId = useSelector((state: RootState) => selectWorkspaceId(state));
    const projectId = useSelector((state: RootState) => selectProjectId(state));
    const Boardss=[];
    const [boards, setBoards] = useState<Board[]>([]);



    const pDeadline = jalaliMoment(task.deadline, 'YYYY-MM-DD').locale('fa').format('D MMMM');

    useEffect(() => {
        const fetchBoards = async () => {
            try {
                const fetchedBoards: Board[] = await getBoards(workspaceId, projectId);
                setBoards(fetchedBoards);
                console.log('Fetched boards:', fetchedBoards);
            } catch (error) {
                console.error('Error fetching boards:', error);
            }
        };
        fetchBoards();
    }, [workspaceId, projectId]);

    function getPreviousBoardId() {
        const index = boards.findIndex(board => board.id === boardId);
        console.log(index,"-------");
        if (index === -1 || index === 0) {
            return null;
        }
        return boards[index - 1].id;
    }

    function getNextBoardId() {
        const index = boards.findIndex(board => board.id === boardId);
        if (index === -1 || index === boards.length - 1) {
            return null;
        }
        return boards[index + 1].id;
    }

    const navigateLeft = async () => {
        try {
            const newTask = { ...task }; 
            const nextBoardId = getNextBoardId();
            await createTask(workspaceId, projectId, nextBoardId, newTask);
            await deleteTask(workspaceId, projectId, boardId , task.id);
            window.location.reload();
        } catch (error) {
            console.error('Error navigating left:', error);
        }
    };

    const navigateRight = async () => {

        try {
            const newTask = { ...task }; 
            const previousBoardId = getPreviousBoardId(); 
            await createTask(workspaceId, projectId, previousBoardId, newTask);
            await deleteTask(workspaceId, projectId,boardId, task.id);
            window.location.reload();
        } catch (error) {
            console.error('Error navigating right:', error);
        }
    };

    const handleDeleteClick = async () => {
        try {
            await deleteTask(workspaceId, projectId,boardId, task.id);
            window.location.reload();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div>
            <div className="w-[249px] rounded-[16px] p-[16px] gap-[16px] bg-white drop-shadow-md flex flex-col justify-center items-center mb-[10px] cursor-pointer ml-[10px]">
            {task.thumbnail && ( 
                    <div className="flex justify-center w-[218px] h-[134px] items-center mt-[10px] rounded-[20px]">
                        <img className="w-[218px] h-[134px] rounded-[4px]" src={`http://185.8.174.74:8000${task.thumbnail}`} alt="task'sImage" />
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
                <div dir="ltr">
                <div className="w-[240px] h-[24px] gap-[8px] flex-row flex mt-6 justify-between items-center">
                    <FontAwesomeIcon icon={faArrowLeft} onClick={navigateLeft} className='pl-[8px] pr-[8px] hover:bg-gray-200 rounded-full hover:p-2'/>
                    <img src={DeleteIcon} onClick={handleDeleteClick} alt="DeleteIcon" className='hover:bg-red-200 rounded-full  hover:p-2 pr-2 pl-2'/>
                    <FontAwesomeIcon icon={faArrowRight} onClick={navigateRight} className=' pr-[8px] pl-[8px] hover:bg-gray-200 rounded-full hover:p-2'/>
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
