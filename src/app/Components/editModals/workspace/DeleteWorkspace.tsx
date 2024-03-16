
import React, { useState } from 'react';
import Modal from 'react-modal';
import DeleteIcon from '../../../Components/assets/icons/Delete.png';
import DynamicInput from '../../../Components/common/input';
import DynamicButton from '../../../Components/common/button';
import BackIcon from '../../../../../Components/assets/icons/BackIcon.png'
import { selectWorkspaceId } from '../../../../Features/workspaceSlice';
import { RootState } from "../../../../utils/store";
import { useSelector } from "react-redux";
import { deleteWorkspace} from '../../../../services/workspace';



interface DeleteWorkspaceProps {
    onCloseModal: () => void;
  }
function DeleteWorkspace({ onCloseModal }: DeleteWorkspaceProps) {
    const workspaceId = useSelector((state: RootState) => selectWorkspaceId(state));
    const [isOpen, setIsOpen] = useState(true);
    
    
      const closeModal = () => {
        setIsOpen(false);
        onCloseModal();
      };

      const HeaderStyles = {
        fontWeight:800,
        fontSize:"24px"
      };
    

      const handleDeleteWorkspace = async () => {
        try {
          await deleteWorkspace(workspaceId );
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
              
              <img src={DeleteIcon} alt="DeleteIcon" className='w-[24px] h-[24px] cursor-pointer' onClick={onCloseModal}/>
          </div>
          <div className='flex flex-col h-[190px] justify-between'>
                  <div className='w-[415px] h-[68px] flex flex-col justify-center items-center pt-[70px] ml-[20px]'>
                  <h3 className=' pb-[10px]' style={HeaderStyles}>آیا مایل به حذف ورکسپیس هستید ؟</h3>
                  </div>
                  <DynamicButton
                      text='بله'
                      width={415}
                      height={40}
                      borderRadius={6}
                      fontWeight={800}
                      fontSize='14px'
                      onClick={handleDeleteWorkspace}
                      style={{marginLeft:"20px"}}
                   />
           </div>
        </div>
      </Modal>
    </div>
  );
}



export default DeleteWorkspace;