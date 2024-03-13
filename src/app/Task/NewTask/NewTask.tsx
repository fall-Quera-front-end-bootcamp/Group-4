import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, { useState , useEffect , useRef} from 'react';
import { faTimes , faUserPlus ,faChain, faTags} from '@fortawesome/free-solid-svg-icons'
import { faFlag, faCalendar} from '@fortawesome/free-regular-svg-icons'
import DynamicButton from "../../Components/common/button";
import CustomFileInput from "../../Components/common/customInput/CustomInput";
import { selectWorkspaceId } from '../../../Features/workspaceSlice';
import { selectProjectId } from '../../../Features/projectSlice';
import { RootState } from "../../../utils/store";
import { useSelector } from "react-redux";
import { getProject } from '../../../services/project';
import CalendarModal from "../../Components/calendar/calendarmodal";
import Modal from 'react-modal';
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



    useEffect(() => {
        const fetchBoardAndTasks = async () => {
            try {

                const project = await getProject(workspaceId,projectId);
                setProjectName(project.name);

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
            setThumbnailFile(file);
        }
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };



    return (
        <Modal isOpen={true} onRequestClose={onClose} overlayClassName="custom-overlay" className="custom-modal">
              
            {/*--------------عنوان تسک----------*/}
            <div dir="rtl" style={containerStyle}
                 className="w-[1153px] h-[637px] items-center fixed top-[251px] left-[91px] rounded-[20px] p-[32px] gap-[40px]  shadow-md bg-white z-10">
                <div className="w-[1089px] h-[34px] flex justify-between ">
                    <div className="w-[148px] h-[34px] gap-[13px] flex items-center">

                        <div className="w-[16px] h-[16px] rounded-[2px] bg-[#d9d9d9]"></div>
                        <span
                            className="w-[119px] h-[34px] font-medium text-[24px] leading-[33.82px] text-right text-[#1e1e1e] ">عنوان تسک</span>
                    </div >
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
                            className=" font-medium text-[16px] leading-[22.55px] text-right text-[#1e1e1e]">برای</span>
                    </div>
                    <div
                        className="w-[34px] h-[34px] rounded-[106.25px] border-[1.06px] border-dashed p-[4.25px] gap-[10.63px]">
                        <span className="text-[#c1c1c1] w-[20px] h-[20px] text-center cursor-pointer "><FontAwesomeIcon
                            icon={faUserPlus}/></span>
                    </div>
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
                    <button onClick={() => attachmentInputRef.current?.click()} className="w-[112px] h-[32px] rounded-[4px] border-2 pt-[4px] pr-[8px] pb-[4px] pl-[8px] gap-[4px] border-[#208d8e]">
                    <input
                        ref={attachmentInputRef}
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleAttachmentInputChange}
                    />
                        <span className="text-[#208D8E] ml-2"><FontAwesomeIcon icon={faChain} /></span>آپلود فایل
                    </button>
                </div>
                {/*----------------------افزودن کاور-----------------------------*/}
                <div className="w-[1089px] h-[32px] gap-[16px] flex mt-8">
                    <span className="w-[102px] h-[23px] font-medium text-[16px] leading-[22.55px] text-right">افزودن کاور</span>
                    <button onClick={() => thumbnailInputRef.current?.click()} className="w-[112px] h-[32px] rounded-[4px] border-2 pt-[4px] pr-[8px] pb-[4px] pl-[8px] gap-[4px] border-[#208d8e]">
                    <span className="text-[#208D8E] ml-2"><FontAwesomeIcon icon={faChain} /></span>آپلود فایل

                    </button>
                <input
                        ref={thumbnailInputRef}
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleThumbnailInputChange}
                    />
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
                        <DynamicButton text="ساختن تسک" width={125} height={32} padding={4}/>
                    </div>
                </div>


            </div>
        
        </Modal>
    )


}

export default NewTask;


