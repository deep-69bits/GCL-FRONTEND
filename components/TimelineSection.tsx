import React from "react";
import Title from "./Text/Title";

type Point = {
  title: string;
  texts: string[];
};

type Timeline = {
  step: string;
  title: string;
  date: string;
  points: Point[];
};

type CardProps = {
  timeline: Timeline;
};

const Card: React.FC<CardProps> = ({ timeline }) => {
  return (
    <div>
      <div className="text-center">
        <div className="border w-40 py-2 m-auto border-[#E6FF00] text-[#E6FF00] ">
          {timeline.step}
        </div>
        <div className="text-lg font-bold my-2 mt-4 ">{timeline.title}</div>
        <div className="mb-4">{timeline.date}</div>
      </div>
      <div className="bg-white text-black border-[#ED00B8] border p-4">
        {timeline.points.map((point, index) => (
          <div key={index}>
            <h6 className="font-bold ">{point.title}</h6>
            {point.texts.map((text, textIndex) => (
              <li className="ml-8" key={textIndex}>
                {text}
              </li>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const timelines = [
  {
    step: "You are here",
    title: " Registrations And Idea Submission",
    date: "12th May - 31st May",
    points: [
      {
        title: "Idea Submission :",
        texts: [
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
        ],
      },
      {
        title: "Idea Submission :",
        texts: [
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
        ],
      },
      {
        title: "Idea Submission :",
        texts: [
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
        ],
      },
    ],
  },
  {
    step: "You are here",
    title: " Registrations And Idea Submission",
    date: "12th May - 31st May",
    points: [
      {
        title: "Idea Submission :",
        texts: [
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
        ],
      },
      {
        title: "Idea Submission :",
        texts: [
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
        ],
      },
      {
        title: "Idea Submission :",
        texts: [
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
        ],
      },
    ],
  },
  {
    step: "You are here",
    title: " Registrations And Idea Submission",
    date: "12th May - 31st May",
    points: [
      {
        title: "Idea Submission :",
        texts: [
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
        ],
      },
      {
        title: "Idea Submission :",
        texts: [
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
        ],
      },
      {
        title: "Idea Submission :",
        texts: [
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
        ],
      },
    ],
  },
  {
    step: "You are here",
    title: " Registrations And Idea Submission",
    date: "12th May - 31st May",
    points: [
      {
        title: "Idea Submission :",
        texts: [
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
        ],
      },
      {
        title: "Idea Submission :",
        texts: [
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
        ],
      },
      {
        title: "Idea Submission :",
        texts: [
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
          "Anyone worldwide can register, solo or in teams of up to 5 members.",
        ],
      },
    ],
  },
];

const TimelineSection = () => {
  return (
    <div className="bg-black border-b border-white  flex flex-col items-center py-20 lg:px-10 px-4 text-white">
      <Title>TIMELINE AND STAGES</Title>
      <div className="grid grid-flow-row lg:grid-cols-4 grid-cols-1 mt-10 gap-10">
        {timelines.map((timeline, index) => (
          <Card key={index} timeline={timeline} />
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
