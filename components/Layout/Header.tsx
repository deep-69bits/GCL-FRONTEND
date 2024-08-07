"use client";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
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
const DiscordIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.3034 5.33716C17.9344 4.71103 16.4805 4.2547 14.9629 4C14.7719 4.32899 14.5596 4.77471 14.411 5.12492C12.7969 4.89144 11.1944 4.89144 9.60255 5.12492C9.45397 4.77471 9.2311 4.32899 9.05068 4C7.52251 4.2547 6.06861 4.71103 4.70915 5.33716C1.96053 9.39111 1.21766 13.3495 1.5891 17.2549C3.41443 18.5815 5.17612 19.388 6.90701 19.9187C7.33151 19.3456 7.71356 18.73 8.04255 18.0827C7.41641 17.8492 6.82211 17.5627 6.24904 17.2231C6.39762 17.117 6.5462 17.0003 6.68416 16.8835C10.1438 18.4648 13.8911 18.4648 17.3082 16.8835C17.4568 17.0003 17.5948 17.117 17.7434 17.2231C17.1703 17.5627 16.576 17.8492 15.9499 18.0827C16.2789 18.73 16.6609 19.3456 17.0854 19.9187C18.8152 19.388 20.5875 18.5815 22.4033 17.2549C22.8596 12.7341 21.6806 8.80747 19.3034 5.33716ZM8.5201 14.8459C7.48007 14.8459 6.63107 13.9014 6.63107 12.7447C6.63107 11.5879 7.45884 10.6434 8.5201 10.6434C9.57071 10.6434 10.4303 11.5879 10.4091 12.7447C10.4091 13.9014 9.57071 14.8459 8.5201 14.8459ZM15.4936 14.8459C14.4535 14.8459 13.6034 13.9014 13.6034 12.7447C13.6034 11.5879 14.4323 10.6434 15.4936 10.6434C16.5442 10.6434 17.4038 11.5879 17.3825 12.7447C17.3825 13.9014 16.5548 14.8459 15.4936 14.8459Z"
        fill="white"
      />
    </svg>
  );
};

const Header = () => {
  const pathname = usePathname();
  const lastScrollTop = useRef(0);
  const delta = 15;
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const st = window.pageYOffset || document.documentElement.scrollTop;

        if (Math.abs(lastScrollTop.current - st) <= delta) {
          return;
        }

        if (st > lastScrollTop.current && lastScrollTop.current > 0) {
          // downscroll code
          headerRef.current.style.top = "-80px";
        } else {
          // upscroll code
          headerRef.current.style.top = "0px";
        }

        lastScrollTop.current = st;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        ref={headerRef}
        className="bg-black header  w-full sticky border-b border-b-[#98A2B3] text-white  flex  justify-between items-center"
      >
        <div className="lg:hidden block py-2 px-3">
          <Image src={"/Logo_Coloured.svg"} alt="" width={120} height={80} />
        </div>
        <div className="flex items-center gap-2 lg:hidden  px-3">
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
        <div className="px-10 w-1/3 py-4 hidden lg:block">
          <Image src={"/Logo_Coloured.svg"} alt="" width={120} height={80} />
        </div>
        <div className="w-1/3  flex-col hidden lg:flex text-center item-center justify-center">
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
        <div className="px-10 py-6  w-1/3 hidden lg:block">
          <a href="https://discord.gg/4QqZnmURPT">
            <li className="flex gap-x-2 justify-end item-center">
              Discord: <DiscordIcon /> Join the Event Channel
            </li>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
