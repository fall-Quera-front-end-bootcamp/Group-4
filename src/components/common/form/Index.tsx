import React from 'react';

interface FormProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({
  style,
  children,
}) => {
  return (
    <form
    className="bg-white p-8 shadow-md flex flex-col justify-center items-center fixed top-0 left-0 right-0 bottom-0 m-auto rounded-lg rounded-bl-lg rounded-br-lg"
    style={style}
    >
      {children}
    </form>
  );
};

export default Form;
