import React from "react";
import Image from "next/image";
import Title from "./Text/Title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const TeamCard = ({
  member,
}: {
  member: { name: string; position: string; image: string; description: string; };
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <img alt={member.name} height={200} width={500} src={member.image} />
      <div>
        <div className="font-bold text-xl text-center">{member.name}</div>
        <div className="font-medium text-center">{member.position}</div>
        <div className="text-center text-sm mt-4">{member.description}</div>
      </div>
    </div>
  );
};

const Members = [
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image:
      "https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2021/08/17064940/image30-1200x900-1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image:
      "https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2021/08/17064940/image30-1200x900-1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image:
      "https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2021/08/17064940/image30-1200x900-1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image:
      "https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2021/08/17064940/image30-1200x900-1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image:
      "https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2021/08/17064940/image30-1200x900-1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
];

const TeamSection = () => {
  return (
    <div className="flex flex-col items-center gap-8 text-white">
      <Image
        className="w-full  max-w-[2000px] absolute z-0"
        src="/bg2.svg"
        alt=""
        width={100}
        height={100}
      />
      <div className="z-10 py-20 flex w-full flex-col items-center">
        <Title>MEET THE JURY</Title>
        <div className="grid grid-flow-row gap-4 px-10 mt-10 lg:grid-cols-5 grid-cols-1 md:grid-cols-2">
          {Members.map((item, index) => {
            return <TeamCard key={index} member={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
