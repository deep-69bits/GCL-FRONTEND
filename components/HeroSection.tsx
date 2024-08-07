import React from "react";
import Image from "next/image";
import GradientButton from "./Buttons/GradientButton";
const HeroSection = () => {
  return (
    <div className="lg:bg-[#3B193D] bg-heroMobile text-white bg-cover  bg-no-repeat lg:py-20  py-10 lg:px-10 px-4">
      <div className="lg:flex  items-center justify-between ">
        <div className="flex flex-col lg:items-start items-center">
          <Image
            src={"/Logo_Coloured.svg"}
            className="w-40 lg:w-80"
            alt=""
            width={300}
            height={600}
          />
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
          className="lg:-translate-x-20 animate-pulse"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default HeroSection;
