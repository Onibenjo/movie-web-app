import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
