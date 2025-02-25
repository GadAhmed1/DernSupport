import React from 'react';

const TimeBar = () => {
    const getFormattedDate = () => {
        const date = new Date();
        const options = { weekday: 'long', day: 'numeric', month: 'long' };
        let formattedDate = date.toLocaleDateString('en-GB', options);

        const day = date.getDate();
        const suffix = (day) => {
            if (day > 3 && day < 21) return 'th';
            switch (day % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        };

        formattedDate = formattedDate.replace(/\d+/, day + suffix(day)); 
        return formattedDate;
    };

    return (
        <div className='bg-white rounded-2xl p-6 text-xl font-semibold'>
            <p className='text-3xl mb-3'>Welcome, Manager 👋</p>
            <p className='font-light'>
            {getFormattedDate()}
            </p>

        </div>
    );
}

export default TimeBar;
