import React from 'react'
import Form from '../common/form/Index'
function Permission() {
    
    const itemsStyle = {
        width: "252px",
        height: "398px",
        justifyContent: "space-between",
      };

    const customStyle = {
        width: "252px",
        height: "398px",
        borderRadius: "8px",
        padding:"0px"
      };


      const h1style = {
        fontWeight:800,
        fontSize:"12px"
      };

      const pStyle = {
        fontWeight:400,
        fontSize:"12px"
      };

      const itemBorderStyle = {
        borderBottom: "1px solid #ccc", 
        paddingBottom: "16px", 
    };

  return (
    <Form style={customStyle}>
        <div className='flex flex-col ' style={itemsStyle}>
            <div className='flex flex-col cursor-pointer items-end pt-5 pl-5 pr-5 border-b-3' style={itemBorderStyle} >
              <h1 style={h1style}>دسترسی کامل</h1>
              <p className="text-right" style={pStyle}>توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه</p>
            </div>
            <div className='flex flex-col cursor-pointer items-end pl-5 pr-5 border-b-3' style={itemBorderStyle}>
              <h1 style={h1style}>دسترسی ویرایش</h1>
              <p className="text-right" style={pStyle}>توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند پروژه را حذف یا تسک جدید بسازد.</p>
            </div>
            <div className='flex flex-col cursor-pointer items-end pl-5 pr-5' style={itemBorderStyle}>
              <h1 style={h1style}>دسترسی کامنت</h1>
              <p className="text-right" style={pStyle}>توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما توانایی ویرایش تنظیمات پروژه را ندارد.</p>
            </div>
            <div className='flex flex-col cursor-pointer items-end pb-5 pl-5 pr-5'>
              <h1 style={h1style}>فقط دسترسی مشاهده</h1>
              <p className="text-right" style={pStyle}>توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد.</p>
            </div>
        </div>
    </Form>
  )
}

export default Permission