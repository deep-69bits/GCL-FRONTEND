import React from "react";
import Title from "./Text/Title";

const ShortlistedTeams = () => {
    const Teams = [
      "Coachess",
      "Chennai Super Knights",
      "ChessEvents",
      "ChessAlmostLive",
      "Team Sky",
      "Zh1vango",
      "KnightBots",
      "ShahMaat",
      "Zungwang",
      "Catalanwani",
      "CHESSFR3AKS",
      "Century Skill for Chess",
      "AIChessGod",
      "Chess Lover",
      "Chess for Connection",
      "DutchInnovators",
      "Kenyan Team",
      "ChessCast",
      "The Chessers™ Team©",
      "The Chessers™ Team©",
      "Chess innovators",
      "HarSh",
      "This is just idea",
      "Stock yard",
      "Curico Team",
      "Changers",
      "Team Patrick Hibs",
      "Chess for Everyone",
      "CodingClub_IITG",
      "Chessiverse",
      "Shatransh",
      "AI_Chess_Coders",
      "HybridChess",
      "Shrink's Gambit",
      "Team Parallel",
      "Unicodez",
      "HimalayanChessInitiative",
      "Dark Knights",
      "Data Knights",
      "Stones",
      "The duochess",
      "The neochess",
      "DeGod",
    ];
  return (
    <div className="bg-black border-b border-white py-20 flex flex-col items-center  lg:px-10 px-4 text-white">
      <Title variant="pink">SHORTLISTED TEAMS</Title>
      <div className="flex flex-wrap justify-center items-center   w-full mt-10 lg:gap-10 gap-4 ">
        {Teams.map((item: string, index: number) => {
          return (
            <div key={index} className="lg:w-1/6 w-[40%]  text-center text-black">
              <div className="h-2 py-2 mx-4 bg-white"> </div>
              <div className="py-2 bg-white font-medium">{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShortlistedTeams;
