import React from "react";
import Title from "./Text/Title";

const GradientBorder = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-r from-[#6DDCFF]  to-[#7F60F9] p-[3px]">
      <div className="text-base font-black text-black py-4 bg-white">
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
      <div className="grid grid-flow-row lg:grid-cols-3 grid-cols-1 w-full">
        {Prizes.map((item, index) => {
          return (
            <GradientBorder key={index}>
              <div className="px-10 py-10 flex-col gap-4 items-center">
                <div className="text-4xl text-[#4E16BF] text-center font-semibold pb-1">
                  {item.prizeTitle}
                </div>
                <div className="text-6xl text-[#4E16BF] text-center font-bold pb-8">
                  ${item.amount}
                </div>
                <div className="w-fit font-light m-auto">
                  {item.points.map((it, ind) => {
                    return <li key={ind}>{it}</li>;
                  })}
                </div>
              </div>
            </GradientBorder>
          );
        })}
      </div>
      <div className="flex flex-col lg:w-1/2 w-full text-center mt-10 gap-8">
        {SubItems.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <div className="font-semibold bg-gradient-to-r px-4 text-white py-3 m-auto w-60 from-[#432B74] to-[#ED00B8]">
                {item.title}
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
