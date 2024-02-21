import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFlag, faListAlt} from "@fortawesome/free-regular-svg-icons";

function ColumnCardImage () {

    return(

        <div>
            {/*------------START-- card--پروژه اول-------*/}
            <div className=" w-[250px] h-[298px] rounded-[16px] p-[16px] gap-[16px] bg-white drop-shadow-md">
                 {/*  عکس-----*/}
                 <div className="flex justify-center w-[218px] h-[134px]">
                    <img className=" rounded-[4px]" src="https://images.unsplash.com/photo-1682686578615-39549501dd08?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                 </div>
                    {/*=================*/}
                    {/*===این یک تیتر است*/}
                    <div dir="rtl" className=" w-[218px] h-[43px] gap-[9px] flex flex-col mt-4">
                        <div className="w-[46px] h-[17px]"><span className="font-medium text-[12px] leading-[16.91px] text-right text-[#534D60]">پروژه اول</span>
                        </div>
                        <div dir="rtl" className=" w-[218px] h-[17px] font-medium text-[12px] leading-[16.91px] text-right gap-[4px]">
                            <span className="font-normal text-sm leading-[16.91px text-right text-[#0E0E0E] h-[17px] w-[170px]">این یک تیتر برای این تسک است</span>
                           <span className="mr-1"> <FontAwesomeIcon icon={faListAlt}/></span>
                        </div>
                    </div>
                {/* =====================*/}
                {/*===5 مهر====*/}
                <div dir="rtl">
                        <div className="w-[78px] h-[17px] gap-[8px] mt-3">
                                     <span className=" text-[#FA5252] text-sm"><FontAwesomeIcon icon={faFlag} /></span>
                                     <span className="mr-1  font-medium text-[12px] leading-[16.91px] text-right">5مهر-فردا</span>
                        </div>
                    </div>
                {/*===================*/}
                {/* درس و پروژه*/}
                <div dir="rtl">
                    <div className=" w-[91px] h-[24px] gap-[8px] flex-row flex mt-6">
                        <div className="text-[#228BE6] bg-[#D0EBFF] w-[41px] h-[24px] rounded-[14px] pr-[8px] pl-[8px]"><span className=" w-[25px] h-[17px] font-extrabold text-[12px] leading-[16.91px] text-right">درس</span></div>
                        <div className="bg-[#F3D9FA] text-[#BE4BDB] w-[41px] h-[24px] rounded-[14px] pr-[8px] pl-[8px]"><span className="w-[25px] h-[17px] font-extrabold text-[12px] leading-[16.91px] text-right">پروژه</span></div>
                    </div>
                </div>
            {/*========================*/}
            </div>
        </div>

    )
}



export default ColumnCardImage;