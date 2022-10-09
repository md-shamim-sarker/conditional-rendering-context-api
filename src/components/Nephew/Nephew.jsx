import React from 'react';
import Granddaughter from '../Granddaughter/Granddaughter';

const Nephew = ({count}) => {
    return (
        <div className='border p-3'>
            <h2>Nephew</h2>
            <Granddaughter count={count}></Granddaughter>
        </div>
    );
};

export default Nephew;