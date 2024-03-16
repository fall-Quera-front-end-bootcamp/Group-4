import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, { useState , useEffect , useRef} from 'react';
import { faTimes , faUserPlus ,faChain, faTags} from '@fortawesome/free-solid-svg-icons'
import { faFlag, faCalendar} from '@fortawesome/free-regular-svg-icons'
import DynamicButton from "../../Components/common/button";
import moment, { Moment } from 'jalali-moment';
import CustomFileInput from "../../Components/common/customInput/CustomInput";
import { selectWorkspaceId } from '../../../Features/workspaceSlice';
import { selectProjectId } from '../../../Features/projectSlice';
import { RootState } from "../../../utils/store";
import { useSelector } from "react-redux";
import { getProject } from '../../../services/project';
import CalendarModal from "../../Components/calendar/calendarmodal";
import Modal from 'react-modal';
import { getBoards } from "../../../services/board";
import { createTask } from "../../../services/task";



import './newTask.css';
interface NewTaskProps {
    onClose: () => void; 
}

const containerStyle = {
    position: "absolute" as "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
};



function NewTask ({ onClose }: NewTaskProps) {
    const [taskDescription, setTaskDescription] = useState<string>('');
    const [projectName, setProjectName] = useState<string>('');
    const workspaceId = useSelector((state: RootState) => selectWorkspaceId(state));
    const projectId = useSelector((state: RootState) => selectProjectId(state));
    const [attachmentFile, setAttachmentFile] = useState<File | null>(null);
    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
    const attachmentInputRef = useRef<HTMLInputElement>(null);
    const thumbnailInputRef = useRef<HTMLInputElement>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
    const [boards, setBoards] = useState<any[]>([]); 
    const [selectedBoard, setSelectedBoard] = useState<string>(''); 
    const [taskName, setTaskName] = useState('');
    const [deadline, setDeadline] = useState<string | null>(null);




    useEffect(() => {
        const fetchBoardAndTasks = async () => {
            try {

                const project = await getProject(workspaceId,projectId);
                setProjectName(project.name);
                if (workspaceId && projectId) { 
                    getBoards(workspaceId, projectId)
                        .then((data) => {
                            setBoards(data); 
                        })
                        .catch((error) => {
                            console.error('Error fetching boards:', error);
                            console.log('errrrr',workspaceId,projectId);
                        });
                }
                

            } catch (error) {
                console.error('Error fetching project:', error);
            }
        };
        fetchBoardAndTasks();
    }, []);

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTaskDescription(event.target.value);
        console.log(taskDescription);
    };

    const handleAttachmentInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        event.stopPropagation();
        
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            setAttachmentFile(file);
        }
    };

    const handleThumbnailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        event.stopPropagation();
    
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setThumbnailFile(file); 
                setThumbnailPreview(reader.result as string); 
            };
            reader.readAsDataURL(file);
        }
    };
    
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };

      const handleEndDateChange = () => {
        const storedEndDate = localStorage.getItem('deadline');
        if (storedEndDate) {
            
            console.log('Stored endDate from new task:', storedEndDate);
            return storedEndDate; 
        }
        return null; 
    };
    


    const handleBoardChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedBoardId = event.target.value;
        setSelectedBoard(selectedBoardId);
        console.log(selectedBoardId);
    };

    const handleCreateTask = async () => {
        try {
            const currentDate = new Date().toISOString();
            const formData = new FormData();
            formData.append('name', taskName);
            formData.append('description', taskDescription);
            formData.append('deadline', deadline || ''); 
            formData.append('priority', '1');
            if (attachmentFile) {
                formData.append('attachment', attachmentFile);
            }
            if (thumbnailFile) {
                formData.append('thumbnail', thumbnailFile);
            }
            formData.append('order', '1');
            formData.append('members', '');
            formData.append('created_at', currentDate);
    
            await createTask(workspaceId, projectId, selectedBoard, formData);
            onClose();
            window.location.reload();
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    return (
        <Modal isOpen={true} onRequestClose={onClose} overlayClassName="custom-overlay" className="custom-modal">
              
            {/*--------------عنوان تسک----------*/}
            <div dir="rtl" style={containerStyle}
                 className="w-[1153px] h-[637px] items-center fixed top-[251px] left-[91px] rounded-[20px] p-[32px] gap-[40px]  shadow-md bg-white z-10">
                <div className="w-[1089px] h-[34px] flex justify-between ">
                <div className="w-[500px] h-[34px] gap-[13px] flex items-center">
                    <div className="w-[16px] h-[16px] rounded-[2px] bg-[#d9d9d9]"></div>
                    <input
                        type="text"
                        className="w-[500px] h-[34px] font-medium text-[24px] leading-[33.82px] text-right text-[#1e1e1e] outline-none border-none bg-transparent"
                        placeholder="عنوان تسک"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                </div>
                    <span className="w-[32px] h-[32px] text-[#bdbdbd] cursor-pointer" onClick={onClose}><FontAwesomeIcon icon={faTimes}/></span>
                </div>

                {/*------------------پروژه اول-----------*/}
                <div className="w-[1089px]  h-[34px] gap-[8px] mt-4 flex items-center ">
                    <div className="w-[14px] h-[23px]">
                        <span
                            className=" font-medium text-[16px] leading-[22.55px] text-right text-[#1e1e1e]">در</span>
                    </div>
                    <div
                        className=" w-[158px] h-[32px] rounded-[6px] border-2 pt-[5px] pr-[8px] pb-[4px] pl-[8px] gap-[10px] border-[#e9ebfo] bg-white">
                        <span className="w-[62px] h-[23px] font-medium text-[16px] leading-[22.55px] text-right">{projectName}</span>
                    </div>
                    <div className="w-[26px] h-[23px]">
                        <span
                            className=" font-medium text-[16px] leading-[22.55px] text-right text-[#1e1e1e]">تا  </span>
                    </div>
                    
                    
                        
                    {/* {deadline && handleEndDateChange()} */}
                    {/* {deadline && <span>{handleEndDateChange()}</span>} */}
                    {handleEndDateChange()}



                        
                    
                </div>
                
                <div className="w-[1089px] h-[32px] gap-[16px] flex mt-8">
                    <span className="w-[102px] h-[23px] font-medium text-[16px] leading-[22.55px] text-right">انتخاب برد</span>
                    <select onChange={handleBoardChange}>
                    <option value="" disabled hidden>انتخاب برد</option>
        {boards.map(board => (
            <option key={board.id} value={board.id}>{board.name}</option>
        ))}
                    </select>
                </div>
                {/*    ----------------توضیحات برای تسک--------------*/}
                <div className="mt-4">
                        <textarea
                            className="w-[1089px] h-[191px] rounded-[12px] border-2 border-[#e2e2e2] outline-0 inline-block"
                            placeholder="توضیحاتی برای این تسک بنویسید   " 
                            value={taskDescription}
                            onChange={handleDescriptionChange}
                        />
                </div>
                {/*-----------------------افزودن پیوست---------------------*/}
                <div className="w-[1089px] h-[32px] gap-[16px] flex mt-8">
                    <span className="w-[102px] h-[23px] font-medium text-[16px] leading-[22.55px] text-right">افزودن پیوست</span>
                    <div className="relative w-[112px] h-[32px] rounded-[4px] border-2 border-[#208d8e] overflow-hidden">
                    {/* Displaying the preview if there's any */}
                    {attachmentFile ? (
                        <img src={URL.createObjectURL(attachmentFile)} alt="Attachment Preview" className="w-full h-full object-cover" />
                        ) : (
                        <React.Fragment>
                            <input
                                ref={attachmentInputRef}
                                type="file"
                                style={{ position: 'absolute', zIndex: 9999, opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }}
                                onChange={handleAttachmentInputChange}
                            />
                            <button onClick={() => attachmentInputRef.current?.click()} className="w-full h-full flex items-center justify-center">
                                <span className="text-[#208D8E] ml-2"><FontAwesomeIcon icon={faChain} /></span>آپلود فایل
                            </button>
                        </React.Fragment>
                    )}
                    </div>
                </div>
                {/*----------------------افزودن کاور-----------------------------*/}
                <div className="w-[1089px] h-[32px] gap-[16px] flex mt-8">
                    <span className="w-[102px] h-[23px] font-medium text-[16px] leading-[22.55px] text-right">آپلود کاور</span>
                    <div className="relative w-[112px] h-[32px] rounded-[4px] border-2 border-[#208d8e] overflow-hidden">
                        {thumbnailPreview ? (
                            <img src={thumbnailPreview} alt="Thumbnail Preview" className="w-full h-full object-cover" />
                        ) : (
                            <React.Fragment>
                                <input
                                    ref={thumbnailInputRef}
                                    type="file"
                                    style={{ position: 'absolute', zIndex: 9999, opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }}
                                    onChange={handleThumbnailInputChange}
                                />
                                <button onClick={() => thumbnailInputRef.current?.click()} className="w-full h-full flex items-center justify-center">
                                    <span className="text-[#208D8E] ml-2"><FontAwesomeIcon icon={faChain} /></span>آپلود فایل
                                </button>
                            </React.Fragment>
                        )}
                    </div>
                </div>

            {/*----------------ساختن تسک------------*/}
                <div className="w-[1089px] h-[50px] flex flex-row justify-between items-center mt-8">
                    <div className="w-[198px] h-[50px] gap-[24px] flex">
                        <div className="cursor-pointer w-[50px] h-[50px] border-dashed border-[#c1c1c1] p-[6.67px] border-[1.39px] rounded-[138.89px] text-[#c1c1c1]"><span className="w-[29.41px]  h-[29.41px] items-center flex justify-center"><FontAwesomeIcon
                            icon={faFlag}/></span></div>
                        <button onClick={toggleModal}  className="cursor-pointer w-[50px] h-[50px] border-dashed border-[#c1c1c1] p-[6.67px] border-[1.39px] rounded-[138.89px] text-[#c1c1c1]">
                            <span className="w-[29.41px]  h-[29.41px] items-center flex justify-center">
                            <FontAwesomeIcon icon={faCalendar} />
                            </span>
                        </button>
                        <CalendarModal isOpen={isModalOpen} closeModal={toggleModal} />
                        <div
                            className="cursor-pointer w-[50px] h-[50px] border-dashed border-[#c1c1c1] p-[6.67px] border-[1.39px] rounded-[138.89px] text-[#c1c1c1]"><span className="w-[29.41px]  h-[29.41px] items-center flex justify-center"><FontAwesomeIcon icon={faTags}/></span></div>

                    </div>
                    <div className="w-[125px] h-[32px] ">
                        <DynamicButton text="ساختن تسک" width={125} height={32} padding={4} borderRadius={5} onClick={handleCreateTask} />
                    </div>
                </div>


            </div>
        
        </Modal>
    )


}

export default NewTask;







    // useEffect(() => {
    //     const storedEndDate = localStorage.getItem('deadline');
    //     if (storedEndDate && storedEndDate !== deadline) {
    //         console.log('Stored endDate from new task:', storedEndDate);
    //         setDeadline(storedEndDate); 
    //     }
    // }, [deadline]);

    // useEffect(() => {
    //     const storedEndDate = localStorage.getItem('deadline');
    //     if (storedEndDate) {
    //         console.log('Stored endDate from new task:', storedEndDate);
    //         setDeadline(storedEndDate); 
    //     }
    // }, [deadline]);



                    //     {/* {deadline && handleEndDateChange()} */}
                    // {/* {deadline && <span>{handleEndDateChange()}</span>} */}
                    // {deadline && handleEndDateChange()}

