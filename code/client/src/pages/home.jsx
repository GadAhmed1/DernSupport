import React from 'react';
import NavBar from '../layout/navbar';
import HeroSection from '../layout/herosection';
import Footer from '../layout/footer.jsx'
const Home = () => {
    return (
        <div className='bg-[#edede9] min-h-screen flex flex-col'>
                <NavBar />
            <div className='flex-grow'>
                <HeroSection />
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;
