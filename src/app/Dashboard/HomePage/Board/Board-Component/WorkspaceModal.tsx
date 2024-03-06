import WorkspaceOne from "./Workspace-Slides-Group-3/Workspace-One";
import React, {useState} from "react";
import WorkspaceTwo from "./Workspace-Slides-Group-3/Workspace-Two";
import WorkspaceThree from "./Workspace-Slides-Group-3/Workspace-Three";
import {Link, Route, Routes} from "react-router-dom";
import DynamicButton from "../../../../Components/common/button";
import ShareWorkspace from "./Board-Column/Column-More/New-Project/Share-Workspace/ShareWorkspace";
import ShareProject from "./Header-Board/Shahre-Project/ShareProject";

function WorkspaceModal ()  {

const [isOpen,setIsOpen] = useState(
  true)
    return (
        <div>
            { isOpen ? (<WorkspaceOne open={isOpen} setopen={setIsOpen}/> ):( <WorkspaceTwo openTwo={isOpen} setopenTwo={setIsOpen} />)  }
</div>
)
}

export default WorkspaceModal




