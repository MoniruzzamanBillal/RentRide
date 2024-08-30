import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import Wrapper from "./Wrapper";

import logo from "@/assets/logo.png";
import { Button } from "../ui/button";

const Links = [
  { name: "Home", link: "/" },
  { name: "About us", link: "/about-us" },
  { name: "products", link: "/" },
  { name: "Cart", link: "/" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // dark mode toggle
  // const handleDarkMode = () => {
  //     document.documentElement.classList.toggle("dark");
  //     toggleDarkMode();
  //   };

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
            <div className=" text-2xl cursor-pointer flex items-center  gap-x-2">
              <img src={logo} className="  w-[3rem] sm:w-[4rem]" alt="logo" />

              <p className=" text-2xl sm:text-3xl font-bold font-headingFont ">
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
                className=" my-5 xsm:my-7 md:ml-8 md:my-0  font-semibold uppercase"
              >
                <Link
                  to={link.link}
                  className="text-gray-700 hover:text-prime50 duration-500"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}

          <div className="buttonSection md:ml-8   ">
            <Link to={"/sign-up"}>
              <Button className=" -z-[1] text-xs sm:text-sm md:text-base bg-prime50 hover:bg-prime100 ">
                Sign in
              </Button>
            </Link>
          </div>
        </ul>
      </Wrapper>
    </div>
  );
};

export default Navbar;
