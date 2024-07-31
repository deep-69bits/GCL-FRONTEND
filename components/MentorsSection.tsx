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
  member: { name: string; position: string; image: string };
}) => {
  return (
    <div className="flex flex-col text-black items-center gap-2">
      <img alt={member.name} height={200} width={500} src={member.image} />
      <div>
        <div className="font-bold text-xl text-center">{member.name}</div>
        <div className="font-medium text-center">{member.position}</div>
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
  },
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image:
      "https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2021/08/17064940/image30-1200x900-1.png",
  },
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image:
      "https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2021/08/17064940/image30-1200x900-1.png",
  },
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image:
      "https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2021/08/17064940/image30-1200x900-1.png",
  },
  {
    name: "Peeyush Dubey",
    position: "CMO at Tech Mahindra",
    image:
      "https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2021/08/17064940/image30-1200x900-1.png",
  },
];

const MentorSection = () => {
  return (
    <div className="flex flex-col bg-white items-center gap-8 text-white">
      <div className="z-10 py-20 flex w-full flex-col items-center">
        <Title variant="purple">MEET THE JURY</Title>
        <Carousel className="pt-10 w-[92%]">
          <CarouselContent>
            {Members.map((item, index) => {
              return (
                <CarouselItem key={index} className="basis-1/5">
                  <TeamCard member={item} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </div>
  );
};

export default MentorSection;
