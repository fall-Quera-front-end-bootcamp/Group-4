import React from 'react';

interface TagProps {
    backgroundColor: string;
    textColor: string;
    text: string;
}

const Tag: React.FC<TagProps> = ({ backgroundColor, textColor, text }) => {
    const container = {
        borderRadius: "14px",
        backgroundColor: backgroundColor,
    };

    const texts = {
        fontWeight: 800,
        fontSize: "12px",
        color: textColor,
    };

    return (
        <div className='w-[41PX] h-[24px] flex justify-center items-center' style={container}>
            <h1 style={texts}>{text}</h1>
        </div>
    );
};

export default Tag;
