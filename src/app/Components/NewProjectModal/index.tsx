import React,  { useState } from 'react'
import Modal from 'react-modal';
import DeleteIcon from '../../Components/assets/icons/Delete.png';
import DynamicInput from '../common/input';
import DynamicButton from '../common/button';

function NewProjectModal() {
    const [isOpen, setIsOpen] = useState(true);
    const [workspaceName, setWorkspaceName] = useState<string>('');


    const HeaderStyles = {
        fontWeight:800,
        fontSize:"24px"
      };

      const handleNext = () => {
        console.log("hello")
      };

    const closeModal = () => {
        setIsOpen(false);
        // onCloseModal();
      };

      const handleWorkspaceNameChange = (newValue: string) => {
        setWorkspaceName(newValue);
        console.log(newValue);
      };

      const NameOfWorkSpaceStyle = {
        fontWeight:400,
        fontSize:"14px"
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
            <div className='flex w-[452px] h-[32px] justify-end items-center'>
              <h3 className='pr-[105px]' style={HeaderStyles}>ساختن پروژه جدید‌</h3>
              <img src={DeleteIcon} alt="DeleteIcon" className='w-[24px] h-[24px] cursor-pointer'/>
            </div>
            <div className='w-[415px] h-[68px] flex flex-col justify-center items-end pt-[70px] ml-[20px]'>
                      <label htmlFor="workspaceName" className='pb-[10px]' style={NameOfWorkSpaceStyle}>نام پروژه</label>
                      <DynamicInput
                      type='text'
                      width={415}
                      height={40}
                      value={workspaceName}
                      onChange={(newValue) => handleWorkspaceNameChange(newValue)}
                      />
            </div>
            <DynamicButton
                      text='ادامه'
                      width={415}
                      height={40}
                      borderRadius={6}
                      fontWeight={800}
                      fontSize='14px'
                      onClick={handleNext}
                      style={{marginLeft:"20px" , marginTop:"80px"}}
                   />

        </Modal>
    </div>
  )
}

export default NewProjectModal