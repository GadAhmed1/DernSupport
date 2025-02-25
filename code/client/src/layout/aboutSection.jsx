import React, { useState } from 'react';
import AboutUsHeroSection from '../components/AboutUsHeroSection';
import AboutUsText from '../components/AboutUsText';
import InfoAbout from '../components/InfoAbout';
import Certificates from '../components/Certificates';
const AboutSection = () => {


    return (
        <div className='bg-[#edede9] '>
            <AboutUsHeroSection/>
            <AboutUsText/>
            <InfoAbout/>
            <Certificates/>
        </div>
    );
}

export default AboutSection;
