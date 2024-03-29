import React, { useState } from 'react';
import Modal from 'react-modal';
import DeleteIcon from '../../../Components/assets/icons/Delete.png';
import DynamicInput from '../../../Components/common/input';
import DynamicButton from '../../../Components/common/button';
import BackIcon from '../../../Components/assets/icons/BackIcon.png'
import Avatar from '../../../Components/common/avatar/avatar';
import { createWorkspace } from '../../../../services/workspace';

interface CreateWorkspaceProps {
  onCloseModal: () => void;
}
function CreateWorkspace({ onCloseModal }: CreateWorkspaceProps) {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [workspaceName, setWorkspaceName] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState('');

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

  // const openModal = () => {
  //   setModalIsOpen(true);
  // };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  //   setStep(1); 
  // };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleWorkspaceNameChange = (newValue: string) => {
    setWorkspaceName(newValue);
    console.log(newValue);
  };

  const handleColorSelect = (color:string) => {
    setSelectedColor(color);
  };

  const closeModal = () => {
    setIsOpen(false);
    onCloseModal();
  };


  const handleCreateWorkspace = async () => {
    try {
      await createWorkspace(workspaceName, selectedColor);
      closeModal();
      window.location.reload();
    } catch (error) {
      console.error('Error creating workspace:', error);
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
          {step === 1 && (
           <>
             <div className='flex w-[452px] h-[32px] justify-end items-center'>
              <h3 className='pr-[85px]' style={HeaderStyles}>ساختن ورکسپیس جدید</h3>
              <img src={DeleteIcon} alt="DeleteIcon" className='w-[24px] h-[24px] cursor-pointer' onClick={onCloseModal}/>
            </div>
           <div className='flex flex-col h-[190px] justify-between'>
                  <div className='w-[415px] h-[68px] flex flex-col justify-center items-end pt-[70px] ml-[20px]'>
                      <label htmlFor="workspaceName" className='pb-[10px]' style={NameOfWorkSpaceStyle}>نام ورک اسپیس</label>
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
                      style={{marginLeft:"20px"}}
                   />
           </div>
           </>
          )}
        {step === 2 && (
            <>
             <div className='flex w-[452px] h-[32px] justify-end items-center'>
                <img src={BackIcon} alt="BackIcon" className='w-[24px] h-[24px] cursor-pointer' onClick={handlePrev}/>
                <h3 className='pr-[85px] pl-[85px]' style={HeaderStyles}>انتخاب رنگ ورک‌اسپیس</h3>
                <img src={DeleteIcon} alt="DeleteIcon" className='w-[24px] h-[24px] cursor-pointer' onClick={onCloseModal}/>
            </div>
            <div dir='rtl' className='flex flex-row justify-start w-[453px] h-[150px] pt-[40px]'>
                <div className={`bg-${selectedColor} w-[70px] h-[70px] rounded-lg flex justify-center items-center`}><p className='text-white text-xl font-bold'>{workspaceName.split(' ').map((part: string) => part.charAt(0).toUpperCase()).join(' ').slice(0, 3)}</p></div>
                <div className="flex flex-col gap-2 mr-[15px] w-[293px] h-[94px]">
                  <h1 style={NameOfWorkSpaceStyle}>رنگ ورک‌اسپیس</h1>
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
                      text='ادامه'
                      width={415}
                      height={40}
                      borderRadius={6}
                      fontWeight={800}
                      fontSize='14px'
                      onClick={handleNext}
                      style={{marginLeft:"20px"}}
                   />
          </>
        )}
          {step === 3 && (
          <>
             <div className='flex w-[452px] h-[32px] justify-end items-center'>
                <img src={BackIcon} alt="BackIcon" className='w-[24px] h-[24px] cursor-pointer' onClick={handlePrev}/>
                <h3 className='pr-[140px] pl-[133px]' style={HeaderStyles}>مرور اطلاعات</h3>
                <img src={DeleteIcon} alt="DeleteIcon" className='w-[24px] h-[24px] cursor-pointer' onClick={onCloseModal}/>
            </div>
            <div className='border border-gray-200 rounded-lg ml-[5px] mt-[20px] mb-[20px] w-[445px] h-[110px] flex flex-col justify-between p-[10px]'>
              <div className='flex justify-between items-center cursor-pointer' onClick={() => setStep(1)}>
                <h1 style={InformationStyle}>{workspaceName}</h1>
                <h1 style={InformationStyle}>نام ورک‌اسپیس</h1>
              </div>
              <div className='flex justify-between items-center cursor-pointer' onClick={() => setStep(2)}>
                <div  
                  key={selectedColor}
                  className={`w-[20px] h-[20px] rounded-lg bg-${selectedColor} cursor-pointer ml-1`}></div>
                <h1 style={InformationStyle}>رنگ ورک‌اسپیس</h1>
              </div>
              <div className='flex justify-between items-center cursor-pointer'>
              <Avatar
                size={30}
                borderRadius="50%" 
                profile={{ name: "hojiii", color: "red" }} 
                index={0} 
                overlap={0} 
              />
                <h1 style={InformationStyle}>اعضا</h1>
              </div>
            </div>
            <DynamicButton
                      text='ساختن ورک‌اسپیس'
                      width={415}
                      height={40}
                      borderRadius={6}
                      fontWeight={800}
                      fontSize='14px'
                      onClick={handleCreateWorkspace}
                      style={{marginLeft:"20px"}}
                   />
          </>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default CreateWorkspace;
