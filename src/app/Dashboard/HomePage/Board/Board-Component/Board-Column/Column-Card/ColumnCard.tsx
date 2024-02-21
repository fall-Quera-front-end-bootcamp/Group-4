import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faCheckSquare, faFlag, faListAlt} from "@fortawesome/free-regular-svg-icons";

function ColumnCard () {

    return(

        <div>
            {/*------------START-- card--پروژه اول-------*/}
            <div  className=" w-[250px] h-[200px] rounded-[16px] p-[16px] gap-[16px] bg-white drop-shadow-md ">
                <div className="w-[218px] h-[43px] gap-[9px] flex ">
                    <div className="flex justify-center items-center bg-[#FFF3BF] w-[23.85px] h-[21.85px] rounded-[67.8px] pt-[6.1px] pr-[5.42px] pb-[4.75px] pl-[5.42px]"><span>0</span>
                    </div>
                    <div dir="rtl" className=" w-[185.15px] h-[43px] gap-[9px]  flex flex-col">
                        <div  className="w-[46px] h-[17px] font-medium text-[12px] leading-[16.91px] text-right text-[#534D60] "><span>پروژه اول</span>
                        </div>
                        <div dir="rtl" className="flex w-[185.15px] h-[17px] gap-[4px] ">
                            <span className="font-normal text-[13px] leading-[16.91px] text-right text-[#0E0E0E] h-[17px] w-[170px]">این یک تیتر برای این تسک است</span>
                            <span className=" text-[12px] leading-[16.91px] "> <FontAwesomeIcon icon={faListAlt}/></span>
                        </div>
                    </div>
                </div>
                <div dir="rtl">
                    <div className="mt-4 flex items-center flex-row-reverse w-[133px] h-[17px] gap-[8px]">
                        <div className="w-[47px] h-[17px] gap-[2px] ">
                            <span className=" text-[#BDC0C6] ml-1"> <FontAwesomeIcon icon={faCheckSquare}/></span>
                            <span className="w-[29px] h-[17px] font-normal text-[#BDC0C6] text-[12px] leading-[16.91px] text-right ">2/12</span>
                        </div>
                            <div className=" w-[78px] h-[17px] gap-[8px]  ">
                                <span className=" text-[#FA5252] text-sm"> <FontAwesomeIcon icon={faFlag} /></span>
                                <span className="mr-1 font-medium text-[12px] leading-[16.91px] text-right">5مهر-فردا</span>
                            </div>
                    </div>
                </div>
                <div dir="rtl">
                    <div className="w-[91px] h-[24px] gap-[8px] flex-row flex mt-4">
                        <div className="text-[#228BE6] bg-[#D0EBFF] w-[41px] h-[24px] rounded-[14px] pr-[8px] pl-[8px]">
                            <span className=" w-[25px] h-[17px] font-extrabold text-[12px] leading-[16.91px] text-right">درس</span>
                        </div>
                        <div className="bg-[#F3D9FA] text-[#BE4BDB] w-[41px] h-[24px] rounded-[14px] pr-[8px] pl-[8px]">
                            <span className="w-[25px] h-[17px] font-extrabold text-[12px] leading-[16.91px] text-right">پروژه</span>
                        </div>
                    </div>
                </div>
                <div className="w-[218px] border-[1px] border-[#EFF0F0] mt-4 h-[20px] flex justify-between items-center mt-2">
                    <span className="w-[20px] h-[20px]">...</span>
                    <span className="w-[20px] h-[20px]"><FontAwesomeIcon icon={faCheckCircle}/></span>
                </div>
        </div>
        </div>

    )
}

export default ColumnCard