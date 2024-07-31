import React from "react";

const LabelStripSection = ({ labels }: any) => {
  return (
    <div className="bg-[#EBFF00] text-[#3B193D] flex items-center justify-center gap-10 py-4">
      {labels.map((item: any, index: number) => {
        if (!item.left) {
          return (
            <li key={index} className="flex gap-1">
              {item.message} <span className="font-bold">{item.boldText}</span>
            </li>
          );
        }
        return (
          <li key={index} className="flex gap-1">
            <span className="font-bold">{item.boldText}</span> {item.message}
          </li>
        );
      })}
    </div>
  );
};

export default LabelStripSection;