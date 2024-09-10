import React from "react";

const style = {
  width: "min(40vw,100%)",

  marginInline: "auto",
  minHeight: "60vh",
};

const FormLayout = ({ title, children }) => {
  return (
    <div
      style={style}
      className="flex flex-col items-center gap-6 py-3 px-4 bg-[#4b89d53e] shadow-md rounded-md "
    >
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default FormLayout;
