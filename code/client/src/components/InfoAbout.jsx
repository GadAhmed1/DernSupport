import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
const InfoAbout = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const TheCardClassValue = "select-none border border-black rounded-xl p-4 flex flex-col gap-2 hover:rounded-3xl duration-300";

    const handleCardOver = (cardId) => {
        setHoveredCard(cardId);
    };

    const handleCardLeave = () => {
        setHoveredCard(null);
    };
    return (
        <div className='bg-white p-6 mt-10 w-10/12 mx-auto rounded-xl select-none'>
            <div className='flex flex-col gap-2 my-1 text-2xl'>
                <p>What distinguishes us ?</p>
                <p className='text-4xl font-semibold'>We meet your needs 🎉</p>
            </div>
            <div className="grid grid-cols-3 TheCardsBody gap-10 mt-5 ">
                <div className="grid grid-cols-1 TheCardSecondParent gap-10">
                    <div
                        id='1'
                        onMouseOver={() => handleCardOver(1)}
                        onMouseLeave={handleCardLeave}
                        className={`${TheCardClassValue} ${hoveredCard && hoveredCard !== 1 ? 'blur-sm' : ''}`}
                    >
                        <div className='flex items-center gap-3'>
                            <p className='text-4xl'>🚀</p>
                            <p className='text-2xl font-semibold'>Speed</p>
                        </div>
                        <p>We will be able to reach you and solve your problem as quickly as possible using the best technologies.</p>
                    </div>
                    <div
                        id='2'
                        onMouseOver={() => handleCardOver(2)}
                        onMouseLeave={handleCardLeave}
                        className={`${TheCardClassValue} ${hoveredCard && hoveredCard !== 2 ? 'blur-sm' : ''}`}
                    >
                        <div className='flex items-center gap-3'>
                            <p className='text-4xl'>🎯</p>
                            <p className='text-2xl font-semibold'>Precision</p>
                        </div>
                        <p>We guarantee accuracy in every step we take so that you can be assured that your device is in safe hands.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 TheCardSecondParent gap-10">
                    <div
                        id='3'
                        onMouseOver={() => handleCardOver(3)}
                        onMouseLeave={handleCardLeave}
                        className={`${TheCardClassValue} ${hoveredCard && hoveredCard !== 3 ? 'blur-sm' : ''}`}
                    >
                        <div className='flex items-center gap-3'>
                            <p className='text-4xl'>🔒</p>
                            <p className='text-2xl font-semibold'>Security</p>
                        </div>
                        <p>We will guarantee the complete safety of your device from any possible transportation risks</p>
                    </div>
                    <div
                        id='4'
                        onMouseOver={() => handleCardOver(4)}
                        onMouseLeave={handleCardLeave}
                        className={`${TheCardClassValue} ${hoveredCard && hoveredCard !== 4 ? 'blur-sm' : ''}`}
                    >
                        <div className='flex items-center gap-3'>
                            <p className='text-4xl'>💡</p>
                            <p className='text-2xl font-semibold'>Follow up</p>
                        </div>
                        <p>We will follow up with you even after your device is repaired to make sure that your device is better</p>
                    </div>
                </div>
                <div className='relative TheCardsImage border border-black rounded-xl flex justify-center py-56'>
                    <p className='text-white text-xl absolute top-10 text-center '>
                        Now you can start with us and benefit from our service
                        <br />
                        <p className='text-[#c1c7e9] font-semibold tracking-wide'></p>

                    </p>

                </div>
            </div>
        </div>
    );
}

export default InfoAbout;
