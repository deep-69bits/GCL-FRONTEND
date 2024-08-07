import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-footerBg  text-white flex-col flex gap-8 items-center py-10 px-4 ">
      <Image src={"/tech-mahindra-footer.svg"} alt="" width={300} height={60} />
      <div className="flex flex-row  text-center items-center gap-10 font-semibold">
        <a
          href="https://globalchessleague.com/privacy-policy/"
          target="__blank"
        >
          <li className="flex">PRIVACY</li>
        </a>
        <a href="https://globalchessleague.com/terms-of-use/" target="__blank">
          <li className="flex">TERMS OF USE</li>
        </a>
      </div>
      <div className="flex lg:justify-end justify-center w-full">
        <Image
          className=" "
          src={"/next-now-logo.svg"}
          alt=""
          width={200}
          height={60}
        />
      </div>
      <div className="text-sm font-semibold">
        © 2024, Global Chess League. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
