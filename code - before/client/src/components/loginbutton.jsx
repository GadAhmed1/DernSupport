import React from 'react';
import { Link } from 'react-router-dom';
const Signupbutton = (prop) => {
    return (
        <Link to='/login' className='flex justify-center items-center gap-5 px-2 py-2'>
        <div className='p-3 rounded-xl border hover:rounded-2xl hover:duration-300 border-black bg-[#ffffff] select-none flex items-center justify-center gap-2 cursor-pointer duration-300 w-max'>
            <img src="./assets/log-in.svg" className='w-5 h-5' alt="Home Icon" />
            <span className="">Log in</span>
        </div>
        </Link>
    );
}

export default Signupbutton;
