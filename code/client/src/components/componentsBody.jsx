import React from 'react';

const ComponentsBody = (props) => {
    return (
        <div className='bg-white p-0 rounded-xl text-center'>
            {props.children}
        </div>
    );
}

export default ComponentsBody;
