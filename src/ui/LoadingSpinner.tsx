import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="lds-ellipsis">
      <div className="bullets"></div>
      <div className="bullets"></div>
      <div className="bullets"></div>
      <div className="bullets"></div>
    </div>
  );
};

export default LoadingSpinner;
