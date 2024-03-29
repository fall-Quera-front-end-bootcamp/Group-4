import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { getProjects } from '../../../../services/project';
import addNewProjectIcon from '../../../Components/assets/icons/addNewProject.png'
import NewProjectModal from '../../../Components/NewProjectModal';



interface Project {
  id: number;
  name: string;
  
}

interface WorkspaceProps {
  id: number;
  name: string;
  color: string;
};

const CreateNewProjectButtonStyle = {
  fontWeight:800,
  fontSize:"16px"
}

const Workspace: React.FC<WorkspaceProps> = ({ id, name, color }) => {
  


  const [projects, setProjects] = useState<Project[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getProjects(id); 
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects(); 
  }, []);
  console.log(name);




  return (
    <div dir='rtl' className="flex flex-col gap-2 mb-6 mr-6 w-[1100px] mt-[30px] pr-[30px]">
        <h1>{name}</h1>
          <div className='flex flex-row  mb-[20px]'>
          {projects.length === 0 && (
              <button className="w-[200px] h-[80px] border-2 border-red-500 bg-white text-red-500 py-2 px-4 rounded-lg hover:bg-red-500 hover:text-white flex justify-center items-center" onClick={openModal}>
                <img src={addNewProjectIcon} alt="addNewProjectIcon" />
                <h1 style={CreateNewProjectButtonStyle}>ساختن پروژه جدید</h1>
              </button> 
          )}
          {isModalOpen && <NewProjectModal onCloseModal={closeModal} workspaceId={id} />}
            <div className="flex flex-row gap-4">
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        workspaceId={id}
                        id={project.id}
                        name={project.name}
                        color={color}
                        />
                ))}
            </div>
          </div>
        <div className='w-[1100px] h-[2px] bg-gray-200 mt-3 mr-[-50px]'></div>
    </div>
  );
};

export default Workspace;
