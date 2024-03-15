import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'; 
import MoreIcon from '../../../assets/icons/MoreIcon.png'
import { useDispatch } from "react-redux";
import { setBoardId } from "../../../../../Features/boardSlice";

interface MoreIconDropdownProps {
  children: React.ReactNode; 
  boardId: number; 
}

const MoreIconDropdown: React.FC<MoreIconDropdownProps> = ({ children, boardId }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); 
  const open = Boolean(anchorEl); 

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    dispatch(setBoardId(boardId));
    
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const MoreButtonStyle = {
    borderRadius: "10px",
  };


  return (
    <div className="more-icon-dropdown">
      <Button onClick={handleClick} style={MoreButtonStyle}>
        <img src={MoreIcon} alt="MoreIcon" />
      </Button>
      <Menu
        id={`basic-menu-${boardId}`} 
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': `basic-button-${boardId}`, 
        }}
        style={{height:"260px", borderRadius:"20px"}}
      >
        {children}
      </Menu>
    </div>
  );
};

export default MoreIconDropdown;
