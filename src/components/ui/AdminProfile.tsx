//

import SellChart from "./SellChart";
import Statistics from "./Statistics";

const AdminProfile = () => {
  return (
    <div className="AdminProfileContainer  ">
      <div className="AdminProfileWrapper  flex flex-col gap-y-6  ">
        <Statistics />
        <SellChart />
      </div>
    </div>
  );
};

export default AdminProfile;
