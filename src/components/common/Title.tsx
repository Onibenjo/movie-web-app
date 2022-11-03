import React from "react";

const Title = ({ children }) => {
  return (
    <div className="text-3xl font-bold flex items-center">
      <div className="h-[35px] w-1 bg-accent rounded-2xl mr-2" />
      {children}
    </div>
  );
};

export default Title;
