import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'; 
import MoreIcon from '../../assets/icons/MoreIcon.png'

interface MoreIconDropdownProps {
  children: React.ReactNode; 
  workspaceId: string; 
}

const MoreIconDropdown: React.FC<MoreIconDropdownProps> = ({ children, workspaceId }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); 
  const open = Boolean(anchorEl); 

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(workspaceId);
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
        id={`basic-menu-${workspaceId}`} 
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': `basic-button-${workspaceId}`, 
        }}
        style={{height:"570px", borderRadius:"20px"}}
      >
        {children}
      </Menu>
    </div>
  );
};

export default MoreIconDropdown;
