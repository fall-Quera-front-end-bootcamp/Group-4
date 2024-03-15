
import React, { useState } from 'react';
import Modal from 'react-modal';
import DeleteIcon from '../../../Components/assets/icons/Delete.png';
import DynamicInput from '../../../Components/common/input';
import DynamicButton from '../../../Components/common/button';
import BackIcon from '../../../../../Components/assets/icons/BackIcon.png'
import { selectWorkspaceId } from '../../../../Features/workspaceSlice';
import { selectProjectId } from '../../../../Features/projectSlice';
import { RootState } from "../../../../utils/store";
import { useSelector } from "react-redux";
import { deleteWorkspace} from '../../../../services/workspace';
import { deleteProject } from '../../../../services/project';


interface DeleteProjectProps {
    onCloseModal: () => void;
  }
function DeleteProject({ onCloseModal }: DeleteProjectProps) {
    const workspaceId = useSelector((state: RootState) => selectWorkspaceId(state));
    const projectId = useSelector((state: RootState) => selectProjectId(state));
    const [isOpen, setIsOpen] = useState(true);
    
    
      const closeModal = () => {
        setIsOpen(false);
        onCloseModal();
      };

      const HeaderStyles = {
        fontWeight:800,
        fontSize:"24px"
      };
    

      const handleDeleteProject = async () => {
        try {
          await deleteProject(workspaceId ,projectId );
          closeModal();
          window.location.reload();
        } catch (error) {
          console.error('Error creating board:', error);
        }
      };



  return (
    <div>
    <Modal isOpen={isOpen} onRequestClose={closeModal}
      
      style={{
          content: {
            width:'500px',
            height:'268px',
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            borderRadius: '8px'
          }
        }}
      >
      <div className='w-[452px] h-[140px]'>
      <div className='flex w-[452px] h-[32px] justify-end items-center'>
              <h3 className='pr-[85px]' style={HeaderStyles}>آیا مایل به حذف پروژه هستید ؟</h3>
              <img src={DeleteIcon} alt="DeleteIcon" className='w-[24px] h-[24px] cursor-pointer' onClick={onCloseModal}/>
            </div>
           <div className='flex flex-col h-[190px] justify-between'>
                  <div className='w-[415px] h-[68px] flex flex-col justify-center items-end pt-[70px] ml-[20px]'>

                  </div>
                  <DynamicButton
                      text='بله'
                      width={415}
                      height={40}
                      borderRadius={6}
                      fontWeight={800}
                      fontSize='14px'
                      onClick={handleDeleteProject}
                      style={{marginLeft:"20px"}}
                   />
           </div>
        </div>
      </Modal>
    </div>
  );
}



export default DeleteProject;