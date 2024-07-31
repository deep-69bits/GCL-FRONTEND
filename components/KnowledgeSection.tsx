import React from "react";
import Title from "./Text/Title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Card = () => {
  return (
    <div className="bg-white text-black">
      <img
        src="https://s3-alpha-sig.figma.com/img/8e5d/ce43/7a8daecaad82a51ba77915f3e6de9f2b?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OJVDhEGf0by-4Ut7DUQs-dDunAs6MVqlUsIKgWIz-zdLkR-V95sGzTfxUtRMOTVLfAKvqNJKaPXwOntzfFmCwom37DHkgoY4JSwEfc4anXwmCqlLdWUV1wq~Xp4GtAk9kbEqUSqGPjsZHqP5cYbKcJbDZoG7uO460rz2yJbrKThW1UuXErL5NQKFdx-CatSRGgOXgzYPblieO8sKnIdWyTkUNF9bv~EQQ~ggPXURjbDlDjSsb-C3yGjwokMImM7QefEbXUodxozFF9FFyioSxSN05hgYTBAd8O2u2wagyRJmjtfxUtiu1MCxpMalrtXSnVaZKvZM9uH4FlxE1AbHGw__"
        alt=""
        className="w-full"
      />
      <div className="pt-2 pb-4 px-2">
        <div className="text-lg font-semibold">
          Join the leading Chess Club!
        </div>
        <div className="font-medium text-[#424242]">
          In a world-changing move, Triveni Continental Kings moved from a
          position #9 to making it.....
        </div>
      </div>
    </div>
  );
};
const KnowledgeSection = () => {
  return (
    <div className="bg-black  flex flex-col items-center  gap-8  pt-14 pb-10  px-20 text-white">
      <Title>KNOWLEDGE HUB</Title>
      <div className="text-[#E6FF00]">
        Explore our curated resources and learning materials, including links to
        relevant articles, videos, and tools!
      </div>
      <Carousel>
        <CarouselContent className="gap-x-4">
          <CarouselItem className="basis-1/4">
            <Card />
          </CarouselItem>
          <CarouselItem className="basis-1/4">
            <Card />
          </CarouselItem>
          <CarouselItem className="basis-1/4">
            <Card />
          </CarouselItem>
          <CarouselItem className="basis-1/4">
            <Card />
          </CarouselItem>
          <CarouselItem className="basis-1/4">
            <Card />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default KnowledgeSection;
