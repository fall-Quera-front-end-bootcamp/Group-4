import React from 'react'
import SideBar from '../Components/SideBar'
import Workspaces from '../Dashboard/HomePage/WorkspaceContainer/Workspaces';

function WorkSpacePage() {

  const handleLogout = () => {
//testtt
};

    const openModal = () => {
      };

  return (
    <div>
        <SideBar openModal={openModal} onLogout={handleLogout}/>
        <Workspaces/>
    </div>
  )
}

export default WorkSpacePage