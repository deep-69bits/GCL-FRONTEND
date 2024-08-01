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
      <Title variant="purple">CHALLENGES AND THEMES</Title>
      <div className="grid grid-flow-row lg:grid-cols-3 grid-cols-1 my-10">
        {ThemeItems.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center px-10 border border-[#ED00B8] py-10 gap-4 text-center"
            >
              <Image src={item.logo} alt="" width={80} height={80} />
              <h5 className="text-lg text-[#4E16BF] font-bold ">
                {item.title}
              </h5>
              <h6 className="text-sm font-[400]">{item.description}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};
