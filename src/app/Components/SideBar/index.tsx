import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import DynamicInput from '../common/input';
import DynamicButton from '../common/button';
import SearchIcon from "../assets/icons/SearchIcon.png"
import firstProject from '../assets/icons/firstProject.png'
import ArrowUp from '../assets/icons/arrowUp.png'
import ArrowDown from '../assets/icons/arrowDown.png'
import CreateWorkspace from '../../Dashboard/HomePage/WorkspaceContainer/CreateWorkspace';
import { getWorkspaces } from '../../../services/workspace';
import { getProjects } from '../../../services/project';
import Avatar from '../common/avatar/avatar';
import ExitIcon from '../../Components/assets/icons/ExitIcon.png';
import DarkModeSwitch from '../../Components/assets/icons/Dark Mode switch.png';
import { Link } from "react-router-dom";
import NewProjectModal from '../NewProjectModal/index';
import { useDispatch } from "react-redux";
import { setWorkspaceId } from "../../../Features/workspaceSlice"
import { setProjectId } from "../../../Features/projectSlice";
import MoreIcon from '../assets/icons/MoreIcon.png';
import MoreWorkSpaceModal from '../MoreModal/WorkSpace/Index';
import { fetchAccount } from '../../../services/account';

interface SidebarProps {
    openModal: () => void;
    onLogout?: () => void;
}

interface Project {
    id: string;
    name: string;
}

interface Workspace {
    id: string;
    name: string;
    color: string;
};

interface Profile {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string | null;
    thumbnail: string;
}

