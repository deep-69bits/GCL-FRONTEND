import React from "react";
import { Bruno_Ace_SC } from "next/font/google";
import { Urbanist } from "next/font/google";

// Configure the Bruno Ace SC font with the necessary options
const brunoAceSC = Bruno_Ace_SC({ subsets: ["latin"], weight: ["400"] });
const urbanist = Urbanist({ subsets: ["latin"], weight: ["700"] });

const Title = ({ children, variant }: any) => {
  if (variant == "purple")
    return (
      <div className="text-center">
        <h2 className="bg-gradient-to-r from-[#D500AB] lg:text-5xl text-3xl  to-[#7F60F9] inline-block text-transparent bg-clip-text">
          <span className={brunoAceSC.className}>HACKATHON</span>
        </h2>
        <h3 className="bg-[#ED00B8] lg:text-5xl text-3xl   block text-transparent bg-clip-text">
          <span className={urbanist.className}>{children}</span>
        </h3>
      </div>
    );
  if (variant == "pink")
    return (
      <div className="text-center">
        <h3 className="bg-[#ED00B8] lg:text-5xl text-3xl   block text-transparent bg-clip-text">
          <span className={urbanist.className}>{children}</span>
        </h3>
      </div>
    );
  return (
    <div className="text-center">
      <h2 className="bg-gradient-to-r from-[#D500AB] lg:text-5xl text-3xl  to-[#7F60F9] inline-block text-transparent bg-clip-text">
        <span className={brunoAceSC.className}>HACKATHON</span>
      </h2>
      <h3 className="text-[#E6FF00] font-[700] lg:text-5xl text-3xl">
        <span className={urbanist.className}>{children}</span>
      </h3>
    </div>
  );
};

export default Title;
