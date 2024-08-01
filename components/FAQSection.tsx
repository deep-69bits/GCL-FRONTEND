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
      question: "What is Next In 2.0?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non repellat modi nobis facilis sit! Ad inventore rerum aliquid iure quo.",
    },
    {
      question: "What is Next In 2.0?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non repellat modi nobis facilis sit! Ad inventore rerum aliquid iure quo.",
    },
    {
      question: "What is Next In 2.0?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non repellat modi nobis facilis sit! Ad inventore rerum aliquid iure quo.",
    },
    {
      question: "What is Next In 2.0?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non repellat modi nobis facilis sit! Ad inventore rerum aliquid iure quo.",
    },
    {
      question: "What is Next In 2.0?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non repellat modi nobis facilis sit! Ad inventore rerum aliquid iure quo.",
    },
    {
      question: "What is Next In 2.0?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non repellat modi nobis facilis sit! Ad inventore rerum aliquid iure quo.",
    },
    {
      question: "What is Next In 2.0?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non repellat modi nobis facilis sit! Ad inventore rerum aliquid iure quo.",
    },
    {
      question: "What is Next In 2.0?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non repellat modi nobis facilis sit! Ad inventore rerum aliquid iure quo.",
    },
  ];
  return (
    <div className="bg-white  flex flex-col items-center text-center gap-8  pt-14 pb-16 lg:px-10 px-4 text-white">
      <Title variant="purple">STILL HAVE DOUBTS? FAQS</Title>
      <div className="grid grid-flow-row  lg:grid-cols-2 grid-cols-1 w-full gap-10 gap-x-20">
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
              <div className="text-left flex justify-between px-4 py-3 w-full bg-[#281A48]">
                <span>{item.question}</span>
                <span className={faqNumber === index ? "rotate-180" : ""}>
                  {" "}
                  <Arrow />{" "}
                </span>
              </div>
              {faqNumber === index ? (
                <div className="text-left py-2 px-4 text-black">
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
