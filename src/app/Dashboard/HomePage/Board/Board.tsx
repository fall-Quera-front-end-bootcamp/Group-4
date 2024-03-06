import React, {useState} from 'react';
import Header from "./Board-Component/Header-Board/Header";
import SideBar from "../../../Components/SideBar";
import {Link, Outlet} from "react-router-dom";
import ColumnOpen from "./Board-Component/Board-Column/Column-Open/Board-Column";
import List from "../../../Components/List";
import BoardView from "./Board-Component/board-view/BoardView";
import Calendar from '../../../Components/calendar/calendarview';
import ProjectCreate from "./Board-Component/Board-Column/Column-More/New-Project/ProjectCreate";
import TaskCreate from "./Board-Component/Board-Column/Column-More/New-Task/TaskCreate";
import ShareWorkspace from "./Board-Component/Board-Column/Column-More/New-Project/Share-Workspace/ShareWorkspace";
import WorkspaceModal from "./Board-Component/WorkspaceModal";
import DynamicButton from "../../../Components/common/button";
import NewTask from "../../../Task/NewTask/NewTask";



interface Task {
    id: number;
    imgSrc?: string;
    projectName: string;
    title: string;
    deadline: string;
    state: string;
    tags: string[];
}

function Board() {
    const [ShowNewTask, setShowNewTask]=useState(false)
    return (

        <div className="flex justify-center relative">
            <Header />

            <div className="mt-[150px] mr-[280px]">

                <Outlet />

            </div>
            <SideBar />
            <div className="absolute  top-[954px] left-[50px] gap-[4px] ">

            <DynamicButton text="تسک جدید" width={118} height={40} onClick={()=>setShowNewTask(!ShowNewTask)} />

            </div>
            {ShowNewTask &&(
                <NewTask/>
            )}

            </div>
    );
}

export default Board;




// const tasks: Task[] = [
//     {
//         id: 1,
//         imgSrc: 'task1.jpg',
//         projectName: 'Project A',
//         title: 'Task 1',
//         deadline: '2024-03-01',
//         state: 'pending',
//         tags: ['tag1', 'tag2']
//     },
//     {
//         id: 2,
//         imgSrc: 'task2.jpg',
//         projectName: 'Project B',
//         title: 'Task 2',
//         deadline: '2024-03-02',
//         state: 'in progress',
//         tags: ['tag3', 'tag4']
//     },
//     {
//         id: 3,
//         imgSrc: 'task3.jpg',
//         projectName: 'Project C',
//         title: 'Task 3',
//         deadline: '2024-03-03',
//         state: 'open',
//         tags: ['tag5', 'tag6']
//     },
//     {
//         id: 4,
        
//         projectName: 'ProjectD',
//         title: 'Task 4',
//         deadline: '2024-03-04',
//         state: 'pending',
//         tags: ['tag7', 'tag8']
//     },
//     {
//         id: 5,
//         imgSrc: 'task5.jpg',
//         projectName: 'Project E',
//         title: 'Task 5',
//         deadline: '2024-03-05',
//         state: 'open',
//         tags: ['tag9', 'tag10']
//     }
// ];



