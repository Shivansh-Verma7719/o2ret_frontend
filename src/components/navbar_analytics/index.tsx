import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

interface MenuItem {
  name: string;
  link: string;
  icon: React.ComponentType;
  margin?: boolean;
  size?: number;
}



const topMenus: MenuItem[] = [
  { name: "Home", link: "/", icon: IoMdHome, size: 40 },
  { name: "Home", link: "", icon: IoMdHome, size: 40 },
  { name: "Home", link: "", icon: IoMdHome, size: 40 },
  { name: "Home", link: "", icon: IoMdHome, size: 40 },
  { name: "Home", link: "", icon: IoMdHome, size: 40 },
];

const bottomMenus: MenuItem[] = [
  { name: "Home", link: "/", icon: IoMdHome, size: 40 },
  { name: "Home", link: "/", icon: IoMdHome, size: 40 },
  { name: "Home", link: "/", icon: IoMdHome, size: 40 },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#faf7f0] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <IoMdHome
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex flex-col items-center py-4">
          <img
            src={logo}
            alt="Company Logo"
            className={`transition-all duration-500 ${open ? "w-40" : "w-10"}`}
          />
          <hr className="border-gray-800 w-full mt-4" />
        </div>
        <div className="top-menu" >
        <div className="mt-4 flex flex-col gap-4 relative">
          {topMenus.map((menu, i) => (
            <Link
              to={menu.link}
              key={i}
              className={`${
                menu.margin ? "mt-5" : ""
              } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{menu.size && React.createElement(menu.icon, {})}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>
        </div>
        <div className="bottom-menus-container">
        <div className="mb-auto flex flex-col gap-4 relative">
        <hr className="border-gray-800 w-full mt-4" />
          {bottomMenus.map((menu, i) => (
            <Link
              to={menu.link}
              key={i}
              className={`${
                menu.margin ? "mt-5" : ""
              } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
            <div>{menu.size && React.createElement(menu.icon, {  })}</div>

              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu.name}
              </h2>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
