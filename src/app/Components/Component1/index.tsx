import React from 'react';

function Component1() {

    const circleStyle = {
        background:"#FA5252",
        borderRadius:"10px"
    };

    const lastCircle = {
        background:"#FA5252",
        borderRadius:"8px"
    }

    return (
        <div className='w-[124px] h-[68px] flex items-center justify-between'>
            <div className='w-[20px] h-[20px] rounded-[8px]' style={lastCircle}></div>
            <div className='w-[24px] h-[24px]' style={circleStyle}></div>
            <div className='w-[28px] h-[28px] flex justify-center items-center' style={circleStyle}>
                <div className='w-[12px] h-[12px] bg-white rounded-[10px]'></div>
            </div>
            
            
        </div>
    );
}

export default Component1;
