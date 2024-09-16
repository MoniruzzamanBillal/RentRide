//

import StatisticsCard from "./StatisticsCard";

const Statistics = () => {
  return (
    <div className="StatisticsContainer">
      <div className="StatisticsWrapper rounded-md bg-gray-100 border border-gray-200 p-6 shadow-md">
        <h1 className=" mb-8 px-3 xsm:px-4 sm:px-5 md:px-6 font-medium text-2xl  md:text-3xl   ">
          Statistics
        </h1>
        <div className="statisticsCardContent grid grid-cols-2 sm:grid-cols-3 gap-x-2 md:gap-x-3 gap-y-4">
          <StatisticsCard />
          <StatisticsCard />
          <StatisticsCard />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
