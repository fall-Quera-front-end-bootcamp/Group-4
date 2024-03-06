import React from 'react'
import './index.css';
import { useState } from 'react';
import ArrowUp from '../assets/icons/arrowUp.png'
import ArrowDown from '../assets/icons/arrowDown.png'
import DynamicInput from '../common/input';
import DynamicButton from '../common/button';
import SearchIcon from "../assets/icons/SearchIcon.png"
import firstProject from '../assets/icons/firstProject.png'
import {Link} from "react-router-dom";
import WorkspaceModal from "../../Dashboard/HomePage/Board/Board-Component/WorkspaceModal";
function SideBar() {
    
    const [isOpen, setIsOpen] = useState(false);
    const [openProject, setOpenProject] = useState(false);
    const [openProjects, setOpenProjects] = useState(false);
    const [search, setSearch] = useState("");
    const [showWorkspaceModal,setShowWorkspaceModal]=useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleProject = () => {
        setOpenProject(!openProject);
    };

    const toggleProjects = () => {
        setOpenProjects(!openProjects);
    };

  
    const main = {
        width:"304px"
    };

    const WorkspacesTitle = {
        fontWeight: 800,
        fontSize: "16px"
    };

    const arrow = {
        width:"10px",
        height:"5px"
    }

    return (
        <div className="sidebar">
          <div className=" font-extrabold   text-[32px] bg-gradient-to-r from-[#118C80] to-[#4AB7D8] inline-block text-transparent bg-clip-text  pt-10 pb-10">
                 کوئرا تسک منیجر
          </div>
            <div>
            <div className="relative" style={main}>
                    <div className="flex items-center cursor-pointer  justify-between" onClick={toggleMenu}>
                        {isOpen ? (
                        <img src={ArrowUp} alt="Up Icon" className=" inline-block ml-2" style={arrow}/>
                        ) : (
                            <img src={ArrowDown} alt="Down Icon" className="w-6 h-6 inline-block ml-2" style={arrow}/>
                        )}
                        <div style={WorkspacesTitle}>ورک‌اسپیس‌ها</div>
                    </div>
                    {isOpen && (
                        <div className="absolute top-full left-0 mt-2 p-4 bg-white">
                            <DynamicInput
                                width={274}
                                height={40}
                                value={search}
                                onChange={(value) => setSearch(value)}
                                style={{ marginTop: "8px" }}
                                type={"text"}
                                icon={<img src={SearchIcon} alt="search icon" />}
                                backgroundColor="background: #F6F7F9" 
                                placeholder='جستجو کنید'
                             />
                             <div className='pt-4'>

                             <DynamicButton
                                text="ساختن اسپیس جدید"
                                width={274}
                                height={32}
                                onClick={() => setShowWorkspaceModal(!showWorkspaceModal )}
                                bgColor="#007bff"
                                fontSize="12px"
                                fontWeight={400}
                                />
                                 {showWorkspaceModal && (
                                     <WorkspaceModal/>

                                 )}



                                <div className='relative'>
                                <div className="flex items-center cursor-pointer justify-end pt-4" onClick={toggleProject}>
                                    <div>درس مدیریت پروژه</div>
                                    <img src={firstProject} alt="Up Icon" className="inline-block ml-2" style={{ width: "20px", height: "20px" }} />   
                                    
                                    </div>
                                    {openProject && (
                                        <div className='flex flex-col cursor-pointer items-end pt-4 pr-8'>
                                            <h1>پروژه اول</h1>
                                            <h1>پروژه دوم</h1>
                                            <h1>پروژه سوم</h1>
                                        </div>
                                    )}
                                 </div>
                             </div>
                        </div>

                    )}
            </div>
            <div>
            </div>
          </div>
        </div>
      );
};

export default SideBar