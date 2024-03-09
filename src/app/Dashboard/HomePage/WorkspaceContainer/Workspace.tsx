import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { getProjects } from '../../../../services/project';

interface Project {
  id: number;
  name: string;
  
}

interface WorkspaceProps {
  id: number;
  name: string;
  color: string;
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

  return (
    <div dir='rtl' className="flex flex-column gap-2 mb-6 mr-6 ">
        <h1>{Workspace.name}</h1>
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
