import React from "react";
// import "./style.css";

const Loading = () => {
  return (
    <div className="container show">
      <div className="flex">
        <div className="loader"></div>
      </div>
      <div className="load-text" >در حال بارگذاری... لطفا صبور باشید.</div>
    </div>
  );
};

export default Loading;
