import React from 'react';
import Workspace from './Workspace';

interface Project {
    id: number;
    name: string;
  }

interface Workspace {
    id: number;
    name: string;
    color: string;
    projects:Project[];
}

const Workspaces: React.FC = () => {


const workspaces=[
    {id:1 , name:"workspace one",color:"customBlue" },
    {id:2 , name:"workspace one",color:"customBlue" },
];

  return (
    <div>
      {workspaces.map(workspace => (
        <Workspace key={workspace.id} id={workspace.id} name={workspace.name} color={workspace.color}  />
      ))}
    </div>
  );
};

export default Workspaces;
