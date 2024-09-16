import { GetUserRole } from "@/util/GetUserRole";
import { LuCar } from "react-icons/lu";
import { CiBookmark } from "react-icons/ci";
import { IoMdReturnRight } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { MdOutlinePayments } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { TDashboardLinks } from "@/types/globalTypes";

type TLinkProps = {
  link: TDashboardLinks;
};

const LinkItem = ({ link }: TLinkProps) => {
  return (
    <NavLink to={link.path}>
      <div className="linksContainer   flex items-center gap-x-1  my-6 ">
        {link.icon}
        <p>{link.name}</p>
      </div>
    </NavLink>
  );
};

const DashboardLinks = () => {
  const userRole = GetUserRole();

  let links = [
    {
      name: "Bookings",
      path: "/dashboard/user/user-booking",
      icon: <CiBookmark className=" text-xl font-bold " />,
    },
    {
      name: "Payments",
      path: "/dashboard/user/user-payment",
      icon: <MdOutlinePayments className=" text-xl font-bold " />,
    },
  ];

  // ! admin route
  if (userRole === "admin") {
    links = [
      {
        name: "Manage Cars",
        path: "/dashboard/admin/manage-car",
        icon: <LuCar className=" text-xl font-bold " />,
      },
      {
        name: "Manage Bookings",
        path: "/dashboard/admin/manage-booking",
        icon: <CiBookmark className=" text-xl font-bold " />,
      },
      {
        name: "Return Cars",
        path: "/dashboard/admin/manage-return-car",
        icon: <IoMdReturnRight className=" text-xl font-bold " />,
      },
      {
        name: "Manage Users",
        path: "/dashboard/admin/manage-user",
        icon: <FiUsers className=" text-xl font-bold " />,
      },
    ];
  }

  return (
    <div>
      {links && links?.map((item) => <LinkItem key={item?.name} link={item} />)}
    </div>
  );
};

export default DashboardLinks;
