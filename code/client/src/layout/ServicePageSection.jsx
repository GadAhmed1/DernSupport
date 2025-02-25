import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaComment, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';

const RequestDeviceForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

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
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cookies = document.cookie;
        if (!cookies.includes("token")) {
            Swal.fire({
                icon: 'warning',
                title: 'Login Required',
                text: 'You must be logged in to submit a request.',
                confirmButtonColor: '#d33'
            });
            return;
        }

        if (!validateForm()) return;
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/api/req', formData, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            });

            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Request Sent!',
                    text: 'Your device request has been submitted successfully.',
                    confirmButtonColor: '#3085d6',
                    timer: 3000
                });

                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    address: '',
                    message: ''
                });
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: `Something went wrong, ${error.response?.data?.message || 'please try again'}.`,
                confirmButtonColor: '#d33'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='w-10/12 mx-auto p-6 bg-white rounded-xl border border-gray-300'>
            <p className='text-3xl font-bold text-gray-800'>Request a Device 📦</p>
            <p className='mt-2 text-gray-600'>Fill in the form to request a device.</p>
            
            <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
                <div className='flex gap-4'>
                    <div className='w-1/2'>
                        <b className='text-gray-700'>First Name</b>
                        <div className='relative flex items-center'>
                            <FaUser className='absolute left-3 text-gray-500' />
                            <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} className='w-full border border-gray-400 rounded-2xl p-2 pl-10 mt-1 outline-none focus:border-black duration-300' placeholder='Enter first name' />
                        </div>
                        {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName}</p>}
                    </div>
                    <div className='w-1/2'>
                        <b className='text-gray-700'>Last Name</b>
                        <div className='relative flex items-center'>
                            <FaUser className='absolute left-3 text-gray-500' />
                            <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} className='w-full border border-gray-400 rounded-2xl p-2 pl-10 mt-1 outline-none focus:border-black duration-300' placeholder='Enter last name' />
                        </div>
                        {errors.lastName && <p className='text-red-500 text-sm'>{errors.lastName}</p>}
                    </div>
                </div>
                <div className='relative'>
                    <b className='text-gray-700'>Email</b>
                    <div className='relative flex items-center'>
                        <FaEnvelope className='absolute left-3 text-gray-500' />
                        <input type='email' name='email' value={formData.email} onChange={handleChange} className='w-full border border-gray-400 rounded-2xl p-2 pl-10 mt-1 outline-none focus:border-black duration-300' placeholder='Enter email' />
                    </div>
                    {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                </div>
                <div className='relative'>
                    <b className='text-gray-700'>Phone</b>
                    <div className='relative flex items-center'>
                        <FaPhone className='absolute left-3 text-gray-500' />
                        <input type='tel' name='phone' value={formData.phone} onChange={handleChange} className='w-full border border-gray-400 rounded-2xl p-2 pl-10 mt-1 outline-none focus:border-black duration-300' placeholder='Enter phone number' />
                    </div>
                    {errors.phone && <p className='text-red-500 text-sm'>{errors.phone}</p>}
                </div>
                <div className='relative'>
                    <b className='text-gray-700'>Address</b>
                    <div className='relative flex items-center'>
                        <FaMapMarkerAlt className='absolute left-3 text-gray-500' />
                        <input type='text' name='address' value={formData.address} onChange={handleChange} className='w-full border border-gray-400 rounded-2xl p-2 pl-10 mt-1 outline-none focus:border-black duration-300' placeholder='Enter address' />
                    </div>
                    {errors.address && <p className='text-red-500 text-sm'>{errors.address}</p>}
                </div>
                <div className='relative'>
                    <b className='text-gray-700'>Message</b>
                    <div className='relative flex items-center'>
                        <FaComment className='absolute left-3 text-gray-500 top-4' />
                        <textarea name='message' value={formData.message} onChange={handleChange} className='w-full border border-gray-400 rounded-2xl p-2 pl-10 mt-1 h-24 outline-none focus:border-black duration-300' placeholder='Write your request details'></textarea>
                    </div>
                    {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
                </div>
                <button type='submit' className='w-full bg-[#d7dbf1] text-black font-bold py-2 rounded-2xl hover:bg-[#b7bbcd] hover:rounded-3xl duration-300' disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Request'}
                </button>
            </form>
        </div>
    );
}

export default RequestDeviceForm;
