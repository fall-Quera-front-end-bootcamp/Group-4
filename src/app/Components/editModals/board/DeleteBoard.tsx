
import React, { useState } from 'react';
import Modal from 'react-modal';
import DeleteIcon from '../../../Components/assets/icons/Delete.png';
import DynamicInput from '../../../Components/common/input';
import DynamicButton from '../../../Components/common/button';
import BackIcon from '../../../../../Components/assets/icons/BackIcon.png'
import { selectWorkspaceId } from '../../../../Features/workspaceSlice';
import { selectProjectId } from '../../../../Features/projectSlice';
import { selectBoardId } from '../../../../Features/boardSlice';
import { RootState } from "../../../../utils/store";
import { useSelector } from "react-redux";
import { deleteWorkspace} from '../../../../services/workspace';
import { deleteProject } from '../../../../services/project';
import { deleteBoard } from '../../../../services/board';
import { getBoard } from '../../../../services/board';


interface DeleteBoardProps {
    onCloseModal: () => void;
  }
function DeleteBoard({ onCloseModal }: DeleteBoardProps) {
    let boardName="";
    const workspaceId = useSelector((state: RootState) => selectWorkspaceId(state));
    const projectId = useSelector((state: RootState) => selectProjectId(state));
    const boardId = useSelector((state: RootState) => selectBoardId(state));
    const [isOpen, setIsOpen] = useState(true);
    
    
      const closeModal = () => {
        setIsOpen(false);
        onCloseModal();
      };

      const HeaderStyles = {
        fontWeight:800,
        fontSize:"24px"
      };
    
      const fetchBoardData = async () => {
        try {
          const boardData = await getBoard(workspaceId, projectId, boardId);
          boardName = boardData.name;
          console.log('Board Name:', boardName);
        } catch (error) {
          console.error('Error fetching board:', error);
        }
      };

      const handleDeleteBoard = async () => {
        try {
          await fetchBoardData();
          await deleteBoard(workspaceId ,projectId ,boardId,boardName);
          closeModal();
          window.location.reload();
        } catch (error) {
          console.error('Error deleting board:', error);
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
                  <h3 className='pb-[10px]' style={HeaderStyles}>آیا مایل به حذف ستون هستید ؟</h3>

                  </div>
                  <DynamicButton
                      text='بله'
                      width={415}
                      height={40}
                      borderRadius={6}
                      fontWeight={800}
                      fontSize='14px'
                      onClick={handleDeleteBoard}
                      style={{marginLeft:"20px"}}
                   />
           </div>
        </div>
      </Modal>
    </div>
  );
}



export default DeleteBoard;