function SideBar({ openModal, onLogout }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [isWorkspaceModalOpen, setIsWorkspaceModalOpen] = useState(false);
    const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
    const [openProjects, setOpenProjects] = useState<{ [key: string]: Project[] }>({});
    const [selectedWorkspaces, setSelectedWorkspaces] = useState<string[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMoreModalOpen, setIsMoreModalOpen] = useState(false);
    const [profile, setProfile] = useState<Profile|null>(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = localStorage.getItem('userId');
    console.log('userrrr',user)


    useEffect(() => {
        const fetchWorkspaces = async () => {
            try {
                const workspacesData = await getWorkspaces();
                setWorkspaces(workspacesData);
                const profileData=await fetchAccount(user);
                setProfile(profileData);
                console.log(profileData);
            } catch (error) {
                console.error('Error fetching workspaces:', error);
            }
        };

        fetchWorkspaces();
    }, []);

    const handleProjectClick = (workspaceId: string, projectId: string) => {
        dispatch(setWorkspaceId(parseInt(workspaceId)));
        dispatch(setProjectId(parseInt(projectId)));
        console.log("Project ID:", projectId);
        console.log("Workspace ID:", workspaceId);
        navigate('/board/boardview');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleWorkspace = async (workspaceId: string) => {
        const isSelected = selectedWorkspaces.includes(workspaceId);
        setSelectedWorkspaces(prevSelected => isSelected ? prevSelected.filter(id => id !== workspaceId) : [...prevSelected, workspaceId]);
        if (!isSelected) {
            try {
                const projectsData = await getProjects(workspaceId);
                setOpenProjects({ ...openProjects, [workspaceId]: projectsData });
            } catch (error) {
                console.error(`Error fetching projects of workspace ${workspaceId}:`, error);
            }
        }
    };

    const openModalFunction = () => {
        setIsModalOpen(true);
    };

    const closeModalFunction = () => {
        setIsModalOpen(false);
    };

    const handleLogout = () => {
        localStorage.clear();
        if (onLogout) {
            onLogout();
        }
        navigate('/authentication');
    };
    const avatarData = {
        name: profile && (profile.first_name && profile.last_name) ? `${profile.first_name} ${profile.last_name}` : profile && profile.username || '',
        imageSrc: profile && profile.thumbnail ? `${profile.thumbnail}` : '',
        color: 'blue'
    };

    return (
        <div className="sidebar">
            <Link to="/workspace">
            <div className=" font-extrabold   text-[32px] bg-gradient-to-r from-[#118C80] to-[#4AB7D8] inline-block text-transparent bg-clip-text  pt-10 pb-10">
                کوئرا تسک منیجر
            </div>
            </Link>
            <div className="relative" style={{ width: "304px" }}>
                <div className="flex items-center cursor-pointer flex justify-between" onClick={toggleMenu}>
                    {isOpen ? (
                        <img src={ArrowUp} alt="Up Icon" className=" inline-block ml-2" style={{ width: "10px", height: "5px" }} />
                    ) : (
                        <img src={ArrowDown} alt="Down Icon" className="w-6 h-6 inline-block ml-2" style={{ width: "10px", height: "5px" }} />
                    )}
                    <div style={{ fontWeight: 800, fontSize: "16px" }}>ورک‌اسپیس‌ها</div>
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
                                onClick={() => setIsWorkspaceModalOpen(true)}
                                bgColor="#007bff"
                                fontSize="12px"
                                fontWeight={400}
                                borderRadius={6}
                            />
                            <div className='relative workspaces'  >
                                {workspaces.map(workspace => (
                                    <div key={workspace.id}>
                                        <div className="flex justify-between items-center cursor-pointer mb-2 hover:bg-blue-50 hover:rounded-[5px] p-[5px]" >
                                            <button onClick={() => setIsMoreModalOpen(true)}> 
                                                <img src={MoreIcon} alt="MoreIcon" />
                                            </button>
                                            <div className='flex w-[160px] h-[23px] justify-end items-center' onClick={() => toggleWorkspace(workspace.id)}>
                                                <div className='mt-1'>{workspace.name}</div>
                                                <div className={`w-[20px] h-[20px] rounded-md ml-2 bg-${workspace.color}`} style={{ backgroundColor: workspace.color }}></div>
                                            </div>
                                        </div>
                                        {selectedWorkspaces.includes(workspace.id) && openProjects[workspace.id] && (
                                            <div className='flex flex-col cursor-pointer items-end pt-4 pr-8 pb-4'>
                                                {isModalOpen && <NewProjectModal onCloseModal={closeModalFunction} workspaceId={parseInt(workspace.id)} />}
                                                {openProjects[workspace.id].length > 0 ? (
                                                    openProjects[workspace.id].map(project => (
                                                        <div className='hover:bg-blue-50 hover:rounded-[5px] w-[264px] h-[31px] flex justify-end items-center flex justify-between items-center p-[5px]' onClick={(event) => handleProjectClick(workspace.id, project.id)}>
                                                            <img src={MoreIcon} alt="MoreIcon"/>
                                                            <h1 key={project.id}>{project.name}</h1>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <button className="w-[240px] h-[32px] border border-solid border-[#208D8E] bg-white text-[#208D8E] py-2 px-4 rounded-[8px] hover:bg-[#208D8E] hover:text-white flex justify-center items-center" onClick={openModalFunction}>ساختن پروژه جدید</button>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='w-[276px] h-[85px] mt-[570px]'>
                <Link to="/profile/profile1">
                    <div className=' h-[33px] flex justify-end items-center cursor-pointer'>
                        <h1 className='mr-[10px]' style={{ fontWeight: 500, fontSize: "16px" }}>{avatarData.name}</h1>
                        {profile && (
                            <Avatar
                                size={30}
                                borderRadius="50%"
                                profile={avatarData}
                                index={0}
                                overlap={0}
                            />
                        )}
                    </div>
                </Link>
                <div className='flex justify-between items-center h-[36px] mt-[10px]'>
                    <div className='w-[64px] h-[36px]'>
                        <img src={DarkModeSwitch} alt="DarkModeSwitch" />
                    </div>
                    <button className='w-[65px] h-[24px] flex' onClick={handleLogout}>
                        <h1 style={{ fontWeight: 500, fontSize: "16px" }} className='text-gray-500'>خروج</h1>
                        <img src={ExitIcon} alt="ExitIcon" />
                    </button>
                </div>
            </div>
            {isWorkspaceModalOpen && <CreateWorkspace onCloseModal={() => setIsWorkspaceModalOpen(false)} />}
            
            {isMoreModalOpen && <MoreWorkSpaceModal closeModal={() => setIsMoreModalOpen(false)} />}
        </div>

    );
};

export default SideBar;
