import React from 'react';
import NavBar from '../layout/navbar';
import Footer from '../layout/footer.jsx'
import ContactUsSection from '../layout/ContactUsSection'
const ContactUs = () => {
    return (
        <div className='bg-[#edede9] min-h-screen flex flex-col'>
                <NavBar />
            <div className='flex-grow'>
                <ContactUsSection />
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ContactUs;
