import React, {JSX} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import ShareProject
    from "../../../../Dashboard/HomePage/Board/Board-Component/Header-Board/Shahre-Project/ShareProject";

interface NewTagProp{

}
const NewTag:React.FC<NewTagProp> =():JSX.Element =>{
    return (
<div className="transition duration-300 ease-in-out">
        <div className=" w-[180px] h-[81px] top-[1343px] left-[1244] rounded-[8px] p-[8px] gap-[16px] bg-white shadow-md">
            <div className="w-[164px] h-[32px] rounded-[4px] py-[4px] px-[8px] gap-[8px] bg-[#e9e9e9] ">
                    <span className="w-[24px] h-[24px] text-[#bdbdbd]"><FontAwesomeIcon icon={faSearch}/></span>
                    <span className="mr-2 w-[109px] h-[17px] font-medium text-[12px] leading-[16.91px] text-right">تگ جدید</span>
            </div>
            <span className="w-[164px] h-[17px] font-medium text-xs leading-[16.91px] text-right text-[#3D3D3D]">برای ساختن تگ جدید اینتر بزنید</span>
        </div>
</div>



    )
}
export default NewTag