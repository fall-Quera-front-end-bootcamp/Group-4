import React from 'react'
import SideBar from '../Components/SideBar'
import Workspaces from '../Dashboard/HomePage/WorkspaceContainer/Workspaces';

function WorkSpacePage() {

    const openModal = () => {
      };

  return (
    <div>
        <SideBar openModal={openModal}/>
        <Workspaces/>
    </div>
  )
}

export default WorkSpacePage