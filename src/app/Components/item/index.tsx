import React from "react";

interface item {
  text: string;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  fontSize?: string;
  fontWeight?: number;
  boxShadow?: string;
}

const DynamicItems: React.FC<item> = ({
  text,
  onClick,
  bgColor,
  boxShadow,
  textColor,
  fontSize,
}) => {
  const gradientString = "linear-gradient(249.83deg, #40C057 0%, rgba(64, 192, 87, 0.5) 100%)";

  return (
    <button
      className={`hover:bg-customBlueLight text-white`}
      style={{
        width: "200px",
        height: "80px",
        padding: "26px 71px 31px 67px",
        borderRadius: "16px",
        border: "none",
        cursor: "pointer",
        fontSize: fontSize || "16px",
        fontWeight: "800",
        background: bgColor || gradientString,
        boxShadow: boxShadow || "0px 3px 4px 0px #00000033",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        letterSpacing: "0px",
        lineHeight: "23px",
        whiteSpace: "nowrap", 
        color: textColor || "white", 
      }}
      onClick={onClick}
    >
    {text= text || "پروژه اول"}
    </button>
  );
};

export default DynamicItems;