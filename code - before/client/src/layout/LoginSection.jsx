import React, { useState } from 'react';

const LoginSection = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    return (
        <div className='bg-white rounded-2xl w-5/12 p-5 mx-auto mt-20'>
            <div className="HeaderPar text-center">
                <p className='font-semibold text-4xl flex justify-center gap-3'>
                    Welcome back
                    <span className='text-4xl'>👋🤗</span>
                </p>
                <p className='font-thin text-xl mt-3'>Please enter your details to log in</p>
            </div>
            <div className="IconsPar flex justify-around mt-10 w-12/12 mx-auto">
                {["apple", "google", "x"].map((icon, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHoveredIcon(icon)}
                        onMouseLeave={() => setHoveredIcon(null)}
                        className={`Icon cursor-pointer border w-3/12 p-3 hover:rounded-xl rounded-2xl border-black text-center transition-all duration-500 
                            ${hoveredIcon && hoveredIcon !== icon ? "blur-sm" : ""}`}
                    >
                        <img className='w-6 mx-auto' src={`./assets/${icon}.svg`} alt={icon} />
                    </div>
                ))}
            </div>
            <div class="hr-with-text">
                <span>OR</span>
            </div>
            <div className="inputs w-12/12">
                <input className='border-2 w-12/12 border-gray-400 rounded-md text-xl p-2 TheInputConfig duration-300 focus:border-black' placeholder='Enter your email...' type="text" />
            </div>
        </div>
    );
}

export default LoginSection;
