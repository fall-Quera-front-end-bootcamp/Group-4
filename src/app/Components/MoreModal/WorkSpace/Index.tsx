import React, { useState } from 'react';
import Modal from 'react-modal';
import AddIcon from '../../assets/icons/MoreColumn/add.png';
import EditNameIcon from '../../assets/icons/MoreColumn/editColumn.png';
import EditColorIcon from '../../assets/icons/MoreColumn/editColor.png';
import CopyLinkIcon from '../../assets/icons/MoreColumn/CopyLink.png';
import DeleteIcon from '../../assets/icons/MoreColumn/deleteRedIcon.png';
import DynamicButton from '../../common/button';
import ShareIcon from '../../assets/icons/MoreColumn/ShareIcon.png';
import ShareWorkspace from '../../ShareWorkSpace';

const customStyles = {
    content: {
        width: '193px',
        height: '240px',
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
    fontSize: "14px",
    marginRight: "5px"
}

const MoreWorkSpaceModal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
    const [shareModalOpen, setShareModalOpen] = useState(false);

    const openShareModal = () => {
        setShareModalOpen(true);
    };

    const closeShareModal = () => {
        setShareModalOpen(false);
    };

    return (
        <Modal
            isOpen={true}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <div className='w-[169px] h-[140px] flex flex-col justify-between items-end mb-[20px]'>
                <button className='h-[20px] flex'>
                    <h1 style={ItemsStyle}>ساختن پروژه جدید</h1>
                    <img src={AddIcon} alt="AddIcon" />
                </button>
                <button className='h-[20px] flex'>
                    <h1 style={ItemsStyle}>ویرایش نام ورک‌اسپیس</h1>
                    <img src={EditNameIcon} alt="EditNameIcon" />
                </button>
                <button className='h-[20px] flex'>
                    <h1 style={ItemsStyle}>ویرایش رنگ</h1>
                    <img src={EditColorIcon} alt="EditColorIcon" />
                </button>
                <button className='h-[20px] flex'>
                    <h1 style={ItemsStyle}>کپی لینک</h1>
                    <img src={CopyLinkIcon} alt="CopyLinkIcon" />
                </button>
                <button className='h-[20px] flex'>
                    <h1 style={ItemsStyle}>حذف</h1>
                    <img src={DeleteIcon} alt="DeleteIcon" />
                </button>
            </div>
            <DynamicButton
                text='اشتراک گذاری'
                width={169}
                height={36}
                onClick={openShareModal}
                borderRadius={6}
                fontSize="12px"
                fontWeight={800}
                icon={ShareIcon}
            />
            <Modal
                isOpen={shareModalOpen}
                onRequestClose={closeShareModal}
                style={{
                    content: {
                        width: '550px',
                        height: '400px',
                        borderRadius: '8px',
                        border: 'none',
                        padding: '20px',
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                    }
                }}
            >
                <ShareWorkspace  closeModal={closeModal}/>
            </Modal>
        </Modal>
    );
};

export default MoreWorkSpaceModal;
