import React from 'react'
import Form from '../common/form/Index'
import Fori from '../assets/icons/PriorityIcons/fori.png'
import bala from '../assets/icons/PriorityIcons/bala.png'
import motevaset from '../assets/icons/PriorityIcons/motevaset.png'
import pain from '../assets/icons/PriorityIcons/pain.png'
import delet from '../assets/icons/PriorityIcons/delet.png'

function Priority() {

    const customStyle = {
        width: "166px",
        height: "188px",
        borderRadius: "8px",
        paddingTop:"8px"
      };

      const itemsStyle = {
        width: "142px",
        height: "128px",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingTop:"8px"
      };

      const lastItemStyle = {
        width:"142",
        height:"20px",
        justifyContent: "end",
        alignItems: "flex-start",
        paddingTop:"15px"

      }

  return (
    <Form style={customStyle}>
        <div className='flex flex-col '>
            <div className='flex flex-col' style={itemsStyle} >
                <div className='flex cursor-pointer'>
                    <h1>فوری</h1>
                    <img src={Fori} alt="fori" />
                </div>
                <div className='flex cursor-pointer'>
                    <h1>بالا</h1>
                    <img src={bala} alt="bala" />
                </div>
                <div className='flex cursor-pointer'>
                    <h1>متوسط</h1>
                    <img src={motevaset} alt="motevaset" />
                </div>
                <div className='flex cursor-pointer'>
                    <h1>پایین</h1>
                    <img src={pain} alt="pain" />
                </div>
            </div>
            <div className='flex cursor-pointer' style={lastItemStyle}>
                <h1>حذف اولویت</h1>
                <img src={delet} alt="motevaset" />
            </div>

        </div>
    </Form>
  )
}

export default Priority