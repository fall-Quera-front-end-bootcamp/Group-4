import React from 'react';
import ColumnOpen from '../Board-Column/Column-Open/Board-Column';
import ColumnCardImage from '../Board-Column/Column-Card-Image/ColumnCardImage';




const BoardView: React.FC = () => {
    interface Task {
        id: number;
        imgSrc?: string;
        projectName: string;
        title: string;
        deadline: string;
        state: string;
        tags: string[];
    }
    const tasks: Task[] = [
    {
        id: 1,
        imgSrc: 'task1.jpg',
        projectName: 'Project A',
        title: 'Task 1',
        deadline: '2024-03-01',
        state: 'pending',
        tags: ['tag1', 'tag2']
    },
    {
        id: 2,
        imgSrc: 'task2.jpg',
        projectName: 'Project B',
        title: 'Task 2',
        deadline: '2024-03-02',
        state: 'in progress',
        tags: ['tag3', 'tag4']
    },
    {
        id: 3,
        imgSrc: 'task3.jpg',
        projectName: 'Project C',
        title: 'Task 3',
        deadline: '2024-03-03',
        state: 'open',
        tags: ['tag5', 'tag6']
    },
    {
        id: 2,
        imgSrc: 'task2.jpg',
        projectName: 'Project B',
        title: 'Task 2',
        deadline: '2024-03-02',
        state: 'in progress',
        tags: ['tag3', 'tag4']
    },
    {
        id: 3,
        imgSrc: 'task3.jpg',
        projectName: 'Project C',
        title: 'Task 3',
        deadline: '2024-03-03',
        state: 'open',
        tags: ['tag5', 'tag6']
    },    {
        id: 2,
        imgSrc: 'task2.jpg',
        projectName: 'Project B',
        title: 'Task 2',
        deadline: '2024-03-02',
        state: 'in progress',
        tags: ['tag3', 'tag4']
    },
    {
        id: 3,
        imgSrc: 'task3.jpg',
        projectName: 'Project C',
        title: 'Task 3',
        deadline: '2024-03-03',
        state: 'open',
        tags: ['tag5', 'tag6']
    },    {
        id: 2,
        imgSrc: 'task2.jpg',
        projectName: 'Project B',
        title: 'Task 2',
        deadline: '2024-03-02',
        state: 'in progress',
        tags: ['tag3', 'tag4']
    },
    {
        id: 3,
        imgSrc: 'task3.jpg',
        projectName: 'Project C',
        title: 'Task 3',
        deadline: '2024-03-03',
        state: 'open',
        tags: ['tag5', 'tag6']
    },
    {
        id: 4,
        
        projectName: 'ProjectD',
        title: 'Task 4',
        deadline: '2024-03-04',
        state: 'pending',
        tags: ['tag7', 'tag8']
    },
    {
        id: 5,
        imgSrc: 'task5.jpg',
        projectName: 'Project E',
        title: 'Task 5',
        deadline: '2024-03-05',
        state: 'open',
        tags: ['tag9', 'tag10']
    },    
    //{
    //     id: 5,
    //     imgSrc: 'task5.jpg',
    //     projectName: 'Project E',
    //     title: 'Task 5',
    //     deadline: '2024-03-05',
    //     state: 'open',
    //     tags: ['tag9', 'tag10']
    // },    {
    //     id: 5,
    //     imgSrc: 'task5.jpg',
    //     projectName: 'Project E',
    //     title: 'Task 5',
    //     deadline: '2024-03-05',
    //     state: 'done',
    //     tags: ['tag9', 'tag10']
    // },    {
    //     id: 5,
    //     imgSrc: 'task5.jpg',
    //     projectName: 'Project E',
    //     title: 'Task 5',
    //     deadline: '2024-03-05',
    //     state: 'done',
    //     tags: ['tag9', 'tag10']
    // }
];
    // Group tasks by state
    const tasksByState: { [key: string]: Task[] } = {};
    tasks.forEach(task => {
        if (!tasksByState[task.state]) {
            tasksByState[task.state] = [];
        }
        tasksByState[task.state].push(task);
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'row' ,gap:'10px', justifyContent:'flex-start', marginRight:'50px'}}>
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
