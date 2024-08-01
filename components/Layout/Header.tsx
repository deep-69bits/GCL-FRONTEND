import React from "react";
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
const Header = () => {
  return (
    <div className="bg-black sticky border-b border-b-white text-white  flex justify-between items-center">
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
  );
};

export default Header;
