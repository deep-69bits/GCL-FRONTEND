"use client";
import React, { useState } from "react";
import Image from "next/image";

const NavItems = [
  {
    icon: "/assests/icons/majesticons_home.svg",
    name: "Home",
  },
  {
    icon: "/assests/icons/chess.svg",
    name: "Tournaments",
  },
  {
    icon: "/assests/icons/twemoji_chess-pawn.svg",
    name: "Hackathon",
  },
  {
    icon: "/assests/icons/bxs_chat.svg",
    name: "Social",
  },
  {
    icon: "/assests/icons/bitcoin-icons_graph-filled.svg",
    name: "2023",
  },
];

const CrossIcon = () => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div className="bg-black  sticky border-b border-b-white text-white  lg:flex hidden justify-between items-center">
        <div className="border-r border-r-white px-10 py-2">
          <Image src={"/Logo_Coloured.svg"} alt="" width={120} height={80} />
        </div>
        <div className="w-full flex flex-col text-center item-center justify-center">
          <div className="border-b-white text-transparent py-2">{"."}</div>
          <div className="flex gap-x-12 border-t justify-center items-center py-2">
            {NavItems.map((item, index) => {
              return (
                <li key={index} className="flex gap-x-2 item-center">
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="text-lg font-[500]">{item.name}</span>
                </li>
              );
            })}
          </div>
        </div>
        <div className="border-l   border-l-white px-10 py-6">
          <li className="flex gap-x-2 justify-center item-center">
            <Image
              src={"/assests/icons/tabler_user-filled.svg"}
              alt=""
              width={20}
              height={20}
            />
            LOGIN
          </li>
        </div>
      </div>

      <div className="bg-black  sticky border-b border-b-white text-white py-4 px-4 flex lg:hidden justify-between items-center">
        <div>
          <Image src={"/Logo_Coloured.svg"} alt="" width={120} height={80} />
        </div>
        <div className="flex items-center gap-8">
          <li className="flex list-none gap-x-2 justify-center item-center">
            <Image
              src={"/assests/icons/tabler_user-filled.svg"}
              alt=""
              width={20}
              height={20}
            />
            LOGIN
          </li>
          <li className="list-none">
            {!menuOpen ? (
              <Image
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
                src={"/menu-line.svg"}
                alt=""
                width={20}
                className="cursor-pointer"
                height={20}
              />
            ) : (
              <div
                className="cursor-pointer"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                <CrossIcon />
              </div>
            )}
          </li>
        </div>
      </div>

      {menuOpen ? (
        <div className="bg-black  sticky border-b  text-white   flex lg:hidden  ">
          <div className="flex flex-col gap-x-12 w-full justify-center items-center ">
            {NavItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex border-b border-white py-2 w-full"
                >
                  <div className="px-4 items-center flex gap-x-2 justify-start">
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="text-lg font-[500]">{item.name}</span>
                  </div>
                </li>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
