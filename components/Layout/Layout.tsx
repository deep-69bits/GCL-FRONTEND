import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="max-w-[2000px] m-auto">
      <Header />
      <div className="pt-20">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
