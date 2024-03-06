import React from 'react';

interface ProjectCardProps {
  id: number;
  name: string;
  color: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, name, color }) => {
  return (
    <div className={`flex justify-center items-center bg-gradient-to-br from-${color} to-${color}Light bg-opacity-50 p-4 rounded-lg w-[200px] h-[80px] cursor cursor-pointer`}>
      <p className="text-xl text-white font-bold mt-3">{name}</p>
    </div>
  );
};

export default ProjectCard;


//bg-gradient-to-r from-${color}-200 to-${color}-500