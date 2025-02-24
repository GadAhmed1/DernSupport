import React from 'react';

const NavigateSectionDashBoard = () => {
    return (
        <div className='bg-white rounded-2xl p-2 hEdit '>
            <div className="Logo border-b-2 p-2 ">
                <p className='text-xl font-bold select-none'>Dashboard 📈💰📊</p>
            </div>
            <div className='mt-5 flex flex-col gap-5 '>
                <div className='flex align-middle items-center gap-3 rounded-3xl border p-3 active hover:bg-[#d7dbf1] duration-300 cursor-pointer'><img src="./assets/user.svg" alt="" /><p>users Requests </p></div>
                {/* <div className='flex align-middle items-center gap-3 rounded-3xl border p-3 hover:bg-[#d7dbf1] duration-300 cursor-pointer'><img src="./assets/user.svg" alt="" /><p>users</p></div> */}
            </div>
        </div>
    );
}

export default NavigateSectionDashBoard;
