import React from 'react';
import NavBar from '../layout/navbar';
import Footer from '../layout/footer.jsx';
import DashBoardSection from '../layout/dashboardSection.jsx';
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
