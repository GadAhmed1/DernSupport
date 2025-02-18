import React from 'react';
import LeftPart from '../components/leftherosection';
import ImagePart from '../components/rightherosection';
const Herosection = () => {
    return (
        <div className='flex justify-between p-3 gap-5'>
            <LeftPart></LeftPart>
            <ImagePart></ImagePart>
        </div>
    );
}

export default Herosection;
