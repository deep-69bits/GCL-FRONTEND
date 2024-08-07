import React from "react";
import Title from "./Text/Title";

const GradientBorder = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-r from-[#6DDCFF]  to-[#7F60F9] p-[3px]">
      <div className="text-base font-black text-black  bg-white">
        {children}
      </div>
    </div>
  );
};

const PrizesSection = () => {
  const Prizes = [
    {
      prizeTitle: "Winner",
      amount: "2000",
      points: [
        "Partnership & Sponsorship opportunities from global leaders",
        "Cloud Credits",
        " GCL Season 2 Merchandise",
      ],
    },
    {
      prizeTitle: "Runner Up",
      amount: "1500",
      points: [
        "Partnership & Sponsorship opportunities from global leaders",
        "Cloud Credits",
        " GCL Season 2 Merchandise",
      ],
    },
    {
      prizeTitle: "Special Mention",
      amount: "500",
      points: [
        "Partnership & Sponsorship opportunities from global leaders",
        "Cloud Credits",
        " GCL Season 2 Merchandise",
      ],
    },
  ];

  const SubItems = [
    {
      title: "Top 4 Finalists",
      description:
        "Each of the Top 4 Finalists will be awarded a cash prize of $1,000, making their hard work and ingenuity truly worthwhile.",
    },
    {
      title: "Winner",
      description:
        "The ultimate winning team of Next In 2.0 will seize the spotlight with an exclusive cash prize of $2,000.",
    },
    {
      title: "Special Mention Category",
      description:
        "A special prize pool of $500 is reserved for remarkable innovations and Ideas that stand out from the rest, acknowledging the brilliance of these exceptional minds.",
    },
    {
      title: "Other Rewards",
      description:
        "In addition to the grand prize, other rewards include exclusive perks such as tickets to the GCL 2024, Meet & Greet with the Hackathon Ambassador, Co-Branded Certificates, Exclusive GCL Merchandise & Other Exciting prizes!",
    },
  ];
  return (
    <div className="bg-white  flex flex-col items-center  gap-8  py-20 lg:px-10 px-4 text-black">
      <Title variant="purple">PRIZES</Title>
      <GradientBorder>
        <div className="grid grid-flow-row lg:grid-cols-3 grid-cols-1 w-full">
          {Prizes.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index % 3 == 2
                    ? "px-10 py-10 flex-col gap-4 items-center sm:border-b-[#7F60F9] sm:border-b-[3px] lg:border-b-0"
                    : "px-10 py-10 flex-col gap-4 items-center  lg:border-r-[#7F60F9] border-r-[3px] border-b-[#7F60F9] border-b-[3px] lg:border-b-0"
                }
              >
                <div className="text-4xl text-[#4E16BF] text-center font-semibold pb-1">
                  {item.prizeTitle}
                </div>
                <div className="text-6xl text-[#4E16BF] text-center font-bold pb-8">
                  ${item.amount}
                </div>
                <div className="w-fit font-light">
                  {item.points.map((it, ind) => {
                    return <li key={ind}>{it}</li>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </GradientBorder>

      <div className="flex flex-col lg:w-1/2 w-full text-center mt-10 gap-8">
        {SubItems.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex m-auto gap-4">
                <button className="text-red hover:before:bg-red text-white  w-60 bg-gradient-to-r from-[#432B74] to-[#ED00B8] relative h-[50px]  overflow-hidden border  bg-white px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:shadow-[#EBFF00] hover:before:left-0 hover:before:w-full">
                  <span className="relative z-10">{item.title}</span>
                </button>
              </div>
              <div>{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrizesSection;
