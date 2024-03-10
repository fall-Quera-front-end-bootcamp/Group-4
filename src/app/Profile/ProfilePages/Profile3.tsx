import React, { ChangeEvent,useState } from 'react';
import Avatar from '../../Components/common/avatar/avatar';
import DynamicInput from '../../Components/common/input';
import DynamicButton from '../../Components/common/button';

function Profile3() {

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

  const handleColorSelect = (color:string) => {
    setSelectedColor(color);
  };

  

  const headerStyle = {
    fontWeight: 700,
    fontSize: "31px"
  };

  const detailStyle = {
    fontWeight: 400,
    fontSize: "12px"
  };


  return (
    <div className='w-[354px] h-[252px] flex flex-col justify-start items-end'>
      <h1 style={headerStyle} className='mb-[30px]'>تنظیمات</h1>
      <div className='w-[354px] h-[176px] flex flex-col justify-start items-end'>
        <div className='w-[354] h-[56px] flex flex-col justify-between items-end'>
          <h1 style={detailStyle}>انتخاب تم</h1>
          <div className="flex flex-wrap gap-2 w-[428px] h-[28px] justify-end">
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
            {/* <button></button>  switchMode*/}
        </div>
        <DynamicButton
                      text='ثبت تغییرات'
                      width={354}
                      height={36}
                      borderRadius={6}
                      fontWeight={800}
                      fontSize='14px'
                      onClick={()=>{console.log("hojii")}}
                      style={{marginLeft:"20px" , marginTop:"80px"}}
                   />
      </div>
    </div>
  );
}

export default Profile3;
