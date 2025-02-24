import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';

const ContactUsSection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (formData.phone && formData.phone.length < 7) newErrors.phone = 'Phone number must be more than 6 digits';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(formData);
        }
    };

    return (
        <div>


            <div className='flex w-10/12 mx-auto justify-between gap-10 p-6  rounded-xl'>
                <div className='imagecontact border border-gray-300 w-5/12 h-96 flex items-center justify-center bg-gray-200 rounded-xl'>
                </div>
                <form onSubmit={handleSubmit} className='FormPart border border-gray-300 p-6 w-7/12 bg-white rounded-2xl '>
                    <div>
                        <p className='text-3xl font-bold text-gray-800'>Let's Get In Touch ☎️</p>
                        <p className='mt-2 text-gray-600'>Or reach out manually at <span className='font-bold hover:text-black duration-300 underline cursor-pointer text-[#9699a8]'>gad199880@gmail.com</span></p>
                    </div>
                    <div className='mt-6 space-y-4'>
                        <div className='flex FlexWrapParent  gap-4'>
                            <div className='w-1/2 FlexWraPEdit relative'>
                                <b className='text-gray-700'>First Name</b>
                                <div className='relative flex items-center'>
                                    <FaUser className='absolute left-3 text-gray-500' />
                                    <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} className='w-full border outline-none focus:border-black duration-300 border-gray-400 rounded-2xl p-2 pl-10 mt-1' placeholder='Enter your first name ...' />
                                </div>
                                {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName}</p>}
                            </div>
                            <div className='w-1/2 FlexWraPEdit relative'>
                                <b className='text-gray-700'>Last Name</b>
                                <div className='relative flex items-center'>
                                    <FaUser className='absolute left-3 text-gray-500' />
                                    <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} className='w-full border outline-none focus:border-black duration-300 border-gray-400 rounded-2xl p-2 pl-10 mt-1' placeholder='Enter your last name ...' />
                                </div>
                                {errors.lastName && <p className='text-red-500 text-sm'>{errors.lastName}</p>}
                            </div>
                        </div>
                        <div className='relative'>
                            <b className='text-gray-700'>Email</b>
                            <div className='relative flex items-center'>
                                <FaEnvelope className='absolute left-3 text-gray-500' />
                                <input type='email' name='email' value={formData.email} onChange={handleChange} className='w-full border outline-none focus:border-black duration-300 border-gray-400 rounded-2xl p-2 pl-10 mt-1' placeholder='Enter your email ...' />
                            </div>
                            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                        </div>
                        <div className='relative'>
                            <b className='text-gray-700'>Phone (Optional)</b>
                            <div className='relative flex items-center'>
                                <FaPhone className='absolute left-3 text-gray-500' />
                                <input type='tel' name='phone' value={formData.phone} onChange={handleChange} className='w-full border outline-none focus:border-black duration-300 border-gray-400 rounded-2xl p-2 pl-10 mt-1' placeholder='Enter your phone number ...' />
                            </div>
                            {errors.phone && <p className='text-red-500 text-sm'>{errors.phone}</p>}
                        </div>
                        <div className='relative'>
                            <b className='text-gray-700'>Message</b>
                            <div className='relative flex items-center'>
                                <FaComment className='absolute left-3 text-gray-500 top-4' />
                                <textarea name='message' value={formData.message} onChange={handleChange} className='w-full border outline-none focus:border-black duration-300 border-gray-400 rounded-2xl p-2 pl-10 mt-1 h-24' placeholder='Write your message ...'></textarea>
                            </div>
                            {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
                        </div>
                        <button type='submit' className='w-full bg-[#d7dbf1] text-black font-bold py-2 rounded-2xl hover:bg-[#b7bbcd] hover:rounded-3xl duration-300'>Send Message</button>
                    </div>
                </form>
            </div>
            <div 
            className="p-6 bg-white border-gray-200 rounded-lg shadow-sm text-black border  w-4/12 mx-auto">
                <p className='text-4xl my-3'>
                    📞
                </p>
                <p >
                    <h5 className="mb-2  text-2xl font-semibold tracking-tight text-black">
                        Call Us Dirctly?
                    </h5>
                </p>
                <p className="mb-3 font-normal text-black opacity-80">
                    Available during working hours.
                </p>
                <a
                    href="#"
                    className="inline-flex font-medium items-center text-blue-600 hover:underline"
                >
                    +201211620271
                    <svg
                        className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                        />
                    </svg>
                </a>
            </div>

        </div>
    );
}

export default ContactUsSection;