import Title from "./Text/Title";

const LeagueFormat = () => {
  return (
    <div className="bg-black border-b border-white  flex flex-col items-center py-20 lg:px-10 px-4 text-white">
      <Title variant="pink">LEAGUE FORMAT</Title>
      <div className="grid lg:grid-cols-3 md:grid-rows-2 grid-rows-1 h-full mt-10 w-full">
        <ContentBox
          number="6"
          key={1}
          index={1}
          title="Teams"
          description="Double Round Robin"
          icon="https://globalchessleague.com/wp-content/themes/twenty-twenty-one-child/assets/images/icon.png"
        />
        <ContentBox
          number="6"
          index={2}
          key={2}
          title="Boards"
          description="Best of Boards"
          icon="https://globalchessleague.com/wp-content/themes/twenty-twenty-one-child/assets/images/icon1.png"
        />
        <ContentBox
          number="36"
          index={3}
          key={3}
          title="Players"
          description="6 Players in Every Team"
          icon="https://globalchessleague.com/wp-content/themes/twenty-twenty-one-child/assets/images/icon2.png"
        />
        <ContentBox
          number="2"
          index={4}
          key={4}
          title="Women"
          description="In Every Team"
          icon="https://globalchessleague.com/wp-content/themes/twenty-twenty-one-child/assets/images/icon3.png"
        />
        <ContentBox
          number="2.5"
          index={5}
          key={5}
          title="Hours"
          description="Rapid Format"
          icon="https://globalchessleague.com/wp-content/themes/twenty-twenty-one-child/assets/images/icon4.png"
        />
        <ContentBox
          key={6}
          index={6}
          number="10"
          title="Matches"
          description="Each Team"
          icon="https://globalchessleague.com/wp-content/themes/twenty-twenty-one-child/assets/images/icon5.png"
        />
      </div>
    </div>
  );
};
interface ContentBoxProps {
  number: number | string; // Adjust the type if 'number' should strictly be a number
  title: string;
  description: string;
  key: number;
  icon: string;
  index: number;
}

const ContentBox: React.FC<ContentBoxProps> = ({
  number,
  title,
  description,
  key,
  index,
  icon,
}) => {
  if(index==2){
    return (
      <div
        className={
          "bg-black text-white p-6 flex flex-row justify-between h-full lg:border-t lg:border-t-white hover:bg-[#D500AB] cursor-pointer"
        }
      >
        <div>
          <h3 className="text-5xl font-bold mb-2">{number}</h3>
          <h4 className="text-2xl font-semibold mb-1">{title}</h4>
          <p className="text-lg text-gray-400">{description}</p>
        </div>
        <div className="self-start">
          <img src={icon} alt={title} className="" />
        </div>
      </div>
    );
  }
  if (index == 3) {
    return (
      <div
        className={
          "bg-black text-white p-6 flex flex-row justify-between h-full lg:border-t lg:border-r  lg:border-t-white hover:bg-[#D500AB] cursor-pointer"
        }
      >
        <div>
          <h3 className="text-5xl font-bold mb-2">{number}</h3>
          <h4 className="text-2xl font-semibold mb-1">{title}</h4>
          <p className="text-lg text-gray-400">{description}</p>
        </div>
        <div className="self-start">
          <img src={icon} alt={title} className="w-12 h-12" />
        </div>
      </div>
    );
  }
   if (index == 6) {
     return (
       <div
         className={
           "bg-black text-white p-6 flex flex-row justify-between h-full lg:border-b lg:border-r  lg:border-b-white hover:bg-[#D500AB] cursor-pointer"
         }
       >
         <div>
           <h3 className="text-5xl font-bold mb-2">{number}</h3>
           <h4 className="text-2xl font-semibold mb-1">{title}</h4>
           <p className="text-lg text-gray-400">{description}</p>
         </div>
         <div className="self-start">
           <img src={icon} alt={title}  />
         </div>
       </div>
     );
   }
  return (
    <div className={"bg-black text-white p-6 flex flex-row justify-between h-full lg:border lg:border-white hover:bg-[#D500AB] cursor-pointer"}>
      <div>
        <h3 className="text-5xl font-bold mb-2">{number}</h3>
        <h4 className="text-2xl font-semibold mb-1">{title}</h4>
        <p className="text-lg text-gray-400">{description}</p>
      </div>
      <div className="self-start">
        <img src={icon} alt={title}  />
      </div>
    </div>
  );
};
export default LeagueFormat;
