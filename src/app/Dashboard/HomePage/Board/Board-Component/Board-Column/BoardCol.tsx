import React, { useState, useEffect } from 'react';
import { getBoard } from '../../../../../../services/board'; 
import { getTasks } from '../../../../../../services/task';
import { getProject } from '../../../../../../services/project';
import { selectWorkspaceId } from '../../../../../../Features/workspaceSlice';
import { selectProjectId } from '../../../../../../Features/projectSlice';
import { RootState } from "../../../../../../utils/store";
import { useSelector } from "react-redux";
import ColumnOpen from '../Board-Column/Column-Open/Board-Column'; 
import ColumnCardImage from '../Board-Column/Column-Card-Image/ColumnCardImage'; 



interface Task {
    id: number;
    name: string;
    description: string;
    deadline: string;
    priority: number;
    attachment: string;
    thumbnail: string;
    order: number;
    members: string;
    created_at: string;
}

interface Board {
    id: number;
    name: string;
    order: number;
    tasks: string;
    tasks_count: string;
    is_archive: boolean;
    color: string;
}




const BoardCol: React.FC<{ board: Board }> = ({ board }) => {


    const workspaceId = useSelector((state: RootState) => selectWorkspaceId(state));
    const projectId = useSelector((state: RootState) => selectProjectId(state));
    console.log('from boardCol',workspaceId,projectId);
    // const [board, setBoard] = useState<any>(null);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [projectName, setProjectName] = useState<string>('');
    console.log(board.id);

    useEffect(() => {
        const fetchBoardAndTasks = async () => {
            try {
                // const boardDetails = await getBoard(workspaceId,projectId,Board.Id);
                // setBoard(boardDetails);

                const boardTasks = await getTasks(workspaceId,projectId,board.id);
                setTasks(boardTasks);

                const project = await getProject(workspaceId,projectId);
                setProjectName(project.name);

            } catch (error) {
                console.error('Error fetching board and tasks:', error);
            }
        };
        fetchBoardAndTasks();
    }, [board]);

    // if (!board || tasks.length === 0) {
    //     return <div>Loading...</div>; 
    // }

    return (
        <div>
            <ColumnOpen state={board.name} number={tasks.length} borderColor="#FD7E14" />
    
            {tasks.map((task: Task) => (
                <ColumnCardImage
                    key={task.id}
                    task={task}
                    projectName={projectName}
                />
            ))}
        </div>
    );
};

export default BoardCol;
