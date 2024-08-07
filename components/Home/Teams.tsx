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
    text: "Triveni Continental Kings",
    image: "/ourteams/image 68.svg",
  },
  {
    text: "upGrad Mumba Masters",
    image: "/ourteams/image 69.svg",
  },
  {
    text: "Ganges Grandmasters",
    image: "/ourteams/image 70.svg",
  },
  {
    text: "SG Alpine Warriors",
    image: "/ourteams/image 71.svg",
  },
  {
    text: "Chingari Gulf Titans",
    image: "/ourteams/image 72.svg",
  },
  {
    text: "Balan Alaskan Knights",
    image: "/ourteams/image 73.svg",
  },
];

const Teams = () => {
  return (
    <div className="bg-white  w-full flex flex-col items-center  gap-8  py-20 lg:px-10 px-4 text-black">
      <Title variant="pink">OUR TEAMS</Title>
      <div className="grid grid-flow-row lg:grid-cols-3 grid-cols-1 gap-10 lg:w-fit w-full">
        {TeamsData.map((item: any, index: number) => {
          return (
            <div key={index} className="lg:max-w-[250px] w-full">
              <GradientBorder>
                <div className="p-10  flex flex-col items-center justify-center  h-[280px]">
                  <Image
                    src={item.image}
                    alt=""
                    className="w-[150px] h-full"
                    width={150}
                    height={300}
                  />
                </div>
              </GradientBorder>
              <div className="text-2xl text-center mt-2 font-semibold text-[#ED00B8]">
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teams;
