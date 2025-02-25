import React from 'react';
import NavBar from '../layout/navbar.jsx';
import Footer from '../layout/footer.jsx';
import DashBoardSection from '../layout/userDashBoard.jsx';
const Dashboard = () => {
    return (
        <div className='bg-[#edede9] min-h-screen flex flex-col'>
                <NavBar />
            <div className='flex-grow'>
                <DashBoardSection></DashBoardSection>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Dashboard;
