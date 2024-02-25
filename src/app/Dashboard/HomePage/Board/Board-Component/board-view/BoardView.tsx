import React from 'react';
import ColumnOpen from '../Board-Column/Column-Open/Board-Column';
import ColumnCardImage from '../Board-Column/Column-Card-Image/ColumnCardImage';

interface Task {
    id: number;
    imgSrc?: string;
    projectName: string;
    title: string;
    deadline: string;
    state: string;
    tags: string[];
}

interface BoardViewState {
    tasks: Task[];
}

const BoardView: React.FC<BoardViewState> = ({ tasks }) => {
    // Group tasks by state
    const tasksByState: { [key: string]: Task[] } = {};
    tasks.forEach(task => {
        if (!tasksByState[task.state]) {
            tasksByState[task.state] = [];
        }
        tasksByState[task.state].push(task);
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'row' ,gap:'10px'}}>
            {Object.entries(tasksByState).map(([state, tasks]) => (
                <div key={state} style={{ flex: 1 ,
                                            display:'flex',
                                            flexDirection:'column',
                                            gap:'10px'}}>
                    <ColumnOpen state={state} number={tasks.length} borderColor="#FD7E14" />
                    {tasks.map(task => (
                        <ColumnCardImage
                            key={task.id}
                            imgSrc={task.imgSrc||''}
                            projectName={task.projectName}
                            title={task.title}
                            deadline={task.deadline}
                            state={task.state}
                            tags={task.tags}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default BoardView;
