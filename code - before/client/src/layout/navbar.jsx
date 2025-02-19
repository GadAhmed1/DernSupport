import React from 'react';
import Logo from '../components/logo';
import NormalComp from '../components/componentsBody';
import Tabs from '../components/tabsNavbar';
import Signup from '../components/signupbutton';
import Login from '../components/loginbutton';
import HeroSection from '../layout/herosection'
const Navbar = () => {
    return (
        <di>
            <div className='p-3 flex flex-col md:flex-row items-center md:justify-between gap-3 w-full'>
                <div className="flex flex-col md:flex-row items-center md:justify-start w-full md:w-auto gap-3">
                    <Logo />
                    <NormalComp>
                        <Tabs />
                    </NormalComp>
                </div>

                <div className='flex w-full md:w-auto justify-center md:justify-end gap-2'>
                    <Login />
                    <Signup />
                </div>

            </div>
        </di>
    );
}

export default Navbar;
