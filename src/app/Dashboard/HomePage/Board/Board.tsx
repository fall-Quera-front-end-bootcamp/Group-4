import React from 'react';
import Header from "./Board-Component/Header-Board/Header";
import SideBar from "../../../Components/SideBar";
import { Outlet } from "react-router-dom";

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
