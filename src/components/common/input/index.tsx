import React from 'react';

interface InputProps {
  width:number;
  height:number;
  value: string | number; 
  onChange: (value: string | number) => void;
  style?: React.CSSProperties; 
  placeholder?: string;
}

const DynamicInput: React.FC<InputProps> = ({
  width,
  height,
  value,
  onChange,
  style, 
  placeholder,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      className="border border-gray-300 rounded-md px-2 py-1 w-full"
      style={{
        ...style, 
        borderRadius: '6px',
        border: '1px solid #e2e8f0',
        width: `${width}px`,
        height: `${height}px`
      }}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default DynamicInput;
