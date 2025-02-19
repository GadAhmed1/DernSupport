import React from 'react';

const AboutSection = () => {
    return (
        <div className='bg-[#edede9]'>
            <div className="HerSectionForAbout h-56">
                <p className='border py-24 text-white text-4xl text-center select-none'>
                    Who We Are
                </p>
            </div>
            <div className='flex justify-center w-10/12 h-96 gap-10 mx-auto mt-10'>
                <div className='AboutrtxImage w-5/12 rounded-xl'></div>
                <div className='w-5/12 p-3 bg-white rounded-xl'>
                    <p className='text-[#8a8fa9] font-bold my-4'>About Us</p>
                    <p className='text-3xl'>
                        Fixing Problems, Building Trust. 🛠️
                    </p>
                    <p className='my-6 '>
                        Dern-Support offers fast, reliable IT support for businesses and individuals. Businesses get on-site service, while individuals can drop off or courier their devices. The company ensures smooth, efficient repairs to keep customers productive.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
