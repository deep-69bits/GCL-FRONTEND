const LeagueFormat = () => {
  return (
    <div className="bg-black text-white p-8 max-w-[1780px] mx-auto">
      <h2 className="text-center text-4xl font-bold mb-8 text-pink-500 md:text-[64px] md:py-12">LEAGUE FORMAT</h2>
      <div className="grid grid-cols-3 grid-rows-2 h-full">
        <ContentBox number="6" title="Teams" description="Double Round Robin" icon="🙋‍♂️" />
        <ContentBox number="6" title="Boards" description="Best of Boards" icon="🏁" />
        <ContentBox number="36" title="Players" description="6 Players in Every Team" icon="👥" />
        <ContentBox number="2" title="Women" description="In Every Team" icon="👩" />
        <ContentBox number="2.5" title="Hours" description="Rapid Format" icon="⏱️" />
        <ContentBox number="10" title="Matches" description="Each Team" icon="♟️" />
      </div>
    </div>
  );
};
const ContentBox = ({ number, title, description, icon }) => {
  return (
    <div className="bg-black text-white p-6 flex flex-row justify-between h-full border border-white hover:bg-pink-700">
      <div>
        <h3 className="text-7xl font-bold mb-2">{number}</h3>
        <h4 className="text-3xl font-semibold mb-1">{title}</h4>
        <p className="text-lg text-gray-400">{description}</p>
      </div>
      <div className="self-start bg-red-700 ">
        <img src={icon} alt={title} className="w-12 h-12" />
      </div>
    </div>
  );
};
export default LeagueFormat;
