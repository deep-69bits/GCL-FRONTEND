import Image from "next/image";
import React from "react";

const GradientButton = ({ children }: any) => {
  return (
    <button className="bg-gradient-to-r flex items-center gap-x-4 from-[#2D1C42] to-[#D500AB] text-white px-8 font-[500]  py-3 text-xl ">
      <span className="font-bold">{children}</span>
      <Image alt="" src={"/right-arrow.svg"} height={20} width={60} />
    </button>
  );
};

export default GradientButton;
