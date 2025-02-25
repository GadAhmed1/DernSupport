import React from 'react';
import HeroSectionMainText from './HeroSectionMainText';
import HerSectionSubText from './herSectionSubText';
import GetStartedBTN from './GetStartedBTN';
import LocationBTN from './LocationBTN';
const Leftherosection = () => {
    return (
        <div className='bg-white p-6 rounded-xl w-7/12 flex flex-col select-none HeroSection'>
            <HeroSectionMainText></HeroSectionMainText>
            <HerSectionSubText></HerSectionSubText>
            <GetStartedBTN></GetStartedBTN>
            <div className='flex flex-wrap gap-4 TheLocations'>
                <LocationBTN title="The company's main headquarters" href="https://www.google.com/maps"></LocationBTN>
                <LocationBTN title="The nearest maintenance office to you" href="https://www.google.com/maps"></LocationBTN>
            </div>
        </div>
    );
}

export default Leftherosection;
