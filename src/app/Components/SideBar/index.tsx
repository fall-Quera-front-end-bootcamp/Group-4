// SideBar component
import React, { useState , useEffect } from 'react';
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



interface SidebarProps {
    openModal: () => void;
}

interface Project {
    id: string;
    name: string;
}

interface Workspace {
    id: string;
    name: string;
    color:string;
}

function SideBar({ openModal }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [isWorkspaceModalOpen, setIsWorkspaceModalOpen] = useState(false); 
    const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
    const [openProjects, setOpenProjects] = useState<{ [key: string]: Project[] }>({});
    const [selectedWorkspace, setSelectedWorkspace] = useState<string | null>(null);

    useEffect(() => {
        const fetchWorkspaces = async () => {
            try {
                const workspacesData = await getWorkspaces();
                setWorkspaces(workspacesData);
            } catch (error) {
                console.error('Error fetching workspaces:', error);
            }
        };

        fetchWorkspaces();
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleWorkspace = async (workspaceId: string) => {
        setSelectedWorkspace(workspaceId);
        try {
            const projectsData = await getProjects(workspaceId);
            setOpenProjects({ ...openProjects, [workspaceId]: projectsData });
        } catch (error) {
            console.error(`Error fetching projects of workspace ${workspaceId}:`, error);
        }
    };

    const main = {
        width: "304px"
    };

    const WorkspacesTitle = {
        fontWeight: 800,
        fontSize: "16px"
    };

    const arrow = {
        width: "10px",
        height: "5px"
    };

    return (
        <div className="sidebar">
            <div className=" font-extrabold   text-[32px] bg-gradient-to-r from-[#118C80] to-[#4AB7D8] inline-block text-transparent bg-clip-text  pt-10 pb-10">
                کوئرا تسک منیجر
            </div>
            <div className="relative" style={main}>
                <div className="flex items-center cursor-pointer flex justify-between" onClick={toggleMenu}>
                    {isOpen ? (
                        <img src={ArrowUp} alt="Up Icon" className=" inline-block ml-2" style={arrow} />
                    ) : (
                        <img src={ArrowDown} alt="Down Icon" className="w-6 h-6 inline-block ml-2" style={arrow} />
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
                                onClick={() => setIsWorkspaceModalOpen(true)}
                                bgColor="#007bff"
                                fontSize="12px"
                                fontWeight={400}
                            />
                            <div className='relative'  >
                                {workspaces.map(workspace => (
                                    <div key={workspace.id}>
                                        <div className="flex items-center cursor-pointer justify-end pt-4" onClick={() => toggleWorkspace(workspace.id)}>
                                        
                                            <div className='mt-1'>{workspace.name}</div>
                                            <div className={`w-[20px] h-[20px] rounded-md ml-2 bg-${workspace.color}`} style={{ backgroundColor: workspace.color }}></div>
                                        </div>
                                        {selectedWorkspace === workspace.id && openProjects[workspace.id] && (
                                            <div className='flex flex-col cursor-pointer items-end pt-4 pr-8'>
                                                {openProjects[workspace.id].map(project => (
                                                    <h1 key={project.id}>{project.name}</h1>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {isWorkspaceModalOpen && <CreateWorkspace onCloseModal={() => setIsWorkspaceModalOpen(false)} />}
        </div>
    );
};

export default SideBar;