import React from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicButton from "../../../src/components/common/button" ;
import { Link } from 'react-router-dom';
interface Iprops extends React.PropsWithChildren{}
function Navbar (children : Iprops) : JSX.Element {

    const navigate = useNavigate();

    const handleLoginButtonClick = () => {
        navigate('/login');
      };

    return(

<div className='w-full h-[45px] top-[80px] left-[80px] container flex  justify-between absolute'>

<div className='w-[214px] h-[40px] gap-[7px] justify-center items-center flex'>


    <DynamicButton
        text="ورود"
        width={95}
        height={40}
        onClick={handleLoginButtonClick}
        bgColor="blue"
        textColor="white"
        fontWeight={800}
        fontSize="14px"
    />  
    <Link to="/register" className='font-medium text-[16px] leading-[22.55px] text-right text-black w-[134px] h-[23px] hover:text-gray-700'>ثبت نام نکرده ای؟</Link>

</div>

<div className=' w-[235px] h-[45px] font-extrabold leading-[45.09px] text-right text-[32px] bg-gradient-to-r from-[#118C80] to-[#4AB7D8] inline-block text-transparent bg-clip-text '>کوئرا تسک منیجر</div>
</div>
    )
}

export default Navbar;

