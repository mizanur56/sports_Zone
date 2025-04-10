import { useState } from "react";
import { FcSportsMode } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LiaBarsSolid } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const Links = [
    { name: "HOME", link: "/" },
    { name: "PRODUCTS", link: "/reservation" },
    { name: "ABOUT", link: "/about-us" },
    { name: "CONTACT", link: "/contact-us" },
    { name: "BLOG", link: "/contact-us" },
    { name: "DASHBOARD", link: "/contact-us" },
  ];

  return (
    <div className="bg-[#0f0f0f] w-full sticky top-0  z-[999] font-poppins ">
      <header className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8 py-3">
        <Link to="/">
          <p className="text-white text-3xl font-bold flex items-center">
            <FcSportsMode className="text-4xl mr-2" />
            SPORTS<span className="text-teal-400">ZONE</span>
          </p>
        </Link>
        <div
          className={`fixed top-[0px] bg-secondary lg:shadow-none shadow-xl shadow-primary/10 lg:bg-transparent left-0 lg:px-7 pb-7 w-[70%] lg:w-auto h-full overflow-auto transform transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } lg:static lg:p-0 lg:overflow-visible`}
        >
          <div className="flex lg:hidden border-b border-[#202020] justify-between items-center px-6 py-[17px]">
            <Link
              to={"/login"}
              className="text-primary/80 text-lg hover:text-primary"
            >
              Login
            </Link>

            <button
              onClick={toggleMenu}
              className="flex lg:hidden border p-[6px] text-2xl border-primary/50 hover:border-primary/80 text-primary/80 hover:text-primary duration-200"
            >
              <IoMdClose />
            </button>
          </div>
          <ul className="list-none block text-[#9E9E9E] bg-opacity-5 pt-4 lg:pt-0 lg:flex gap-5">
            {Links.map((item) => (
              <NavLink
                to={item.link}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  ` ${
                    isActive && "text-primary"
                  } hover:text-white duration-300 lg:pb-[2px] `
                }
              >
                {" "}
                <li key={item.link} className=" py-2 lg:pb-2 px-6 lg:px-0">
                  {item.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <Link to={"/cart"}>
            <p className="flex items-center gap-3 rounded lg:bg-[#BBA97B] p-2 lg:px-5 lg:py-2 text-secondary font-medium relative">
              <IoCartOutline className="lg:text-white text-3xl lg:text-2xl text-primary" />{" "}
              <div className="absolute h-[18px] w-[18px] text-black lg:bg-secondary rounded-full text-secondary text-[8px] top-1 left-6 lg:left-8 flex justify-center items-center]">
                12
              </div>
              <span className="hidden lg:block">View Cart</span>
            </p>
          </Link>
          <Link to={"/login"} className="text-white pr-2 lg:flex hidden">
            Login
          </Link>
          <button
            onClick={toggleMenu}
            className="flex lg:hidden border text-xl p-[6px] border-primary/50 hover:border-primary/80 text-primary/80 hover:text-primary duration-200"
          >
            <LiaBarsSolid />
          </button>
        </div>
      </header>{" "}
    </div>
  );
};

export default Navbar;
