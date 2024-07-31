import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="max-w-[2000px] m-auto">
      <Header />
      {children} 
      <Footer />
    </div>
  );
};

export default Layout;
