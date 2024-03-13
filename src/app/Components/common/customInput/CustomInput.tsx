import React from 'react';

interface CustomFileInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const CustomFileInput: React.FC<CustomFileInputProps> = ({
  onChange,
  label,
}) => {
  const inputRef = React.createRef<HTMLInputElement>();

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="custom-file-input">
      <button onClick={handleClick} className="custom-file-button">
        {label}
      </button>
      <input
        ref={inputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomFileInput;
