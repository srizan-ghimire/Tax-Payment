import React from "react";

const Shape = () => {
  return (
    <div>
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute max-sm:-top-8 top-10 left-0 transform -translate-x-1/2 -translate-y-1/2"
          width="600"
          height="600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="300" cy="300" r="300" fill="#3b82f6" fillOpacity="0.1" />
        </svg>
        <svg
          className="absolute max-sm:-bottom-36 bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"
          width="500"
          height="500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="250" fill="#3d52a0" fillOpacity="0.1" />
        </svg>
      </div>
    </div>
  );
};

export default Shape;
