import { CiLogin } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import DashboardLinks from "./DashboardLinks";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 sticky top-2 print:hidden">
      <div className="flex items-center space-x-2 border-b-4 border-prime50 pb-2 print:hidden">
        <Link to="/dashboard" className="flex items-center gap-2">
          <span className="inline-block p-2 rounded-full bg-slate-200 cursor-pointe">
            <div className="w-6">
              <LuUser2 className=" text-2xl font-bold " />
            </div>
          </span>
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </Link>
      </div>
      <nav className="dashboardNavLinks mt-4">
        <DashboardLinks />
        <div className="  mt-4 flex items-center gap-x-1 border cursor-pointer font-medium p-1 ">
          <CiLogin className=" text-xl  " />
          Logout
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
