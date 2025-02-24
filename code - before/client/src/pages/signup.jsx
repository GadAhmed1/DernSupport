import React from 'react';
import NavBar from '../layout/navbar';
import Footer from '../layout/footer.jsx';
import SignUpSection from '../layout/signupSection.jsx'
const SignUP = () => {
    return (
        <div className='bg-[#edede9] min-h-screen flex flex-col'>
                <NavBar />
            <div className='flex-grow'>
                <SignUpSection></SignUpSection>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default SignUP;
