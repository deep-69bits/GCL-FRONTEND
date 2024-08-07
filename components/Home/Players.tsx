import React from "react";
import Title from "../Text/Title";
import Image from "next/image";


const PlayersData = [
  {
    title: "ICON PLAYERS FOR SEASON 2",
    image: "/players/p1.png",
  },
  {
    title: "SUPERSTAR MEN PLAYERS FOR SEASON 2",
    image: "/players/p2.png",
  },
  {
    title: "WOMEN SUPERSTARS FOR SEASON 2",
    image: "/players/p3.png",
  },
  {
    title: "PRODIGY PLAYERS FOR SEASON 2",
    image: "/players/p4.png",
  },
];
const Players = () => {
 
  return (
    <div className="bg-white  w-full flex flex-col items-center  gap-8  py-20 lg:px-10 px-4 text-black">
      <Title variant="pink">PLAYERS OF GLOBAL CHESS LEAGUE</Title>
      <div className="w-full flex flex-col gap-10">
         {
            PlayersData.map((item:any,index:number)=>{
                return (
                  <div key={index} className="w-full">
                    <div className="text-white py-2 text-center w-full bg-[#281A48] lg:text-[34px] text-[20px] font-semibold">
                      {item.title}
                    </div>
                    <Image alt="" src={item.image} className="w-full"  width={700} height={500}/>
                  </div>
                );
            })
         }
      </div>
    </div>
  );
};

export default Players;
