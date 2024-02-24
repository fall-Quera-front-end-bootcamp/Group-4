import Header from "./Board-Component/Header-Board/Header";
import ColumnOpen from "./Board-Component/Board-Column/Column-Open/Board-Column";
import ColumnCard from "./Board-Component/Board-Column/Column-Card/ColumnCard"
import ColumnCardImage from "./Board-Component/Board-Column/Column-Card-Image/ColumnCardImage";
import ColumnButton from "./Board-Component/Board-Column/Column-Button/Column-Button";
import WorkspaceModal from "./Board-Component/WorkspaceModal";

function Board () {
    return (
        <>
            <Header/>
            <div  className="w-[1038px] h-[804px] gap-[16px] flex-row flex">
            <div  className=" flex fle flex-col w-[250px] h-[618px] gap-[16px] mt-4 ">
                <ColumnOpen/>
                <ColumnCardImage/>
                <ColumnCard/>
                <ColumnButton/>
                <WorkspaceModal/>


            </div>
            </div>
        </>
    )
}

export default Board;
