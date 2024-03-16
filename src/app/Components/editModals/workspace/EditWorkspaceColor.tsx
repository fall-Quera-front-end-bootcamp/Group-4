
import React, { useState } from 'react';
import Modal from 'react-modal';
import DeleteIcon from '../../../Components/assets/icons/Delete.png';
import DynamicInput from '../../../Components/common/input';
import DynamicButton from '../../../Components/common/button';
import BackIcon from '../../../../../Components/assets/icons/BackIcon.png'
import { selectWorkspaceId } from '../../../../Features/workspaceSlice';
import { RootState } from "../../../../utils/store";
import { useSelector } from "react-redux";
import { editColorWorkspace } from '../../../../services/workspace';


interface EditWorkspaceColorProps {
    onCloseModal: () => void;
  }
function EditWorkspaceColor({ onCloseModal }: EditWorkspaceColorProps) {
    const workspaceId = useSelector((state: RootState) => selectWorkspaceId(state));
    const [isOpen, setIsOpen] = useState(true);
    const [selectedColor, setSelectedColor] = useState('');


    const handleColorSelect = (color:string) => {
        setSelectedColor(color);
      };
    
      const closeModal = () => {
        setIsOpen(false);
        onCloseModal();
      };
    
      const colors = [
        'cornflowerBlue',
        'ceruleanBlue',
        'skyBlue',
        'teal',
        'darkCyan',
        'limeGreen',
        'electricLime',
        'goldenYellow',
        'orange',
        'redOrange',
        'hotPink',
        'purple',
        'blueViolet',
        
      ];
    
      const HeaderStyles = {
        fontWeight:800,
        fontSize:"24px"
      };
    
      const NameOfWorkSpaceStyle = {
        fontWeight:400,
        fontSize:"14px"
      };
    
      const InformationStyle = {
        fontWeight:800,
        fontSize:"14px"
      }

      const handleEditWorkspaceColor = async () => {
        try {
          await editColorWorkspace(workspaceId , selectedColor);
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
                <h3 className='pr-[85px] pl-[85px]' style={HeaderStyles}>ویرایش رنگ ورکسپیس</h3>
                <img src={DeleteIcon} alt="DeleteIcon" className='w-[24px] h-[24px] cursor-pointer' onClick={onCloseModal}/>
            </div>
            <div dir='rtl' className='flex flex-row justify-start w-[453px] h-[150px] pt-[40px]'>
                <div className={`bg-${selectedColor} w-[70px] h-[70px] rounded-lg flex justify-center items-center`}></div>
                <div className="flex flex-col gap-2 mr-[15px] w-[293px] h-[94px]">
                  <h1 style={NameOfWorkSpaceStyle}>رنگ ورکسپیس</h1>
                  <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <div
                      key={color}
                      className={`w-[20px] h-[20px] rounded-lg bg-${color} cursor-pointer`}
                      onClick={() => handleColorSelect(color)}
                      style={{ transform: selectedColor === color ? 'scale(1.2)' : 'scale(1)' }}
                    >
                            {selectedColor === color && (
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '5px',
                                  right: '5px',
                                  width: '10px',
                                  height: '10px',
                                  borderRadius: '50%',
                                  backgroundColor: 'white',
                                }}
                              />
                            )}
                    {/* <div className='bg-blueViolet w-[20px] h-[20px]'/> */}
                    {/* <div className='bg-ceruleanBlue w-[20px] h-[20px]'/> */}
                    {/* <div className='bg-purple w-[20px] h-[20px]'/> */}
                    {/* <div className='bg-hotPink w-[20px] h-[20px]'/> */}
                    {/* <div className='bg-orange w-[20px] h-[20px]'/> */}
                    {/* <div className='bg-goldenYellow w-[20px] h-[20px]'/> */}
                    {/* <div className='bg-electricLime w-[20px] h-[20px]'/> */}
                    {/* <div className='bg-limeGreen w-[20px] h-[20px]'/> */}
                    {/* <div className='bg-darkCyan w-[20px] h-[20px]'/> */}
                    {/* <div className='bg-teal w-[20px] h-[20px]'/> */}
                    {/* <div className='bg-skyBlue w-[20px] h-[20px]'/> */}
                    {/* <div className='bg-cornflowerBlue w-[20px] h-[20px]'/> */}
                    {/* <div className='bg-redOrange w-[20px] h-[20px]'/> */}
                    {/* <div className='bg-ceruleanBlue w-[20px] h-[20px]'/> */}
                    </div>
                  ))}
                  </div>
                </div>
            </div>
            <DynamicButton
                      text='تغییر'
                      width={415}
                      height={40}
                      borderRadius={6}
                      fontWeight={800}
                      fontSize='14px'
                      onClick={handleEditWorkspaceColor}
                      style={{marginLeft:"20px"}}
                   />
        </div>
      </Modal>
    </div>
  );
}



export default EditWorkspaceColor;