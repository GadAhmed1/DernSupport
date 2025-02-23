import React from 'react';
import NavBar from '../layout/navbar';
import Footer from '../layout/footer.jsx';
import LoginSection from '../layout/LoginSection.jsx'
const Login = () => {
    return (
        <div className='bg-[#edede9] min-h-screen flex flex-col'>
                <NavBar />
            <div className='flex-grow'>
                <LoginSection></LoginSection>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Login;
