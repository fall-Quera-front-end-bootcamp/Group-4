import React from "react";

interface InputProps {
  width: number;
  height: number;
  value: string;
  onChange: (value: string) => void;
  style?: React.CSSProperties;
  placeholder?: string;
  type?: string;
}

const DynamicInput: React.FC<InputProps> = ({
  width,
  height,
  value,
  onChange,
  style,
  placeholder,
  type = "text",
}) => {
  return (
    <input
      type={type}
      className="border border-gray-300 rounded-md px-2 py-1 w-full"
      style={{
        ...style,
        borderRadius: "6px",
        border: "1px solid #e2e8f0",
        width: `${width}px`,
        height: `${height}px`,
      }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default DynamicInput;
