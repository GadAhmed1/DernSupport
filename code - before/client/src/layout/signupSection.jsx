import React, { useState } from 'react';

const SignupSection = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [InputValue, setInputValue] = useState(['./assets/eye.svg', 'password']);
    const [FormValues, SetFormValues] = useState({ username: '', email: '', phone: '', password: '', confirmPassword: '', remember: true });
    const [Errors, setErrors] = useState({});
    
    const HandleEyeChange = () => {
        setInputValue(prev => [prev[0] === './assets/eye.svg' ? './assets/eye-off.svg' : './assets/eye.svg', prev[1] === 'password' ? 'text' : 'password']);
    };

    const ValidateForm = () => {
        let newErrors = {};
        if (!FormValues.username.trim()) newErrors.username = "Username is required";
        if (!FormValues.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Invalid email format";
        if (!FormValues.phone.match(/^\d{7,}$/)) newErrors.phone = "Phone number Is Invalid";
        if (FormValues.password.length < 6) newErrors.password = "Password must be at least 6 characters";
        if (FormValues.password !== FormValues.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const HandleSignupClick = () => {
        if (ValidateForm()) {
            console.log(FormValues);
        }
    };

    return (
        <div className='bg-white rounded-2xl WidthOfForm p-6 mx-auto mt-20 mb-20'>
            <div className="HeaderPar text-center">
                <p className='font-semibold text-2xl flex justify-center gap-2'>
                    Create an Account <span className='text-2xl'>🚀🎉</span>
                </p>
                <p className='font-light text-md mt-2'>Please enter your details to sign up</p>
            </div>
            <div className="IconsPar flex justify-around mt-6">
                {["apple", "google", "x"].map((icon, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHoveredIcon(icon)}
                        onMouseLeave={() => setHoveredIcon(null)}
                        className={`Icon cursor-pointer border w-3/12 p-2 rounded-xl border-black text-center transition-all duration-500 ${hoveredIcon && hoveredIcon !== icon ? "blur-sm" : ""}`}
                    >
                        <img className='w-6 mx-auto' src={`./assets/${icon}.svg`} alt={icon} />
                    </div>
                ))}
            </div>
            <div className="hr-with-text my-6">
                <span>OR</span>
            </div>
            <div className="inputs flex flex-col mt-10 gap-5">
                {['username', 'email', 'phone'].map((field, index) => (
                    <div key={index}>
                        <input onChange={(e) => SetFormValues({ ...FormValues, [field]: e.target.value })} 
                               className='border border-gray-400 rounded-lg text-lg p-2 focus:border-black w-full' 
                               placeholder={`Enter your ${field}...`} type={field === 'email' ? 'email' : 'text'} />
                        {Errors[field] && <p className='text-red-500 text-sm mt-1'>{Errors[field]}</p>}
                    </div>
                ))}
                <div className='relative'>
                    <input onChange={(e) => SetFormValues({ ...FormValues, password: e.target.value })} 
                           className='border border-gray-400 rounded-lg text-lg p-2 focus:border-black w-full' 
                           placeholder='Enter your password' type={InputValue[1]} />
                    <img onClick={HandleEyeChange} className='absolute w-6 right-2 top-6 transform -translate-y-1/2 cursor-pointer' 
                         src={InputValue[0]} alt="Toggle Password" />
                    {Errors.password && <p className='text-red-500 text-sm mt-1'>{Errors.password}</p>}
                </div>
                <div>
                    <input onChange={(e) => SetFormValues({ ...FormValues, confirmPassword: e.target.value })} 
                           className='border border-gray-400 rounded-lg text-lg p-2 focus:border-black w-full' 
                           placeholder='Confirm your password' type='password' />
                    {Errors.confirmPassword && <p className='text-red-500 text-sm mt-1'>{Errors.confirmPassword}</p>}
                </div>
            </div>
            <div className='flex align-middle items-center justify-between px-1 gap-2 mt-8'>
                <div className='flex align-middle items-center gap-2'>
                    <input id="remember-me" type="checkbox" defaultChecked className="w-4 h-4 text-[#d7dbf1] bg-gray-100 rounded-sm" 
                           onChange={(e) => SetFormValues({ ...FormValues, remember: e.target.checked })} />
                    <p>Remember me</p>
                </div>
            </div>
            <div onClick={HandleSignupClick} 
                 className='bg-[#d7dbf1] select-none rounded-xl p-2 text-center mt-5 hover:cursor-pointer hover:bg-[#b7bbcd] hover:rounded-2xl duration-300'>
                <p>Sign Up</p>
            </div>
            <div className='mt-4 text-center'>
                <p>Already have an account?&nbsp; 
                    <span className='font-bold hover:font-thin duration-300 hover:opacity-50 cursor-pointer'>Log In</span>
                </p>
            </div>
        </div>
    );
}

export default SignupSection;