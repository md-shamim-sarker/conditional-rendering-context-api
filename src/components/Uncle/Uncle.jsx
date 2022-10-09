import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = ({count}) => {
    return (
        <div className='border p-3'>
            <h2>Uncle</h2>
            <Cousin count={count}></Cousin>
        </div>
    );
};

export default Uncle;