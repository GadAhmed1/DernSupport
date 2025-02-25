import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigateSectionDashBoard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    return (
        <div className='bg-white rounded-2xl p-2 hEdit '>
            <div className="Logo border-b-2 p-2 ">
                <p className='text-xl font-bold select-none'>Dashboard 📈💰📊</p>
            </div>
            <div className='mt-5 flex flex-col gap-5'>
                <div 
                    onClick={() => navigate("/dashboard/req")}
                    className={`flex align-middle items-center gap-3 rounded-3xl border p-3 cursor-pointer duration-300 
                        ${location.pathname === "/dashboard/req" ? "bg-[#d7dbf1] font-bold" : "hover:bg-[#d7dbf1]"}`}
                >
                    <img src="https://i.ibb.co/LDSj0sfC/user.png" alt="Users Requests" />
                    <p>Users Requests</p>
                </div>
                <div 
                    onClick={() => navigate("/dashboard/users")}
                    className={`flex align-middle items-center gap-3 rounded-3xl border p-3 cursor-pointer duration-300 
                        ${location.pathname === "/dashboard/users" ? "bg-[#d7dbf1] font-bold" : "hover:bg-[#d7dbf1]"}`}
                >
                    <img src="https://i.ibb.co/LDSj0sfC/user.png" alt="Users" />
                    <p>Users</p>
                </div>
            </div>
        </div>
    );
}

export default NavigateSectionDashBoard;
