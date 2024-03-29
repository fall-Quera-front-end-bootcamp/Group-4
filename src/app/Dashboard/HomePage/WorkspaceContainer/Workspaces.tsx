import React, { useState, useEffect } from 'react';
import Workspace from './Workspace';
import { getWorkspaces } from '../../../../services/workspace';


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
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [workspacesCreated, setWorkspacesCreated] = useState(0);
  

  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const fetchedWorkspaces = await getWorkspaces();
        setWorkspaces(fetchedWorkspaces);
        setWorkspacesCreated(prevCount => prevCount + 1);
      } catch (error) {
        console.error('Error fetching workspaces:', error);
      }
    };

    fetchWorkspaces();
  }, []);
  console.log(workspaces);



  return (
    <div>
      {workspaces.map(workspace => (
        <Workspace key={workspace.id} id={workspace.id} name={workspace.name} color={workspace.color}  />
      ))}
    </div>
  );
};

export default Workspaces;
