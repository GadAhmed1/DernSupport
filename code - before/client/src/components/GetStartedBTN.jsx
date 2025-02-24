import React from 'react';
import { Link } from "react-router-dom";

const GetStartedBTN = () => {
    return (
        <div className=' flex mt-48 justify-between hover:rounded-2xl  w-12/12 cursor-pointer mb-5 bg-[#d7dbf1]  duration-300 opacity-100  border border-black  p-2 rounded-xl gap-2 flex align-middle items-center'>
            <Link className='text-2xl'>
                Get started
            </Link>
            <img className='w-6 mr-2' src="./assets/rightArrow.svg" alt="" />
        </div>
    );
}

export default GetStartedBTN;
