import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'; 
import MoreIcon from '../../assets/icons/MoreIcon.png'

interface MoreIconDropdownProps {
  children: React.ReactNode; // Content to be displayed in the dropdown
}

const MoreIconDropdown: React.FC<MoreIconDropdownProps> = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Anchor element for the menu
  const open = Boolean(anchorEl); // Track open state based on anchorEl

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="more-icon-dropdown">
      <Button onClick={handleClick}>

        <img src={MoreIcon} alt="MoreIcon" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button', 
        }}
      >
        {children}
      </Menu>
    </div>
  );
};

export default MoreIconDropdown;
