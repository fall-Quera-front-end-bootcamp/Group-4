import React from "react";
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ReactLoading type="bars" color="#4AB7D8" height={400} width={400} />
    </div>
  );
};

export default Loading;
