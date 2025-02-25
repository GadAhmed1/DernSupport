import React from 'react';
import { useNavigate } from "react-router-dom";

const GetStartedBTN = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        const username = document.cookie
            .split("; ")
            .find((row) => row.startsWith("username="));
        const token = document.cookie
            .split("; ")
            .find((row) => row.startsWith("token="));

        if (username && token) {
            navigate("/services");
        } else {
            navigate("/login");
        }
    };

    return (
        <button 
            onClick={handleClick} 
            className='flex mt-48 justify-between hover:rounded-2xl w-12/12 cursor-pointer mb-5 bg-[#d7dbf1] duration-300 opacity-100 border border-black p-2 rounded-xl gap-2 flex align-middle items-center'
        >
            <p className='text-2xl'>Get started</p>
            <img className='w-6 mr-2' src="./assets/rightArrow.svg" alt="" />
        </button>
    );
};

export default GetStartedBTN;
