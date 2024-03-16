
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
import { editNameWorkspace } from '../../../../services/workspace';
import { editProject } from '../../../../services/project';


interface EditProjectNameProps {
    onCloseModal: () => void;
  }
function EditProjectName({ onCloseModal }: EditProjectNameProps) {
    const workspaceId = useSelector((state: RootState) => selectWorkspaceId(state));
    const projectId = useSelector((state: RootState) => selectProjectId(state));
    const [isOpen, setIsOpen] = useState(true);
    const [projectName, setProjectName] = useState<string>('');
    
      const closeModal = () => {
        setIsOpen(false);
        onCloseModal();
      };

      const HeaderStyles = {
        fontWeight:800,
        fontSize:"24px"
      };
    
      const NameOfWorkSpaceStyle = {
        fontWeight:400,
        fontSize:"14px"
      };

      const handleEditProjectName = async () => {
        try {
          await editProject(workspaceId ,projectId, projectName);
          closeModal();
          window.location.reload();
        } catch (error) {
          console.error('Error changing project name:', error);
        }
      };
      const handleWorkspaceNameChange = (newValue: string) => {
        setProjectName(newValue);
        console.log(newValue);
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
              <h3 className='pr-[110px]' style={HeaderStyles}>ویرایش نام پروژه</h3>
              <img src={DeleteIcon} alt="DeleteIcon" className='w-[24px] h-[24px] cursor-pointer' onClick={onCloseModal}/>
            </div>
           <div className='flex flex-col h-[190px] justify-between'>
                  <div className='w-[415px] h-[68px] flex flex-col justify-center items-end pt-[70px] ml-[20px]'>
                      <label htmlFor="workspaceName" className='pb-[10px]' style={NameOfWorkSpaceStyle}>نام پروژه</label>
                      <DynamicInput
                      type='text'
                      width={415}
                      height={40}
                      value={projectName}
                      onChange={(newValue) => handleWorkspaceNameChange(newValue)}
                      />
                  </div>
                  <DynamicButton
                      text='تغییر'
                      width={415}
                      height={40}
                      borderRadius={6}
                      fontWeight={800}
                      fontSize='14px'
                      onClick={handleEditProjectName}
                      style={{marginLeft:"20px"}}
                   />
           </div>
        </div>
      </Modal>
    </div>
  );
}



export default EditProjectName;