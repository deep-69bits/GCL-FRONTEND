import React from "react";
import GradientButton from "./Buttons/GradientButton";
import Image from "next/image";

const YellowText = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-[#EBFF00]">{children}</span>;
};

const ParticipationSection = () => {
  return (
    <div className="bg-black border-b border-white pt-14 flex flex-col items-center pb-10 px-10 text-white">
      <div className="grid grid-flow-row grid-cols-3">
        <div className="px-10 py-10 flex flex-col items-center gap-4">
          <Image
            src={"/participationSVGS/group.svg"}
            alt=""
            width={52}
            height={40}
          />
          <div className="text-lg font-bold">CAN I PARTICIPATE ?</div>
          <div className="text-sm">
            <li>
              <YellowText>Anyone</YellowText> from around the world can register
              for the Hackfest, either individually or in teams (up to 5
              members).
            </li>
            <li>
              With a diverse set of themes, and no limitations on the
              submissions,
              <YellowText>
                {" "}
                anyone irrespective of their location, skill, background{" "}
              </YellowText>
              can participate in the Hackfest
            </li>
          </div>
        </div>

        <div className="px-10 py-10 flex flex-col items-center gap-4">
          <Image
            src={"/participationSVGS/chess2.svg"}
            alt=""
            width={40}
            height={40}
          />
          <div className="text-lg font-bold">WHY SHOULD I PARTICIPATE ?</div>
          <div className="text-sm">
            <li>
              GCL’s{" "}
              <YellowText>
                {" "}
                The Next Move is a groundbreaking global event.{" "}
              </YellowText>
            </li>
            <li>
              With a total <YellowText> prize pool worth $5000 </YellowText>,
              including <YellowText> $1000 cash prizes </YellowText> for each of
              the Top 4 Finalists
            </li>
            <li>
              <YellowText> Exclusive partnership & sponsorship </YellowText>{" "}
              opportunities from global leaders, opening doors for
              collaborations and future endeavors.
            </li>
            <li>
              By participating, you not only stand to win prizes but also{" "}
              <YellowText>
                {" "}
                gain access to cloud credits, GCL Season 2 Merchandise,{" "}
              </YellowText>{" "}
              and other exciting perks.
            </li>
          </div>
        </div>

        <div className="px-10 py-10 flex flex-col items-center gap-4">
          <Image
            src={"/participationSVGS/chessboard.svg"}
            alt=""
            width={40}
            height={40}
          />
          <div className="text-lg font-bold">HOW CAN I PARTICIPATE?</div>
          <div className="text-sm">
            <li>
              <YellowText>Register</YellowText> for the Hackfest between{" "}
              <YellowText> May 12th and May 31st, </YellowText> open to
              individuals or teams worldwide.
            </li>
            <li>
              Choose a{" "}
              <YellowText>
                {" "}
                track/theme and submit a brief description{" "}
              </YellowText>{" "}
              of your idea/innovation, explaining its significance and your
              background.
            </li>
          </div>
        </div>
      </div>
      <GradientButton>Register Now</GradientButton>
    </div>
  );
};

export default ParticipationSection;
