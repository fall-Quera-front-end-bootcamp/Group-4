import React, { ChangeEvent } from 'react';

type CheckboxProps = {
  name: string;
  value: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  value,
  onChange,
  disabled,
}) => {
  return (
    <div className='w-[91px] h-[60px] flex justify-between' >
      <input
        type="checkbox"
        name={name}
        checked={value}
        onChange={onChange}
        disabled={disabled}
        className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out rounded bg-cyan-200"
      />
      <input
        type="checkbox"
        name={name}
        checked={value}
        onChange={onChange}
        disabled={disabled}
        className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out rounded bg-cyan-200"
      />
    </div>
  );
};

export default Checkbox;