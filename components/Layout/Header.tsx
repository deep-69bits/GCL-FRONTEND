"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavItems = [
  {
    icon: "/assests/icons/majesticons_home.svg",
    name: "Home",
    path: "/",
  },
  {
    icon: "/assests/icons/twemoji_chess-pawn.svg",
    name: "theNextMove",
    path: "/thenextmove",
  },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="bg-black  w-full sticky border-b border-b-[#98A2B3] text-white  lg:flex hidden justify-between items-center">
        <div className="px-10 w-1/3 py-4">
          <Image src={"/Logo_Coloured.svg"} alt="" width={120} height={80} />
        </div>
        <div className="w-1/3 flex flex-col text-center item-center justify-center">
          <div className="flex gap-x-12  justify-center items-center py-2">
            {NavItems.map((item, index) => {
              return (
                <Link
                  href={item.path}
                  key={index}
                  className={
                    pathname === item.path
                      ? "flex gap-x-2 item-center underline"
                      : "flex gap-x-2 item-center "
                  }
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="text-lg font-[500]">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="px-10 py-6  w-1/3">
          <li className="flex gap-x-2 justify-end item-center">
            For Support: support@gmail.com
          </li>
        </div>
      </div>

      <div className="bg-black  sticky border-b border-b-[#98A2B3] text-white py-4 px-4 flex lg:hidden justify-between items-center">
        <div>
          <Image src={"/Logo_Coloured.svg"} alt="" width={120} height={80} />
        </div>
        <div className="flex items-center gap-2">
          {NavItems.map((item, index) => {
            return (
              <Link
                href={item.path}
                key={index}
                className={
                  pathname === item.path
                    ? "flex gap-x-2 item-center underline"
                    : "flex gap-x-2 item-center "
                }
              >
                <Image src={item.icon} alt="" width={20} height={20} />
                <span className="text-lg font-[500]">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
