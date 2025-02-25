import React from 'react';

const Certificates = () => {
    return (
        <div>
            <div className="TextPart w-10/12 mx-auto mt-10 select-none  p-3 rounded-2xl bg-white">
                <p className='font-semibold text-center text-4xl my-3 text-[#c1c7e9]'>
                    The certificates we possess-
                    <br />
                    demonstrate our strength 📜
                </p>
                {/* <p className='text-center font-thin'>
        This is a collection of testimonies that we were able to collect,
        <br />
        which indicate our
        strength and the security that you will find.
        </p> */}
            </div>
            <div className="ImageP flex justify-center gap-10 mt-10 mb-10 flex-wrap">
                <div className="imgNum1 rounded-2xl py-48 px-40 mt-10"></div>
                <div className="imgNum1 rounded-2xl py-48 px-40 mt-10"></div>
                <div className="imgNum1 rounded-2xl py-48 px-40 mt-10"></div>
            </div>
        </div>
    );
}

export default Certificates;
