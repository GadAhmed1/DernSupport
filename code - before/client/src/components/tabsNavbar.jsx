import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const TabsNavbar = () => {
  const location = useLocation(); // Get current route

  const tabs = [
    { name: "Home", path: "/", icon: "./assets/home.svg" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <div className="flex justify-center items-center gap-5 px-2 py-2">
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.path}
          className={`p-3 rounded-xl flex items-center justify-center w-max gap-2 select-none cursor-pointer duration-300
            ${
              location.pathname === tab.path
                ? "bg-[#c1c7e9a4] font-semibold" // Active tab styling
                : "hover:bg-[#c1c7e9a4]"
            }`}
        >
          {tab.icon && <img src={tab.icon} className="w-5 h-5" alt={`${tab.name} Icon`} />}
          <span>{tab.name}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default TabsNavbar;
