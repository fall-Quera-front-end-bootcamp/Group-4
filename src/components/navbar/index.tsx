import React from 'react';

import DynamicButton from "../../../src/components/common/button" ;
interface Iprops extends React.PropsWithChildren{}
function Navbar (children : Iprops) : JSX.Element {

    return(
//container for navbar 
<div className='w-full h-[45px] top-[80px] left-[80px] container flex  justify-between absolute'>
{/* container for button and link */}
<div className='w-[214px] h-[40px] gap-[7px] justify-center items-center flex'>
{/* button for signin  */}

    <DynamicButton
        text="ورود"
        width={95}
        height={40}
        onClick={() => console.log("Button clicked")}
        bgColor="blue"
        textColor="white"
    />
<div className='font-medium text-[16px] leading-[22.55px] text-right text-black w-[134px] h-[23px]'>ثبت نام نکرده ای؟</div>
</div>
{/* quera task text  */}
<div className=' w-[235px] h-[45px] font-extrabold leading-[45.09px] text-right text-[32px] bg-gradient-to-r from-[#118C80] to-[#4AB7D8] inline-block text-transparent bg-clip-text '>کوئرا تسک منیجر</div>
</div>
    )
}

export default Navbar;

