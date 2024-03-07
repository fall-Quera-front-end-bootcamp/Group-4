import React from "react";
import DynamicItems from "../item";
const HorizontalItemsContainer = () => {
  return (
    <div style={{ display: "flex", gap: "32px", width: "fit-content", height: "80px" }}> {/* Container with flex display */}
      <DynamicItems text="پروژه سوم"/> {/* Example DynamicItems component */}
      <DynamicItems text="پروژه دوم"/> {/* Example DynamicItems component */}
      <DynamicItems text="پروژه اول"/> {/* Example DynamicItems component */}
    </div>
  );
};

export default HorizontalItemsContainer;
