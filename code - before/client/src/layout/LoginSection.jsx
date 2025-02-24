import React, { useState } from 'react';

const LoginSection = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [InputValue, setInputValue] = useState(['./assets/eye.svg', 'password']);
    const [MassageState,SetMassageState] = useState(false)
    const [FormValues,SetFormValues] = useState(['username','pass',true])
    const HandleEyeChange = () => {
        if (InputValue[1] === 'password') {
            setInputValue(['./assets/eye.svg', 'text']);
        } else {
            setInputValue(['./assets/eye-off.svg', 'password']);
        }
    };
    const HandlOnclickFun = () => {
        console.log(FormValues)
    }

    return (
        <div className='bg-white rounded-2xl WidthOfForm p-6 mx-auto mt-20 mb-20'>
            <div className="HeaderPar text-center">
                <p className='font-semibold text-2xl flex justify-center gap-2'>
                    Welcome back
                    <span className='text-2xl'>👋🤗</span>
                </p>
                <p className='font-light text-md mt-2'>Please enter your details to log in</p>
            </div>
            <div className="IconsPar flex justify-around mt-6">
                {["apple", "google", "x"].map((icon, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHoveredIcon(icon)}
                        onMouseLeave={() => setHoveredIcon(null)}
                        className={`Icon cursor-pointer border w-3/12 p-2 rounded-xl border-black text-center transition-all duration-500 
                            ${hoveredIcon && hoveredIcon !== icon ? "blur-sm" : ""}`}
                    >
                        <img className='w-6 mx-auto' src={`./assets/${icon}.svg`} alt={icon} />
                    </div>
                ))}
            </div>
            <div className="hr-with-text my-6">
                <span>OR</span>
            </div>
            <div className="inputs flex flex-col mt-10 gap-7">
                <div>
                <input onChange={(e) => {
                    SetFormValues([e.target.value,FormValues[1],FormValues[2]])
                }} className='border border-gray-400 rounded-lg text-lg p-2 focus:border-black w-full' placeholder='Enter your email...' type="text" />
                    <p className={MassageState == false?`text-red-500 p-1 hidden`:`text-red-500 p-1`}>ERR MASSSAGE</p>
                </div>

                <div className='relative'>
                    <input
                    onChange={(e) => {
                        SetFormValues([FormValues[0],e.target.value,FormValues[2]])
                    }}
                    className='border border-gray-400 rounded-lg text-lg p-2 focus:border-black w-full' placeholder='Enter your password' type={InputValue[1]} />
                    <img onClick={HandleEyeChange} className='absolute w-6 right-2 top-6 transform -translate-y-1/2 cursor-pointer' src={InputValue[0]} alt="IMAGE" />
                    <p className={MassageState == false?`text-red-500 p-1 hidden`:`text-red-500 p-1 `}>ERR MASSSAGE</p>
                </div>
            </div>
            <div className='flex align-middle items-center justify-between px-1 gap-2 mt-8'>
                <div className='flex align-middle items-center gap-2 '>

                    <input
                        id="default-checkbox"
                        type="checkbox"
                        defaultValue=""
                        className="w-4 h-4 text-[#d7dbf1] bg-gray-100 rounded-sm "
                        onChange={(e) => {
                            SetFormValues([FormValues[0],FormValues[1],e.target.checked])
                        }}
                    />
                    <p className=''>
                        Remember me
                    </p>
                </div>
                <div>
                    <p className='underline hover:opacity-50 duration-300 cursor-pointer'>Forgot password?</p>
                </div>
            </div>
            <div onClick={HandlOnclickFun} className='bg-[#d7dbf1] select-none rounded-xl p-2 text-center mt-8 hover:cursor-pointer hover:bg-[#b7bbcd] hover:rounded-2xl duration-300'>
                <p>Log in</p>
            </div>
            <div className='mt-4 text-center'>
                <p>Don't have an account yet?&nbsp;  <span className='font-bold hover:font-thin duration-300 hover:opacity-50 cursor-pointer'>Sign Up</span></p>
            </div>
        </div>
    );
}

export default LoginSection;
