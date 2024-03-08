import React, { useState } from 'react';
import Modal from 'react-modal';

function CreateWorkspace() {
  const [step, setStep] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
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


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setStep(1); 
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleWorkspaceNameChange = (event: any) => {
    setWorkspaceName(event.target.value);
    console.log(event.target.value);
  };

  const handleColorSelect = (color:string) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}
        
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
        <div>
          <button
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              padding: '5px',
              cursor: 'pointer',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#666',
              fontSize: '20px'
            }}
            onClick={closeModal}
          >
            X
          </button>
          {step === 1 && (
            <div style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
            }}>
              <h3>ساختن ورکسپیس جدید</h3>
              <div >
                <label htmlFor="workspaceName" style={{marginLeft:'350px'}}>نام ورک اسپیسس</label>
                <input
                    type="text"
                    id="workspaceName"
                    name="workspaceName"
                    style={{width:'400px',marginLeft:'30px', border:'1px solid black'}}
                    value={workspaceName} 
                    onChange={handleWorkspaceNameChange} 
                />
              </div>
              <button onClick={handleNext}>Next</button>
            </div>
          )}
        {step === 2 && (
            <>
            <button 
            style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                padding: '5px',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                border: 'none',
                color: '#666',
                fontSize: '20px'
            }}
            onClick={handlePrev}>&lt;</button>
          <div style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
            <h3>انتخاب رنگ ورک‌اسپیس</h3>
            <button 
                style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    padding: '5px',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#666',
                    fontSize: '20px'
                }}
                onClick={handlePrev}>&lt;</button>
            <div dir='rtl' className='flex flex-row justify-center   '>
                <div className={`bg-${selectedColor} w-[70px] h-[70px] rounded-lg flex justify-center items-center`}><p className='text-white text-xl font-bold'>{workspaceName.split(' ').map((part: string) => part.charAt(0).toUpperCase()).join(' ').slice(0, 3)}</p></div>
                <div className="flex flex-wrap gap-2 m-3 w-[200px]">
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
            <button onClick={handleNext}>Next</button>
          </div>
          </>
        )}
          {step === 3 && (
          <div style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
          <h3>مرور اطلاعات</h3>
          <button 
              style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  padding: '5px',
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#666',
                  fontSize: '20px'
              }}
              onClick={handlePrev}>&lt;</button>
              
              <button onClick={() =>{}}>ساختن ورک اسپیس</button>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default CreateWorkspace;
