import React from "react";
import Title from "./Text/Title";
import Image from "next/image";
import GradientButton from "./Buttons/GradientButton";

const SponsorSection = () => {
  return (
    <div className="bg-white  flex flex-col items-center text-center gap-8  pt-14 pb-10 px-10 text-white">
      <Title variant="purple">OUR SPONSORS</Title>
      <Image alt="" height={200} width={1400} src={"/sponsors.svg"} />
      <h6 className="text-black">
        Interested in becoming a sponsor and supporting innovation in the global
        chess community?
      </h6>
      <GradientButton>Become a Sponsor</GradientButton>
    </div>
  );
};

export default SponsorSection;
