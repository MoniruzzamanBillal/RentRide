import { UserProfile } from "@/components/ui";
import { GetUserRole } from "@/util/GetUserRole";

const Dashboard = () => {
  const userRole = GetUserRole();

  // console.log(userRole);

  return (
    <div className="DashboardContainer">
      {userRole === "admin" ? <h1>Admin Dashboard</h1> : <UserProfile />}
    </div>
  );
};

export default Dashboard;
