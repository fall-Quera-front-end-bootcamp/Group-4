

function ColumnOpen ({}) {

    return(
        <>
                     <div className=" flex-row-reverse flex  justify-between w-[250px] h-[40px] rounded-[16px] border-t-[2px] shadow border-[#FD7E14] bg-white pt-[8px] pr-[12px] pb-[8px] pl-[12px]">
                        <div className="w-[56px] h-[23px] gap-[4px] items-center justify-center flex flex-row">
                            <div className="bg-[#F4F4F4] rounded-[50px] w-[14px] h-[19px] flex justify-center items-center gap-[10px] pt-[2px] pr-[4px]  pl-[4px]">
                                <span className="text-[#1E1E1E] w-[6px] h-[17px] font-medium text-[12px] leading-[16.91px] text-right">.</span>
                            </div>
                            <span className="w-[6px] h-[17px] font-medium text-[12px] leading-[16.91px] text-right text-[#1E1E1E]">open</span>
                        </div>
                         <div className="flex flex-row justify-center w-[48px] h-[24px] gap-[4px]">
                             <span className="w-[24px] h-[24px]">+</span>
                             <span className="w-[20px] h-[20px]">...</span>
                         </div>
                     </div>
        </>
    )
}
export default ColumnOpen