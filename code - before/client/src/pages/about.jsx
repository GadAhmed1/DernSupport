import React from 'react';
import NavBar from '../layout/navbar';
import AboutUsSection from '../layout/aboutSection.jsx';
import Footer from '../layout/footer.jsx'
const Home = () => {
    return (
        <div className='bg-[#edede9] min-h-screen flex flex-col'>
                <NavBar />
            <div className='flex-grow'>
                <AboutUsSection />
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;
