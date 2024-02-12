import { Outlet } from 'react-router-dom';
import './style.css';
interface Iprops extends React.PropsWithChildren{}


const LayoutAuth : React.FC<Iprops> = ({ children }) : JSX.Element => {

return(
    <>
        <div className='layout-header'>
        
        <div className='layout-footer'>
        
        </div>{<Outlet/>}</div>

    </>
)

}

export default LayoutAuth;