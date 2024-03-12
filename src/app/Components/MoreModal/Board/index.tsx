import React, { useState } from 'react';
import Modal from 'react-modal';
import AddIcon from '../../assets/icons/MoreColumn/add.png';
import EditNameIcon from '../../assets/icons/MoreColumn/editColumn.png';
import ArchiveIcon from '../../assets/icons/MoreColumn/archive.png';
import DeleteIcon from '../../assets/icons/MoreColumn/deleteRedIcon.png';



const customStyles = {
  content: {
    width: '166px',
    height: '152px',
    borderRadius: '8px',
    border: 'none', 
    padding: '20px', 
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ItemsStyle = {
    fontWeight: 400,
    fontSize:"14px",
    marginRight:"5px"
}



const MoreBoardModal: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
          <div className='flex flex-col justify-between items-end w-[142px] h-[113px]'>
            <button className='h-[20px] flex'>
                    <h1 style={ItemsStyle}>ویرایش نام ستون</h1>
                    <img src={EditNameIcon} alt="AddIcon" />
                </button>
                <button className='h-[20px] flex'>
                    <h1 style={ItemsStyle}>افزودن تسک</h1>
                    <img src={AddIcon} alt="EditNameIcon" />
                </button>
                <button className='h-[20px] flex'>
                    <h1 style={ItemsStyle}>آرشیو تمام تسک‌ها</h1>
                    <img src={ArchiveIcon} alt="CopyLinkIcon" />
                </button>
                <button className='h-[20px] flex'>
                    <h1 style={ItemsStyle}>حذف ستون</h1>
                    <img src={DeleteIcon} alt="DeleteIcon" />
                </button>
          </div>
      </Modal>
    </div>
  );
};

// <h2>Modal Content</h2>
// <p>This is where your modal content goes.</p>
// <button onClick={closeModal}>Close Modal</button>

export default MoreBoardModal;


