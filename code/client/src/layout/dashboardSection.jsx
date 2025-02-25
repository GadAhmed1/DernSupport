import React from 'react';
import Navigate from '../components/NavigateSectionDashBoard';
import TimeBar from '../components/timeBar';
import Req from '../components/req';
const DashboardSection = () => {
    return (
        <div className='mx-3 flex gap-5'>
            <div className='w-3/12'>
            <Navigate></Navigate>
            </div>
            <div className="Main flex flex-col gap-5 w-9/12">
                <TimeBar></TimeBar>
                <Req></Req>
            </div>
        </div>
    );
}

export default DashboardSection;
