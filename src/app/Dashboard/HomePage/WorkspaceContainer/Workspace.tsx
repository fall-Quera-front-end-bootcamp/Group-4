import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { getProjects } from '../../../../services/project';
import addNewProjectIcon from '../../../Components/assets/icons/addNewProject.png'

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
    <div dir='rtl' className="flex flex-column gap-2 mb-6 mr-6 ">
        <h1>{name}</h1>
        <button className="w-[200px] h-[80px] border-2 border-red-500 bg-white text-red-500 py-2 px-4 rounded-lg hover:bg-red-500 hover:text-white flex justify-center items-center">
          <h1 style={CreateNewProjectButtonStyle}>ساختن پروژه جدید</h1>
          <img src={addNewProjectIcon} alt="addNewProjectIcon" />
        </button>
        <div className="flex flex-row gap-4">
            {projects.map(project => (
                <ProjectCard
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    color={color}
                    />
            ))}
        </div>
        <div className='w-full h-[2px] bg-gray-200 mt-3' ></div>
    </div>
  );
};

export default Workspace;
