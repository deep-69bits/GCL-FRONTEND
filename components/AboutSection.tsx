import React from "react";
import Title from "./Text/Title";
// import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="bg-white text-black flex flex-col gap-8 py-20 lg:px-10 px-4 ">
      <Title variant="purple">ABOUT</Title>
      <div className="text-center text-lg lg:w-1/2 w-full m-auto">
        The Next Move is a global chess innovation challenge that invites
        creative minds from all backgrounds to reimagine the future of chess.
        This competition is your opportunity to bring fresh ideas to one of the
        worlds oldest games, pushing the boundaries of technology, strategy, and
        engagement in the chess world
      </div>
      <div className="lg:w-1/2 w-full text-lg text-center m-auto">
        <span className="font-bold">#TheNextMove</span>
        challenge welcomes everyone with the zeal to
        <span className="font-bold">#ReimagineTheGame .</span>
        The possibilities are endless! Were open to any idea that can innovate
        or enhance the world of chess.
      </div>
      {/* <Image
        alt=""
        className="m-auto"
        height={400}
        width={700}
        src={"/about.svg"}
      /> */}
    </div>
  );
};

export default AboutSection;
