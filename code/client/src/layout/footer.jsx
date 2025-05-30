import React, { useState } from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    const [tabValue, setTabValue] = useState("home");

    const handleClick = (tab) => {
        setTabValue(tab.toLowerCase()); // Ensure case consistency
    };

    return (
        <div className="p-5 bg-white rounded-xl m-3 select-none">
            <div className="flex flex-wrap justify-around align-baseline items-baseline">
                <p className="text-lg font-semibold">Dern Support</p>
                <div className="flex gap-4 mt-3">
                    {[
                        { name: "Home", path: "/" },
                        { name: "Privacy Policy", path: "/privacy-policy" },
                        { name: "Licensing", path: "/licensing" },
                        { name: "Contact", path: "/contact" },
                    ].map((tab) => (
                        <Link
                            key={tab.name}
                            to={tab.path}
                            className="cursor-pointer transition-opacity duration-200 select-none hover:opacity-50"
                            onClick={() => handleClick(tab.name)}
                        >
                            {tab.name}
                        </Link>
                    ))}
                </div>
            </div>
            <hr className="border-1 my-3 border-black w-9/12 mx-auto" />
            <div className="flex text-center justify-center text-md">
                <a
                    href="https://github.com/GadAhmed1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-100 opacity-50 duration-200"
                >
                    <p>© 2024 GadAhmed™</p>
                </a>
            </div>
        </div>
    );
};

export default Footer;
