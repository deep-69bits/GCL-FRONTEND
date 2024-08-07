import React from "react";
import Title from "../Text/Title";
import Image from "next/image";

const GradientBorder = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-r from-[#6DDCFF]  to-[#7F60F9] p-[4px]">
      <div className="text-base font-black text-black  bg-white">
        {children}
      </div>
    </div>
  );
};

const TeamsData = [
  {
    text: "",
    image: "/ourteams/image 68.svg",
  },
  {
    text: "",
    image: "/ourteams/image 69.svg",
  },
  {
    text: "",
    image: "/ourteams/image 70.svg",
  },
  {
    text: "",
    image: "/ourteams/image 71.svg",
  },
  {
    text: "",
    image: "/ourteams/image 72.svg",
  },
  {
    text: "",
    image: "/ourteams/image 73.svg",
  },
];

const Teams = () => {
  return (
    <div className="bg-white  w-full flex flex-col items-center  gap-8  py-20 lg:px-10 px-4 text-black">
      <Title variant="pink">OUR TEAMS</Title>
      <div className="grid grid-flow-row lg:grid-cols-3 grid-cols-1 gap-10">
        {TeamsData.map((item: any, index: number) => {
          return (
            <div key={index}>
              <GradientBorder>
                <div className="p-10  flex flex-col items-center justify-center h-[250px]">
                  <Image
                    src={item.image}
                    alt=""
                    className="w-[150px] h-full"
                    width={150}
                    height={300}
                  />
                </div>
              </GradientBorder>
              <div className="text-2xl text-[#ED00B8]"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teams;
