import {RgbaColorPicker} from "react-colorful";
import React, {useState} from "react";

const ColorPickerSection =() =>{

    const [color, setColor
    ] = useState({ r: 200, g: 150, b: 35, a: 0.5 });
    const[pickerClose,setPickerClose]=useState(false)

    const handlerColorPicker = ()=>{
        setColor(color)

    }

    return (
        <div>


            <div className="App">
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
    )
}
export default ColorPickerSection