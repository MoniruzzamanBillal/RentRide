import { AdminProfile, UserProfile } from "@/components/ui";
import { GetUserRole } from "@/util/GetUserRole";

const Dashboard = () => {
  const userRole = GetUserRole();

  // console.log(userRole);

  return (
    <div className="DashboardContainer">
      {userRole === "admin" ? <AdminProfile /> : <UserProfile />}
    </div>
  );
};

export default Dashboard;
