import React from 'react';

interface ButtonProps {
  text: string;
  width: number;
  height: number;
  onClick?: () => void;
  bgColor?: string; 
  textColor?: string; 
}

const DynamicButton: React.FC<ButtonProps> = ({
  text,
  width,
  height,
  onClick,
  bgColor, 
}) => {
  

  return (
    <button
      className={`bg-customBlue hover:bg-customBlueLight text-white`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
      }}
      onClick={onClick}
      >
      {text}
    </button>
  );
};

export default DynamicButton;



