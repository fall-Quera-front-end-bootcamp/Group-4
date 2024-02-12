import './style.css';

interface Iprops extends React.PropsWithChildren{}

const LayoutAuth : React.FC<Iprops> = ({ children }) : JSX.Element => {

return(

    <div className='layout-header'>
      
    <div className='layout-footer'>
      
    </div>{children}</div>
)

}

export default LayoutAuth;