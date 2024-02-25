import React, { useState } from 'react';
import moment, { Moment } from 'jalali-moment';
import right from'../../assets/icons/arrowUp.png';
import left from'../../assets/icons/arrowDown.png';


const Calendar: React.FC = () => {
  const currentDate = moment();
  moment.locale('fa');

  const [currentMonth, setCurrentMonth] = useState<Moment>(currentDate.clone().startOf('jMonth'));

  const firstDayOfMonth = currentMonth.clone().startOf('jMonth');

// Days from previous month
  let daysFromPrevMonth = firstDayOfMonth.day(); 
  if (daysFromPrevMonth === 6) {
    daysFromPrevMonth = 0;
  } else {
    daysFromPrevMonth += 1;
  }

  // grid items
  const daysArray: Moment[] = [];

  // days from the previous month
  const lastDayOfPrevMonth = firstDayOfMonth.clone().subtract(daysFromPrevMonth, 'd');
  for (let i = 0; i < daysFromPrevMonth; i++) {
    daysArray.push(lastDayOfPrevMonth.clone().add(i, 'd'));
  }

  //days of the current month
  const daysInMonth = currentMonth.daysInMonth();
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(firstDayOfMonth.clone().add(i - 1, 'd'));
  }
//GRID
  const cellSize = '150px';

  return (
    <div style={{ direction: 'rtl'}}>
      
      <div>
        <div style={{marginRight:'20px'}}>
          <button onClick={() => setCurrentMonth(currentMonth.clone().subtract(1, 'jMonth'))}>
            <img src={right} style={{ transform: 'rotate(90deg)' ,marginLeft:'15px' }} alt="prev" />
          </button>
          <button onClick={() => setCurrentMonth(currentMonth.clone().add(1, 'jMonth'))}>
            <img src={left} style={{ transform: 'rotate(90deg)',marginLeft:'10px' }} alt="next" />
          </button>
          <span style={{direction:'rtl',marginLeft:'10px'}}> {currentMonth.toDate().toLocaleString('fa', {month: 'long' })} {currentMonth.toDate().toLocaleString('fa', {year:'numeric' })}</span>
        </div>

        <div style={{display:'block',
                     width:'1050px',
                     height:'1px',
                     background:'#aaaaaa',
                     marginTop:'20px',
                     marginBottom:'20px',
                     }}></div>


      </div>
      <div style={{ display: 'grid',
                     gridTemplateColumns: `repeat(7, ${cellSize})`,
                     }}>

        {/* days of the month */}
        {daysArray.map((day, index) => (
          <div
            key={index}
            style={{
              border: '0.5px solid #aaaaaa',
              color: day.jMonth() === currentMonth.jMonth() ? 'black' : 'lightgray',
              width: cellSize,
              height: cellSize,
              position: 'relative',
              outline:'0.5px solid #aaaaaa',
              ...(day.isSame(moment(), 'day') && { borderTop: '1px solid #208d8e', borderRight: '1px solid #208d8e', borderBottom: '1px solid #208d8e', borderLeft: '1px solid #208d8e' })}}
          >
             {/* Render day names only for the first row */}
            {index < 7 && ( 
              <div style={{ textAlign: 'center' }}>
                <div style={{ padding: '5px' }}>
                  <p style={{
                    color: 'black',
                    position: 'absolute',
                    top: '5px',
                    right: '10px',
                    margin: 0, 
                  }}>
                    {/* Render day names */}
                    {moment.weekdaysShort(true)[(index)]} 
                    
                  </p>
                </div>
              </div>
            )}
            <p style={{
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              margin: 0,
            }}>{day.toDate().toLocaleString('fa', { day: 'numeric' })}</p>
          </div>
        ))}
      </div>
    </div>
  );
};




export default Calendar;
