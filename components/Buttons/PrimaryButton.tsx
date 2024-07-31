import React from "react";

const PrimaryButton = ({ children }: any) => {
  return (
    <button className="bg-[#ED00B8] text-white px-8 font-[500]  py-3 text-xl rounded-full">
      {children}
    </button>
  );
};

export default PrimaryButton;
