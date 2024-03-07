import React from 'react'
import Form from '../common/form/Index'
import editColumn from '../../Components/assets/icons/MoreColumn/editColumn.png';
import addIcon from '../../Components/assets/icons/MoreColumn/add.png';
import archiveIcon from '../../Components/assets/icons/MoreColumn/archive.png';
import deleteIcon from '../../Components/assets/icons/MoreColumn/delete.png';

function MoreColumn() {

    const FormStyle = {
        width: "166px",
        height: "152px",
        padding:"0px",
        paddingBottom:"15px"
    }

    const itemsStyle = {
        fontWeight:400,
        fontSize:"14px"
    }
  return (
    <div>
        <Form style={FormStyle}>
            <div className='w-[142px] h-[128px] flex flex-col justify-between items-center mt-[20px]'>
                <div className='w-[142px] h-[20px] flex justify-end items-center cursor-pointer'>
                    <h1 style={itemsStyle} className='mr-[5px]'>ویرایش نام ستون</h1>
                    <img src={editColumn} alt="editColumn" />
                </div>
                <div className='w-[142px] h-[20px] flex justify-end items-center cursor-pointer'>
                    <h1 style={itemsStyle} className='mr-[5px]'>افزودن تسک</h1>
                    <img src={addIcon} alt="addIcon" />
                </div>
                <div className='w-[142px] h-[20px] flex justify-end items-center cursor-pointer'>
                    <h1 style={itemsStyle} className='mr-[5px]'>آرشیو تمام تسک‌ها</h1>
                    <img src={archiveIcon} alt="archiveIcon" />
                </div>
                <div className='w-[142px] h-[20px] flex justify-end items-center cursor-pointer'>
                    <h1 style={itemsStyle} className='mr-[5px]'>حذف ستون</h1>
                    <img src={deleteIcon} alt="deleteIcon" />
                </div>

            </div>

        </Form>
    </div>
  )
}

export default MoreColumn