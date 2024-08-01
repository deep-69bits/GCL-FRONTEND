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
    <div className="flex flex-col text-black items-center gap-2">
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
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image:
      "https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2021/08/17064940/image30-1200x900-1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam vestibulum auctor sit nulla elementum ipsum. Rutrum purus a pharetra ...",
  },
];

const MentorSection = () => {
  return (
    <div className="flex flex-col bg-white items-center gap-8 text-white">
      <div className="z-10 py-20 flex w-full flex-col items-center">
        <Title variant="purple">MEET THE MENTORS</Title>
        <Carousel className="lg:w-[92%] w-[75%] pt-8">
          <CarouselContent className="gap-x-4">
            {Members.map((card, index) => (
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

export default MentorSection;
