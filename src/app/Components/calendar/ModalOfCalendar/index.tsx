import Form from '../../common/form/Index';
import DeleteIcon from '../../Components/assets/icons/Delete.png';
import motevaset from '../../Components/assets/icons/PriorityIcons/motevaset.png';
import DynamicButton from '../../common/button';
function ModalOfCalendar() {

    const FormStyle = {
        width: "463px",
        height: "150px",
        padding: "20px",
        borderRadius: "8px",
        border: "1px solid #208D8E", // Border style with specified color
        gap: "32px", // Not directly applicable to form, assuming it's for children spacing
        boxShadow: "0px 8px 16px 0px #00000033"
    };

    return (
        <Form style={FormStyle}>
            <div className='flex w-[423px] h-[28px] gap-[8px] rtl justify-end'>
                <div className="w-[175px] h-[28px] flex flex-row">
                    <input className="border-none font-normal w-[175px] h-[28px] text-sm text-right text-[#959595] " type="text" placeholder="نام تسک را وارد کنید"/>
                </div>
                <div className="w-[24px] h-[24px]">
                    <img src={DeleteIcon} alt="preDeleteIconv" className='cursor-pointer' style={{ filter: 'brightness(0) saturate(100%) hue-rotate(180deg) invert(32%) sepia(3%) saturate(174%) hue-rotate(173deg) brightness(89%) contrast(87%)' }} />
                </div>
            </div>
                <div className='w-[423px] h-[50 px] flex justify-between items-center'>
                    <DynamicButton
                        text="ساختن تسک"
                        width={125}
                        height={32}
                        onClick={() => { console.log("test") }}
                        bgColor="#208D8E"
                        textColor="white"
                        fontSize="12px"
                        fontWeight={400}
                        borderRadius={4}
                        padding={4}
                    />
                <div className='w-[113px] h-[50px] gap-[12px] flex items-center'>
                    <div className='w-[63px] h-[50px] flex justify-center items-center'>
                        <p style={{ color: '#208D8E', fontSize: '20px', fontWeight: 500, lineHeight: '28px', letterSpacing: '0px', textAlign: 'right' }}>
                            <span style={{ direction: 'rtl', display: 'inline-block' }}>۱۴ تیر</span>
                        </p>
                    </div>
                    <div className="w-[50px] h-[50px] flex justify-center items-center">
                        <img src={motevaset} alt="motevaset" className='w-[29.41px] h-[29.41px]' style={{ filter: 'grayscale(100%) brightness(76%) contrast(130%)' }} />
                    </div>

                </div>
                </div> 
                
        </Form>
    )
}

export default ModalOfCalendar;
