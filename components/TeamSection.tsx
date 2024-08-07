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

const MentorCard = ({
  member,
}: {
  member: {
    name: string;
    position: any;
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
        Mentor
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
    name: "Arkady Dvorkovich",
    position: "President At FIDE",
    image: "/team/r1.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },

  {
    name: "Viswanathan Anand",
    position: "Chess Grandmaster",
    image: "/team/r2.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Sachin Vyas",
    position: "Co-Founder At Upside Health",
    image: "/team/sachin.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Nick Mason",
    position: "CEO & Founder At Turtl",
    image: "/team/nick.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
];

const Mentors = [
  {
    name: "Anirudh Akella",
    position: <div>Partnerships & Growth Lead <br/> @ Etherspot</div>,
    image: "/team/Anirudh 1.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Kabir Punde",
    position: (
      <div>
        Founder <br /> @ Invrse Digital and Studio Griot
      </div>
    ),
    image: "/team/Kabir Punde 1.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Kunal Davey",
    position: (
      <div>
        Indirect Tax Transformation Manager <br /> @ a Big4 Consulting Firm
      </div>
    ),
    image: "/team/Kunal_Photo 1.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Lokesh Natoo",
    position: (
      <div>
        {" "}
        India Center Head <br /> @ Altus Group
      </div>
    ),
    image: "/team/Lokesh 1.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Raja Roy",
    position: (
      <div>
        VP - Digital Transformation <br /> @ TechMahindra
      </div>
    ),
    image: "/team/Raja-Photo 1.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Vijay Nadadur",
    position: (
      <div>
        {" "}
        CEO <br /> @ Stride.ai
      </div>
    ),
    image: "/team/Vijay (1) 1.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
  {
    name: "Suryadeep Verma",
    position: (
      <div>
        Chief Marketing Officer <br /> @ Comviva
      </div>
    ),
    image: "/team/image 58.svg",
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
                <MentorCard member={card} />
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
