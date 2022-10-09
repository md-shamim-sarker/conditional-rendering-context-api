import React from 'react';
import Nephew from '../Nephew/Nephew';

const Cousin = ({count}) => {
    return (
        <div className='border p-3'>
            <h2>Cousin</h2>
            <Nephew count={count}></Nephew>
        </div>
    );
};

export default Cousin;