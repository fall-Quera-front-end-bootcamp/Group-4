import React from 'react';
import Header from "./Board-Component/Header-Board/Header";
import SideBar from "../../../Components/SideBar";
import { Outlet } from "react-router-dom";
import ColumnOpen from "./Board-Component/Board-Column/Column-Open/Board-Column";
import List from "../../../Components/List";
import BoardView from "./Board-Component/board-view/BoardView";



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
    return (
        <div className="flex justify-center">
            <Header />
            <div className="flex flex-col mt-[150px] mr-[280px]">
                <Outlet />
            </div>
            <SideBar />
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



