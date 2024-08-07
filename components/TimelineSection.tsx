import React from "react";
import Title from "./Text/Title";

type Point = {
  title: string;
  texts: string[];
};

type Timeline = {
  step: string;
  title: string;
  logo: any | null;
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
        {timeline.logo ? (
          <div className=" w-40 font-semibold flex justify-center items-center gap-2 border-2 py-2 m-auto border-[#E6FF00] text-[#E6FF00] ">
           {timeline.logo}   {timeline.step}
          </div>
        ) : (
          <div className="border w-40 py-2 m-auto font-light border-[#E6FF00] text-white ">
            {timeline.step}
          </div>
        )}
        <div className="text-lg font-bold my-2 mt-4 ">{timeline.title}</div>
        <div className="mb-4">{timeline.date}</div>
      </div>
      {/* <div className="bg-white text-black border-[#ED00B8] border p-4">
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
      </div> */}
    </div>
  );
};

const timelines = [
  {
    step: "You are here",
    title: " Registrations And Idea Submission",
    date: "12th May - 31st May",
    logo: (
      <svg
        width="25"
        height="30"
        viewBox="0 0 36 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.0002 0C8.07545 0 0.000198085 8.07525 0.000198085 17.9888C-0.0650519 32.49 16.0112 44.0977 16.6952 44.5815C17.076 44.8534 17.5323 44.9996 18.0002 44.9996C18.4681 44.9996 18.9244 44.8534 19.3052 44.5815C19.9892 44.0977 36.0654 32.49 36.0002 18C36.0002 8.07525 27.9249 0 18.0002 0ZM18.0002 39.9038C14.3754 36.9608 4.45295 27.9923 4.5002 18C4.5002 10.5548 10.5549 4.5 18.0002 4.5C25.4454 4.5 31.5002 10.5548 31.5002 18.0112C31.5474 27.9945 21.6272 36.963 18.0002 39.9038Z"
          fill="#E6FF00"
        />
        <path
          d="M15.7499 21.5655L10.5907 16.4062L7.40918 19.5877L15.7499 27.9285L28.5907 15.0877L25.4092 11.9062L15.7499 21.5655Z"
          fill="#E6FF00"
        />
      </svg>
    ),
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
    step: "Milestone 1",
    title: "Concept Development",
    logo: null,
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
    step: "Milestone2",
    title: "Concept Refinement",
    date: "12th May - 31st May",
    logo: null,
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
    step: "Final Day",
    title: "Final Showcase",
    date: "12th May - 31st May",
    logo: null,
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
      <Title variant="pink">TIMELINE AND STAGES</Title>
      <div className="grid grid-flow-row lg:grid-cols-4 grid-cols-1 justify-center items-center mt-10 gap-10">
        {timelines.map((timeline, index) => (
          <Card key={index} timeline={timeline} />
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
