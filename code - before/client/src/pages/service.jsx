import React from 'react';
import NavBar from '../layout/navbar';
import Footer from '../layout/footer.jsx';
import ServiceSection from '../layout/ServicePageSection.jsx'

const Service = () => {
    return (
        <div className='bg-[#edede9] min-h-screen flex flex-col'>
                <NavBar />
            <div className='flex-grow'>
                <ServiceSection></ServiceSection>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Service;
