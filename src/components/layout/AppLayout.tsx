import { Outlet } from "react-router-dom";
import { Navbar } from "../shared";

const AppLayout = () => {
  return (
    <div className="AppLayoutContainer">
      {/* nav starts  */}
      <div className="navContainer  ">
        <Navbar />
      </div>
      {/* nav ends */}

      {/* child component  */}
      <div className="childComponent  mt-[4.4rem]  ">
        <Outlet />
      </div>
      {/* child component  */}

      <div className="footerContainer    ">
        <h1>footer</h1>
        <h1>footer</h1>
        <h1>footer</h1>
      </div>
    </div>
  );
};

export default AppLayout;
