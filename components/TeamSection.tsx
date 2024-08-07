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
  member: {
    name: string;
    position: string;
    image: string;
    description: string;
  };
}) => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-black  to-[#3B193D] items-center gap-2">
      <div className="font-bold text-xl text-center">{member.name}</div>
      <div className="font-medium text-center">{member.position}</div>
      <img
        alt={member.name}
        height={200}
        className="relative -bottom-10 z-0"
        width={500}
        src={member.image}
      />
      <div className="bg-white  text-[#ED00B8] z-10 text-lg font-semibold px-16 ">
        Jury
      </div>
    </div>
  );
};

const Members = [
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image: "/team/peyush.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image: "/team/peyush.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image: "/team/peyush.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image: "/team/peyush.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image: "/team/peyush.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
];

const Mentors = [
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image: "/team/peyush.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image: "/team/peyush.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image: "/team/peyush.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image: "/team/peyush.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image: "/team/peyush.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image: "/team/peyush.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
];

const TeamSection = () => {
  return (
    <div className="flex flex-col items-center gap-8 text-white">
      <div className="z-10 py-20 flex w-full flex-col items-center">
        <Title variant="pink">JURY & MENTORS PANEL</Title>
        <div className="grid grid-flow-row gap-4  px-10 mt-10 lg:grid-cols-5 grid-cols-1 md:grid-cols-2">
          {Members.map((item, index) => {
            return <TeamCard key={index} member={item} />;
          })}
        </div>
        <Carousel className="lg:w-[92%] mt-10 w-[75%] pt-8">
          <CarouselContent className="gap-x-4">
            {Mentors.map((card, index) => (
              <CarouselItem key={index} className="lg:basis-1/5 ">
                <TeamCard member={card} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default TeamSection;
