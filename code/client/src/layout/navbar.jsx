import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Logo from "../components/logo";
import NormalComp from "../components/componentsBody";
import Tabs from "../components/tabsNavbar";
import Signup from "../components/signupbutton";
import Login from "../components/loginbutton";
import ProfileCard from "../components/profileCard";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userName = Cookies.get("username");
    const userEmail = Cookies.get("email");

    if (userName && userEmail) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="p-3 flex flex-col md:flex-row items-center md:justify-between gap-3 w-full">
      <div className="flex flex-col md:flex-row items-center md:justify-start w-full md:w-auto gap-3">
        <Logo />
        <NormalComp>
          <Tabs />
        </NormalComp>
      </div>

      <div className="flex w-full md:w-auto justify-center md:justify-end gap-2">
        {isLoggedIn ? <ProfileCard /> : <>
          <Login />
          <Signup />
        </>}
      </div>
    </div>
  );
};

export default Navbar;
