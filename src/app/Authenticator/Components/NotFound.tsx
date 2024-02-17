import DynamicButton from '../../Components/common/button';
import { useNavigate } from 'react-router-dom';
import Form from '../../Components/common/form/Index';


function NotFound (){

    const navigate = useNavigate();

    const handleLoginButtonClick = () => {
        navigate('/login');
      };

      const customStyle = {
        width: '640px',
        height: '429px',
        borderRadius:"20px"
      };

      const Oops = {
        fontWeight: 900,
        fontSize: "230px",  
        paddingTop:"100px",
        paddingBottom:"120px"     
      };

      const notFound = {
        fontWeight:900,
        fontSize:"20px",
        paddingBottom:"25px"
      }

    return(
        <Form style={customStyle}>
            <div className="w-full flex flex-col justify-center items-center">
                <h1 style={Oops} className='font-extrabold leading-[45.09px] text-right text-[32px] bg-gradient-to-r from-[#118C80] to-[#4AB7D8] inline-block text-transparent bg-clip-text '>Oops!</h1>
                <h2 style={notFound}>404 - PAGE NOT FOUND</h2>
                <DynamicButton
                text="صفحه اصلی"
                width={95}
                height={40}
                onClick={handleLoginButtonClick}
                bgColor="blue"
                textColor="white"
                fontWeight={800}
                fontSize="14px"
                />
            </div>
        </Form>
    );
};

export default NotFound;