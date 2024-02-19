import React from "react";

interface InputProps {
  width: number;
  height: number;
  value: string;
  onChange: (value: string) => void;
  style?: React.CSSProperties;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
  backgroundColor?: string;
  
}

const DynamicInput: React.FC<InputProps> = ({
  width,
  height,
  value,
  onChange,
  style,
  placeholder,
  type = "text",
  icon,
  backgroundColor = "#fff",
  
}) => {
  return (
    <div style={{ position: "relative", width: `${width}px` }}>
      <input
        type={type}
        className="border border-gray-300 rounded-md px-4 py-1 w-full"
        style={{
          ...style,
          borderRadius: "6px",
          border: "1px solid #e2e8f0",
          width: `${width}px`,
          height: `${height}px`,
          background: backgroundColor,
        }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {icon && (
        <div
          style={{
            position: "absolute",
            right: "8px",
            top: "55%",
            transform: "translateY(-50%)",
          }}
        >
          {icon}
        </div>
      )}
    </div>
  );
};

export default DynamicInput;
