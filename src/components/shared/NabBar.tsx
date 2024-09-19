import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";
import Wrapper from "./Wrapper";

import logo from "@/assets/logo.png";
import { Button } from "../ui/button";
import { UseGetUser } from "@/util/SharedFunction";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { toggleMode } from "@/redux/features/darkMode/dark.slice";

const Links = [
  { name: "Home", link: "/" },
  { name: "Car Lists", link: "/car-list" },
  { name: "Booking", link: "/booking-car-list" },
  { name: "About us", link: "/about-us" },
  { name: "Contact", link: "/contact-us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const userInfo = UseGetUser();
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector((state) => state.mode);

  //! dark mode toggle
  const handleDarkMode = () => {
    dispatch(toggleMode());

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className="  shadow-md w-full fixed top-0 left-0 z-10 "
      style={{
        backdropFilter: "blur(8px)",
      }}
    >
      <Wrapper className="   flex items-center justify-between py-2  m-auto   ">
        {/* logo section */}
        <div className="imgContainer  ">
          <Link to={"/"}>
            <div className=" text-2xl cursor-pointer flex items-center  gap-x-1">
              <img
                src={logo}
                className="  w-[3rem] sm:w-[3.6rem] md:w-[2.8rem] lg:w-[4rem]  "
                alt="logo"
              />

              <p className="  text-2xl sm:text-2xl md:text-xl lg:text-3xl font-bold font-headingFont ">
                Rent <span className="   text-prime100 ">Ride</span>{" "}
              </p>
            </div>
          </Link>
        </div>

        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="   flex justify-center items-center   cursor-pointer md:hidden  font-semibold  text-2xl "
        >
          {open ? <RiCloseFill className="  " /> : <RiMenu3Fill />}
        </div>

        {/* linke items */}
        <ul
          className={` absolute bg-white shadow-md md:shadow-none z-[-1] left-0 w-full pl-10 md:flex md:items-center  pb-8 md:pb-0   md:static md:bg-transparent  md:z-auto   md:w-auto md:pl-0  transition-all duration-300 ease-in text-xs xsm:text-sm sm:text-base md:text-xs xmd:text-sm lg:text-base  ${
            open ? "top-[3.2rem] block" : "top-[-490px]"
          }  `}
          style={{
            backdropFilter: "blur(8px)",
          }}
        >
          {Links &&
            Links.map((link, index) => (
              <li
                key={index}
                className="  my-5 xsm:my-7 md:ml-8 md:my-0  font-semibold uppercase"
              >
                <Link
                  to={link.link}
                  className=" hover:text-prime50 duration-500  "
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}

          <div className="buttonSection  md:ml-5 lg:ml-8  flex  items-center gap-x-0.5  ">
            {!userInfo ? (
              <Link to={"/login"}>
                <Button className=" -z-[1] text-xs sm:text-sm md:text-base bg-prime50 hover:bg-prime100 ">
                  Sign in
                </Button>
              </Link>
            ) : (
              <div className="relative">
                <Link
                  to="/dashboard"
                  className="inline-block p-2 rounded-full bg-orange-100 cursor-pointe"
                >
                  <LuUser2 className=" text-2xl font-bold text-gray-800 " />
                </Link>
              </div>
            )}

            {/* toggle button  */}
            <div
              className="toggleMode  pl-0 md:pl-2 mr-3 md:pr-0 text-xl sm:text-2xl cursor-pointer  "
              onClick={() => handleDarkMode()}
            >
              {darkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
            </div>
            {/* toggle button  */}

            {/*  */}
            {/*  */}
            {/*  */}

            {/*  */}
            {/*  */}
          </div>
        </ul>
      </Wrapper>
    </div>
  );
};

export default Navbar;
