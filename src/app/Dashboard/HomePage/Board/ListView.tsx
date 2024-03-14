import React from 'react'
import List from '../../../Components/List'
import ModalOfCalendar from '../../../Components/calendar/ModalOfCalendar';
import TaskInformation from '../../../Task/TaskInformation/TaskInformation';
function ListView() {
  return (
    <div>
        <List/>
        <TaskInformation/>
    </div>
  )
}

export default ListView