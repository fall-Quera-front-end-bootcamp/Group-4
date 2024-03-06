import React, {useState} from "react";
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import Form from "../../../../../Components/common/form/Index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import DynamicButton from "../../../../../Components/common/button";
import {faTimes,faDotCircle, faArrowLeft, faBan} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { ColorPicker } from 'primereact/colorpicker';
import { Formik } from 'formik';
import ColorPickerSection from "./Color-Picker-Section/ColorPickerSection";
import {RgbaColorPicker} from "react-colorful";

const customStyle = {
    width: "500px",
    height: "268px",
    gap: "40px",
    borderRadius: "20px",

};
const labels = {
    color: "#1E1E1E",
    fontWeight: 400,
    fontSize: "14px",
};
const customStylebtn = {
    padding: "10px",
};
interface workspaceProps{
    text:string,
    title: string | number,
    bool:boolean,
}


interface openProps{
    openTwo?:any;
    setopenTwo?: any;

}



const WorkspaceTwo :React.FC<openProps>=( {openTwo , setopenTwo } ) => {

    const [color, setColor
    ] = useState(
        { r: 200, g: 150, b: 35, a: 0.5 }
    );

const [WorkspaceClose,setWorkspaceClose]=useState(true)
    const[pickerClose,setPickerClose]=useState(false)

    return (
        <div className={`${!WorkspaceClose? 'hidden':''}`}>
        <div className="border-y-green-400 absolute ">

            <Form style={customStyle}>
                {/* ---card body ------START*/}
                {/*--------ورک اسپیس------------*/}
                <div className="flex justify-center items-center w-[452px] h-[140px] gap-[40px] ">
                    <div className="w-[452px] h-[32px] flex flex-row items-center justify-between gap-[10px]">
                        <div className="w-[24px] h-[24px]"><FontAwesomeIcon icon={faArrowLeft}/></div>
                        <div className="font-extrabold text-[24px] leading-[32px] text-center text-[#1E1E1E]">انتخاب رنگ
                            ورک اسپیس
                        </div>

                        <div onClick={()=>setWorkspaceClose(!WorkspaceClose)} className="cursor-pointer text-[#323232] w-[24px] h-[24px] ml-4"><FontAwesomeIcon
                            icon={faTimes}/></div>

                    </div>
                </div>
                {/*------نام ورک اسپیس-----*/}
                <div dir="rtl" className="w-[415px] h-[68px] gap-[8px] flex flex-col">
                    <label style={labels} className="leading-[19.73px] text-right">رنگ ورک اسپیس</label>
                    <div className="w-[453px] h-[86px] gap-[16px]">
                        <div dir="rtl">
                            <div className="flex  flex-row flex-wrap gap-[11px] w-[293px] h-[58px]">
                                <div className="flex ">
                                    <div className=" flex justify-center items-center text-white w-[70px] h-[70px] rounded-[8px] "
                                    >ت ط</div>
                                    <div className=" w-[15px] h-[15px] "><span> <FontAwesomeIcon icon={faBan}/></span>
                                    </div>
                                    <div className="w-[293px] h-[86px] flex flex-row flex-wrap  gap-[16px]">
                                        {/*-----colors ---picker ----section*/}
                                        <div className={`${!pickerClose ? 'hidden' : 'visible'}`}>
                                            <RgbaColorPicker color={color} onChange={setColor}/>
                                            <div className="value">{JSON.stringify(color)}</div>
                                        </div>
                                        <div onMouseDown={() => setPickerClose(!pickerClose)}
                                             className="flex  flex-wrap w-[293px] h-[50px] gap-[11px] fixed">
                                            <div onClick={() => setColor(color)}
                                                 className="rounded-[8px] w-[20px] h-[20px] bg-[#4C6EF5]">
                                            </div>
                                            <div onClick={() => setColor({r: 34, g: 139, b: 230, a: 1})}
                                                 className="rounded-[8px] w-[20px] h-[20px] bg-[#228BE6]"></div>

                                            <div onClick={() => setColor({r: 21, g: 170, b: 191, a: 1})}
                                                 className="rounded-[8px] w-[20px] h-[20px] bg-[#15AABF]"></div>

                                            <div onClick={() => setColor({r: 18, g: 184, b: 134, a: 1})}
                                                 className="rounded-[8px] w-[20px] h-[20px] bg-[#12B886]"></div>

                                            <div onClick={() => setColor({r: 32, g: 141, b: 142, a: 1})}
                                                 className="rounded-[8px] w-[20px] h-[20px] bg-[#208D8E]"></div>

                                            <div onClick={() => setColor({r: 64, g: 192, b: 87, a: 1})}
                                                 className="rounded-[8px] w-[20px] h-[20px] bg-[#40C057]"></div>

                                            <div onClick={() => setColor({r: 130, g: 201, b: 30, a: 1})}
                                                 className="rounded-[8px] w-[20px] h-[20px] bg-[#82C91E]"></div>

                                            <div onClick={() => setColor({r: 250, g: 176, b: 5, a: 1})}
                                                 className="rounded-[8px] w-[20px] h-[20px] bg-[#FAB005]"></div>

                                            <div onClick={() => setColor({r: 253, g: 126, b: 20, a: 1})}
                                                 className="rounded-[8px] w-[20px] h-[20px] bg-[#FD7E14]"></div>

                                            <div onClick={() => setColor({r: 250, g: 82, b: 82, a: 1})}
                                                 className="rounded-[8px] w-[20px] h-[20px] bg-[#FA5252]"></div>

                                            <div onClick={() => setColor({r: 230, g: 73, b: 128, a: 1})}
                                                 className="rounded-[8px] w-[20px] h-[20px] bg-[#E64980]"></div>

                                            <div onClick={() => setColor({r: 190, g: 75, b: 219, a: 1})}
                                                 className="rounded-[8px] w-[20px] h-[20px] bg-[#BE4BDB]"></div>

                                            <div onClick={() => setColor({r: 121, g: 80, b: 242, a: 1})}
                                                 className="rounded-[8px] w-[20px] h-[20px] bg-[#7950F2]"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---card body ------END*/}
                {/*------card Button--- START */}
                <DynamicButton
                    text="ادامه"
                    width={415}
                    height={40}
                    onClick={()=>setopenTwo(!openTwo)}
                    bgColor="#208D8E"
                    fontSize="14px"
                    fontWeight={800}
                    padding={10}
                />
                <div className=" flex-row flex  w-[40px] h-[8px] gap-[8px]">
                    <div className="text-gray-400"><FontAwesomeIcon icon={faDotCircle}/></div>
                    <div className="text-gray-700"><FontAwesomeIcon icon={faDotCircle}/></div>
                    <div className="text-gray-400"><FontAwesomeIcon icon={faDotCircle}/></div>
                </div>
            </Form>
        </div>
        </div>
    )
}

export default WorkspaceTwo