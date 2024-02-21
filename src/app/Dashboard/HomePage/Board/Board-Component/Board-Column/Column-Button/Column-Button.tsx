import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
function ColumnButton (){


    return (
        <div className="cursor-pointer w-[250px] h-[40px] flex justify-center items-center flex-row rounded-[8px] border-[#208D8E] border-[2px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[10px] ">
            <div className="w-[125px] h-[24px] gap-[4px]">
            <span className="w-[97px] h-[17px] font-extrabold text-[12px] leading-[16.91px] text-right text-[#208D8E]">ساختن تسک جدید</span>
            <span className="text-[#208D8E]  ml-2">
            <FontAwesomeIcon icon={faPlusSquare} size="1x"/>
            </span>
            </div>
            </div>
    )
}

export default ColumnButton