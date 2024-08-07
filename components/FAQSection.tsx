"use client";
import React, { useState } from "react";
import Title from "./Text/Title";

const Arrow = () => {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
      <g clip-path="url(#clip0_52_428)">
        <path
          d="M17.3284 5.43705C17.0998 5.20848 16.7283 5.20848 16.4998 5.43705L9.21406 12.7371L1.91406 5.43705C1.68549 5.20848 1.31406 5.20848 1.08549 5.43705C0.85692 5.66563 0.85692 6.03705 1.08549 6.26563L8.78549 13.9656C8.89978 14.0799 9.04263 14.1371 9.19978 14.1371C9.34263 14.1371 9.49978 14.0799 9.61406 13.9656L17.3141 6.26563C17.5569 6.03705 17.5569 5.66563 17.3284 5.43705Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_52_428">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const FAQSection = () => {
  const [faqNumber, setFaqNumber] = useState(-1);
  const FAQS = [
    {
      question: "What is Global Chess HackFest?",
      answer:
        "The Global Chess HackFest, hosted by Tech Mahindra - Global Chess League, is a pioneering global hackathon uniting chess enthusiasts worldwide to generate exceptional concepts and solutions for the chess community. Participants have the freedom to explore various areas such as business, community development, or technical aspects of the game, fostering innovation and creativity.",
    },
    {
      question: "Who can participate in Global Chess HackFest?",
      answer:
        "The Global Chess HackFest welcomes individuals and teams from across the globe, regardless of whether they're startups, professionals, students, or freelancers. As long as you're passionate about chess and possess a desire for innovation, this hackathon is the perfect opportunity for you to participate.",
    },
    {
      question: "How will the hackathon be conducted?",
      answer:
        "The Global Chess HackFest involves several phases. Teams will first register online and submit their ideas. Those selected will then move to the online phase for prototype development. The top teams will receive mentorship sessions and present their creations to a panel of judges comprising representatives from the chess and technology sectors.",
    },
    {
      question: "What are the prizes for the winners?",
      answer:
        "Total prize pool of 5000 USD along with cloud credits and merchandise for the    participants",
    },
    {
      question: "Is there any participation fee?",
      answer:
        "There is no entry fee required to participate in the Global Chess HackFest. It is open to all passionate innovators at no cost.",
    },
    {
      question: "When will the winners be announced?",
      answer:
        "The winners of the Global Chess HackFest will be revealed following the grand finale in early June. A comprehensive timeline will be available on both the website and social media platforms for reference.",
    },
    {
      question: "How can I register and participate?",
      answer:
        "To join, just sign up on the Global Chess HackFest website during the registration period. Teams can consist of up to four members, and individuals without a team can explore public teams to join.",
    },
    {
      question: "Where can I get the support and answers to my queries?",
      answer:
        "If you have any inquiries or require assistance, don't hesitate to contact us at contact@globalchessleague.com or via the Discord server after you've registered for the event. Our committed team is available to support you throughout your journey in the hackathon.",
    },
  ];
  return (
    <div className="bg-black  flex flex-col items-center text-center gap-8  pt-14 pb-16 lg:px-10 px-4 text-white">
      <Title variant="pink">FREQUENTLY ASKED QUESTIONS (FAQS)</Title>
      <div className="grid grid-flow-row  lg:grid-cols-2 grid-cols-1 w-full lg:gap-10 gap-6 gap-x-20">
        {FAQS.map((item, index) => {
          return (
            <div
              onClick={() => {
                if (faqNumber !== index) setFaqNumber(index);
                else setFaqNumber(-1);
              }}
              key={index}
              className="cursor-pointer"
            >
              <div className="text-left flex justify-between px-4 py-3 w-full bg-white bg-opacity-20">
                <span>{item.question}</span>
                <span className={faqNumber === index ? "rotate-180" : ""}>
                  {" "}
                  <Arrow />{" "}
                </span>
              </div>
              {faqNumber === index ? (
                <div className="text-left py-2 px-4 text-white">
                  {item.answer}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQSection;
