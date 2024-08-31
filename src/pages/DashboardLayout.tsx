import Wrapper from "@/components/shared/Wrapper";
import { Sidebar } from "@/components/ui";

import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="DashboardLayoutContainer">
      <Wrapper className="dashbaordWrapper min-h-screen mx-auto sm:flex py-8 px-2 gap-2  ">
        {/* sidebar section  */}

        <div
          className="sideBarContainer  sm:w-64
         "
        >
          <Sidebar />
        </div>
        {/* sidebar section  */}

        {/* children section  */}
        <div className="contentSection w-full bg-green-300 ">
          <Outlet />
        </div>
      </Wrapper>
    </div>
  );
};

export default DashboardLayout;
