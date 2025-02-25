import React from 'react';

const AboutUsText = () => {
    return (
        <div className='flex justify-center w-11/12 min-h-96 gap-24 mx-auto mt-10 TheCompuPart'>
        <div className='AboutrtxImage w-5/12 rounded-xl'></div>
        <div className='TheCompuTextPart w-5/12 p-3 bg-white rounded-xl'>
            <p className='text-[#8a8fa9] font-bold my-4'>About Us</p>
            <p className='text-3xl'>
                Fixing Problems,
                <p>Building Trust. 🛠️</p>
            </p>
            <p className='my-6'>
                Dern-Support offers fast, reliable IT support for businesses and individuals. Businesses get on-site service, while individuals can drop off or courier their devices. The company ensures smooth, efficient repairs to keep customers productive.
            </p>
        </div>
    </div>
    );
}

export default AboutUsText;
