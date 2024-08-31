import { LuUser2 } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const LinkItem = ({ link }) => {
  return (
    <NavLink to={link.path}>
      <div className="linksContainer   flex items-center gap-x-1  my-4 ">
        {link.icon}
        <p>{link.name}</p>
      </div>
    </NavLink>
  );
};

const DashboardLinks = () => {
  let links = [
    {
      name: "Orders",
      path: "/dashboard/orders",
      icon: <LuUser2 className=" text-xl font-bold " />,
    },
    {
      name: "Payments",
      path: "/dashboard/payments",
      icon: <LuUser2 className=" text-xl font-bold " />,
    },
    {
      name: "Wishlist",
      path: "/dashboard/wishlist",
      icon: <LuUser2 className=" text-xl font-bold " />,
    },
  ];

  return (
    <div>
      {links && links?.map((item) => <LinkItem key={item?.name} link={item} />)}
    </div>
  );
};

export default DashboardLinks;
