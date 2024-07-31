"use client";
import React, { useState } from "react";
import Title from "./Text/Title";

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
    <div className="bg-white  flex flex-col items-center text-center gap-8  pt-14 pb-16 px-10 text-white">
      <Title variant="purple">STILL HAVE DOUBTS? FAQS</Title>
      <div className="grid grid-flow-row w-3/4 grid-cols-2 gap-10 gap-x-20">
        {FAQS.map((item, index) => {
          return (
            <div
              onClick={() => {
                setFaqNumber(index);
              }}
              key={index}
              className="cursor-pointer w-[700px] "
            >
              <div className="text-left px-4 py-3 w-full bg-[#281A48]">
                {item.question}
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
