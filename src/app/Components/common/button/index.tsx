import React from "react";

interface ButtonProps {
  text: string;
  width: number;
  height: number;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  fontSize?: string;
  fontWeight?: number;
  padding?: number;
  borderRadius?: number;
  icon?: string;
  type?: "button" | "submit" | "reset"; // Define the type prop
}

const DynamicButton: React.FC<ButtonProps> = ({
  text,
  width,
  height,
  onClick,
  bgColor,
  fontSize,
  fontWeight,
  padding,
  borderRadius,
  icon,
  type = "button", // Set default value for type prop
}) => {
  return (
    <button
      className={`bg-customBlue hover:bg-customBlueLight text-white`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${borderRadius}px`,
        border: "none",
        cursor: "pointer",
        fontSize: fontSize,
        fontWeight: `${fontWeight}`,
        padding: `${padding}px`,
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
      }}
      onClick={onClick}
      type={type} // Use the type prop
    >
      {icon && <img src={icon} alt="button-icon" style={{ marginRight: "20px" }} />}
      {text}
    </button>
  );
};

export default DynamicButton;
