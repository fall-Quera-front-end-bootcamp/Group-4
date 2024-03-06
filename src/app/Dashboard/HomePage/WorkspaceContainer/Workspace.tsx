
import ProjectCard from './ProjectCard';

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
 
 

const projects=[
    {id:1 , name:"project1" },
    {id:2 , name:"project2" },
    {id:3 , name:"project3" },
    {id:4 , name:"project4" },

];


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
