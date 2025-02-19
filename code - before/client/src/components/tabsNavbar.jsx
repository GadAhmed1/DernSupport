import React, { useState } from 'react';
const TabsNavbar = (props) => {
    const [activeTab, setActiveTab] = useState("Home");

    function handleClick(tabName) {
        setActiveTab(tabName); 
    }

    return (
        <div className='flex justify-center items-center gap-5 px-2 py-2'>
            {["Home", "About", "Services", "Contact"].map((tab) => (
                <div
                    key={tab} 
                    onClick={() => handleClick(tab)} 
                    className={`p-3 rounded-xl flex items-center justify-center w-max gap-2 select-none cursor-pointer duration-300 
                        ${activeTab === tab ? "bg-[#c1c7e9a4]" : "hover:bg-[#c1c7e9a4]"}`}
                >
                    {tab === "Home" && <img src="./assets/home.svg" className='w-5 h-5' alt="Home Icon" />}
                    <span>{tab}</span>
                </div>
            ))}
        </div>
    );
}

export default TabsNavbar;
