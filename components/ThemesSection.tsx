import React from "react";
import Title from "./Text/Title";
import Image from "next/image";

export const ThemesSection = () => {
  const ThemeItems = [
    {
      logo: "/themes/Vector(17).svg",
      title: "Education and Learning",
      description:
        "This theme explores innovative approaches to integrate chess into educational systems, revolutionize learning methods, and make the  game more accessible to learners of all ages and backgrounds.",
    },
    {
      logo: "/themes/Vector(18).svg",
      title: "Community Engagement and Social Impact",
      description:
        "This theme explores innovative approaches to integrate chess into educational systems, revolutionize learning methods, and make the game more accessible to learners of all ages and backgrounds.",
    },
    {
      logo: "/themes/Vector(19).svg",
      title: "Reimagining the Chess Experience",
      description:
        "This theme explores innovative approaches to integrate chess into educational systems, revolutionize learning methods, and make the  game more accessible to learners of all ages and backgrounds.",
    },
    {
      logo: "/themes/Group(4).svg",
      title: "Digital and Technological Innovation",
      description:
        "This theme explores innovative approaches to integrate chess into educational systems, revolutionize learning methods, and make the  game more accessible to learners of all ages and backgrounds.",
    },
    {
      logo: "/themes/Vector(20).svg",
      title: "Business, Arts & Others",
      description:
        "This theme explores innovative approaches to integrate chess into educational systems, revolutionize learning methods, and make the  game more accessible to learners of all ages and backgrounds.",
    },
  ];
  return (
    <div className="bg-white py-20 lg:px-10 px-4 text-black">
      <Title variant="pink">CHALLENGES AND THEMES</Title>
      <div className="grid grid-flow-row lg:grid-cols-5 gap-5 grid-cols-1 my-10">
        {ThemeItems.map((item, index) => {
          return (
            <div
              key={index}
              className="grid group flip-card grid-flow-col cursor-pointer grid-rows-3 items-center h-full px-10 border bg-gradient-to-b from-black via-[#3B193D] to-[#3B193D]  py-10 gap-4 text-center"
            >
              <h5 className="text-xl text-white font-bold ">{item.title}</h5>
              <div className="text-[#ED00B8] group-hover:hidden underline ">
                Know More
              </div>
              <h6 className="text-sm  text-[#ED00B8] group-hover:block hidden  font-[400]">
                {item.description}
              </h6>
              <Image
                className="m-auto mb-5"
                src={item.logo}
                alt=""
                width={80}
                height={80}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
