import React, { useState } from 'react';
import moment, { Moment } from 'jalali-moment';
import Modal from 'react-modal';
import right from'../../assets/icons/arrowUp.png';
import left from'../../assets/icons/arrowDown.png';
import './index.css'
// Sidebar component
const Sidebar: React.FC = () => {
    const [currentDate] = useState<Moment>(moment());
  
    const tomorrow = currentDate.clone().add(1, 'day');
    const thisWeekendStart = currentDate.clone().endOf('week').subtract(0, 'day');
    const nextWeekStart = currentDate.clone().endOf('week').add(1, 'day');
    const nextWeekendStart = currentDate.clone().endOf('week').add(8, 'day');
    const twoWeeksLater = currentDate.clone().add(2, 'weeks');
    const fourWeeksLater = currentDate.clone().add(4, 'weeks');
    const twoHoursFromNow = moment().add(2, 'hours');
  
    return (
      <div  style={{ backgroundColor:'#F7F8F9',padding:'20px',height:"400px"}}>
        
        <ul className="flex flex-col space-y-4" style={{ listStyleType: 'none', padding: 0,width:'250px' }}>
          <li className="flex justify-between" style={{ marginBottom: '10px' }}><strong>امروز</strong> <span style={{color:'#868E96'}}>{currentDate.format('dddd')}</span></li>
          <li className="flex justify-between" style={{ marginBottom: '10px' }}><strong>کمی بعد</strong> <span style={{color:'#868E96'}}>{twoHoursFromNow.format('HH:mm')}</span></li>
          <li className="flex justify-between" style={{ marginBottom: '10px' }}><strong>فردا</strong> <span style={{color:'#868E96'}}>{tomorrow.format('dddd')}</span></li>
          <li className="flex justify-between" style={{ marginBottom: '10px' }}><strong>این آخر هفته</strong> <span style={{color:'#868E96'}}>{thisWeekendStart.format('dddd')}</span></li>
          <li className="flex justify-between" style={{ marginBottom: '10px' }}><strong>هفته ی آینده</strong> <span style={{color:'#868E96'}}>{nextWeekStart.format('dddd')}</span></li>
          <li className="flex justify-between" style={{ marginBottom: '10px' }}><strong>آخر هفته ی آینده</strong> <span style={{color:'#868E96'}}>{nextWeekendStart.format('jD jMMMM ')}</span></li>
          <li className="flex justify-between" style={{ marginBottom: '10px' }}><strong>دو هفته ی دیگر</strong> <span style={{color:'#868E96'}}>{twoWeeksLater.format('jD jMMMM')}</span></li>
          <li className="flex justify-between" style={{ marginBottom: '10px' }}><strong>۴هفته ی دیگر</strong> <span style={{color:'#868E96'}}>{fourWeeksLater.format('jD jMMMM')}</span></li>
        </ul>
      </div>
    );
  };
  
  const CalendarModal: React.FC<{ isOpen: boolean; closeModal: () => void }> = ({ isOpen, closeModal }) => {
    // Current date
    const currentDate = moment();
    moment.locale('fa');
  
    const [currentMonth, setCurrentMonth] = useState<Moment>(currentDate.clone().startOf('jMonth'));
    const [startDate, setStartDate] = useState<Moment | null>(null);
    const [endDate, setEndDate] = useState<Moment | null>(null);
  
    const weekdays = moment.weekdaysShort(true);
  
    // days from previous month
    const firstDayOfMonth = currentMonth.clone().startOf('jMonth');
    let daysFromPrevMonth = firstDayOfMonth.day(); 
    if (daysFromPrevMonth === 6) {
      daysFromPrevMonth = 0;
    } else {
      daysFromPrevMonth += 1;
    }
  
    const daysArray: Moment[] = [];
    const lastDayOfPrevMonth = firstDayOfMonth.clone().subtract(daysFromPrevMonth, 'd');
    for (let i = 0; i < daysFromPrevMonth; i++) {
      daysArray.push(lastDayOfPrevMonth.clone().add(i, 'd'));
    }
    const daysInMonth = currentMonth.daysInMonth();
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(firstDayOfMonth.clone().add(i - 1, 'd'));
    }
  
    const cellSize = '80px';
  
    const handleDateClick = (day: Moment) => {
      if (!startDate) {
        setStartDate(day);
      } else if (!endDate) {
        if (day.isAfter(startDate, 'day')) {
          setEndDate(day);
        } else {
          setEndDate(startDate);
          setStartDate(day);
        }
      } else {
        setStartDate(day);
        setEndDate(null);
      }
    };
  
    const isWithinRange = (day: Moment) => {
      if (startDate && endDate) {
        return day.isAfter(startDate, 'day') && day.isBefore(endDate, 'day');
      }
      return false;
    };
  
    const isStartDate = (day: Moment) => {
      return startDate && day.isSame(startDate, 'day');
    };
  
    const isEndDate = (day: Moment) => {
      return endDate && day.isSame(endDate, 'day');
    };
  
    return (
      <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      // style={{
      //     content: {
      //         top: '50%',
      //         left: '50%',
      //         right: 'auto',
      //         bottom: 'auto',
      //         marginRight: '-50%',
      //         transform: 'translate(-50%, -50%)',
      //         width: '936px', 
      //         maxHeight: '65vh', 
      //         overflow: 'hidden', 
      //         padding: 0, 
      //         margin: 0, 
      //         zIndex:6000,
      //     }
      // }}
      overlayClassName="custom-overlay" className="custom-modal"
      >
          <div style={{ width:'936px',height:'632px',background:"white", borderRadius:"15px"}} >
              <header style={{direction:'rtl', display:'flex', justifyContent:"flex-start",alignItems:'center', height:'100px'}} className='border-b border-solid border-gray'>
                  <p style={{width:'430px', margin:'20px',fontSize:'24px'}}>زمان شروع <span style={{marginRight:'10px' ,color:'#208D8E'}}>{startDate? startDate.format('jD jMMMM '):''}</span></p>
                  <p style={{width:'430px', margin:'20px',fontSize:'24px'}}>زمان پایان<span style={{marginRight:'10px', color:'#208D8E'}}>{endDate?endDate.format('jD jMMMM '):''}</span></p>
              </header>
              <div style={{ direction: 'rtl', display: 'flex', width:'936px',height:'632px' }}>
                <Sidebar />
                <div style={{padding:'20px'}}>
                  {/* < > buttons */}
                  <div style={{ marginRight: '20px' }}>
                    <span style={{ direction: 'rtl', marginLeft: '10px' }}> {currentMonth.toDate().toLocaleString('fa', { month: 'long' })} {currentMonth.toDate().toLocaleString('fa', { year: 'numeric' })}</span>
                    <button onClick={() => setCurrentMonth(currentMonth.clone().subtract(1, 'jMonth'))}>
                      <img src={right} style={{ transform: 'rotate(90deg)', marginLeft: '15px' }} alt="prev" />
                    </button>
                    <button onClick={() => setCurrentMonth(currentMonth.clone().add(1, 'jMonth'))}>
                      <img src={left} style={{ transform: 'rotate(90deg)', marginLeft: '10px' }} alt="next" />
                    </button>
                  </div>
  
                  {/* Weekday names */}
                  <div style={{ display: 'grid', gridTemplateColumns: `repeat(7, ${cellSize})`,}}>
                    {weekdays.map((day, index) => (
                      <div
                        key={index}
                        style={{
                          color:'#868E96',
                          textAlign: 'center',
                          width: cellSize,
                          height: '40px',
                          padding: '5px',
                          position: 'relative'
                        }}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
  
                  {/* Calendar grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(7, ${cellSize})`,
                  }}>
                    {/* Days of month */}
                    {daysArray.map((day, index) => (
                      <div
                        key={index}
                        style={{
                            textAlign: 'center',
                            width: cellSize,
                            height: '60px',
                            position: 'relative',
                            cursor: 'pointer',
                            backgroundColor: isWithinRange(day) ? '#E3FDFB' : (isStartDate(day)||isEndDate(day)) ? '#4BECE2' : 'transparent',
                            borderRadius: isStartDate(day) ? '10px' : isEndDate(day) ? '10px' : day.isSame(currentDate, 'day') ? '20px' : '0',
                            border: day.isSame(currentDate, 'day') ? '2px solid #208D8E' : 'none' 
                          }}
                      
                        onClick={() => handleDateClick(day)}
                      >
                        {/*day number */}
                        <p style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          margin: 0,
                        }}>{day.toDate().toLocaleString('fa', { day: 'numeric' })}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </div>
          </Modal>
    );
  };
  
  export default CalendarModal;
  