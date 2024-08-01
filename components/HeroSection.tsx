import React from "react";
import Image from "next/image";
import GradientButton from "./Buttons/GradientButton";
const HeroSection = () => {
  return (
    <div className="bg-heroBg text-white bg-cover  bg-no-repeat py-20  pt-20 lg:px-10">
      <div className="lg:flex  items-center justify-between ">
        <div className="flex flex-col items-start">
          <Image src={"/Logo_Coloured.svg"} alt="" width={300} height={600} />
          <div className="border border-white mt-4">
            <div className="bg-gradient-to-r font-semibold text-center py-2 from-[#2D1C42] to-[#D500AB]">
              In Partnership With
            </div>
            <div className="item-center justify-center flex py-6 ">
              <Image src={"herologo2.svg"} alt="" width={350} height={100} />
            </div>
          </div>
          <h1 className="text-3xl mt-4 font-bold text-center">Presents</h1>
        </div>
        <Image
          src={"/the-next-move_logo_white 1.png"}
          alt=""
          className="-translate-x-20 animate-pulse"
          width={600}
          height={600}
        />
        <div className="flex items-center gap-5 flex-col">
          <h1 className="text-3xl font-bold text-center">
            Global Chess <br /> Innovation Challenge
          </h1>
          <div className="flex-col items-center flex gap-2">
            <GradientButton>Register Now</GradientButton>
            <div> Last date to register 31ST July</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
