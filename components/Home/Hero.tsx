import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full  lg:bg-seasonBg bg-cover">
      <a href="https://globalchessleague.com/tech-mahindra-global-chess-league-to-host-its-second-edition-in-london/" target="__blank">
        <Image
          src={"/knowmore.webp"}
          className=" w-screen"
          alt=""
          width={1000}
          height={200}
        />
      </a>
    </div>
  );
};

export default Hero;
