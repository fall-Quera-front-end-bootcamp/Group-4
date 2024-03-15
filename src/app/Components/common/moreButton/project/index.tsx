import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'; 
import MoreIcon from '../../../assets/icons/MoreIcon.png'
import { useDispatch } from "react-redux";
import { setProjectId } from '../../../../../Features/projectSlice';

interface MoreProjectIconDropdownProps {
  children: React.ReactNode; 
  projectId: string; 
}

const MoreProjectIconDropdown: React.FC<MoreProjectIconDropdownProps> = ({ children, projectId }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); 
  const open = Boolean(anchorEl); 

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    dispatch(setProjectId(parseInt(projectId)));
    
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const MoreButtonStyle = {
    borderRadius: "10px"
  };

  return (
    <div className="more-icon-dropdown">
      <Button onClick={handleClick} style={MoreButtonStyle}>
        <img src={MoreIcon} alt="MoreIcon" />
      </Button>
      <Menu
        id={`basic-menu-${projectId}`} 
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': `basic-button-${projectId}`, 
        }}
        style={{height:"570px", borderRadius:"20px"}}
      >
        {children}
      </Menu>
    </div>
  );
};

export default MoreProjectIconDropdown;
