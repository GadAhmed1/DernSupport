import React from 'react';

const LocationBTN = (props) => {
    return (
    <a href={props.href} target='_blanck' className='gap-2 border-black  border-2 p-2 rounded-xl  opacity-25 cursor-pointer hover:border-[#c1c7e9] duration-300 hover:opacity-100 flex align-middle items-center'>
        <img className='w-5' src="./assets/map-Location.svg" alt="" />
        {props.title}
    </a>
    );
}

export default LocationBTN;
