import React from "react";
import Title from "./Text/Title";
import Image from "next/image";

const RegistrationCard = ({
  data,
}: {
  data: { title: string; description: string; image: string };
}) => {
  return (
    <div className="border border-[#ED00B8] text-center flex flex-col items-center gap-3 py-10 text-black">
      <Image src={data.image}  alt="" width={80} height={80} className="mb-4" />
      <div className="text-xl font-bold">{data.title}</div>
      <div className="w-2/3">{data.description}</div>
    </div>
  );
};
const data = [
  {
    image: "/registration/Idea.svg",
    title: "Idea Submission",
    description:
      "Gather your team and submit a brief of your idea of what you will be building.",
  },
  {
    image: "/registration/Skills.svg",
    title: "Mentorship Round",
    description:
      "Bring your idea to real life through the expertise of our mentors. ",
  },
  {
    image: "/registration/Presentation.svg",
    title: "Final Showcase",
    description:
      "Get ready to present your innovation to the global veterans of Chess and Technology.",
  },
];
const RegistrationSection = () => {
  return (
    <div className="py-20 lg:px-10 px-4 bg-white">
      <Title variant="pink">HACKATHON ROUNDS</Title>
      <div className="grid grid-flow-row mt-10 grid-cols-1 lg:grid-cols-3">
        {data.map((item, index) => {
          return <RegistrationCard data={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default RegistrationSection;
