import React from 'react';
import Myself from '../Myself/Myself';

const Father = ({increaseController, decreaseController, count}) => {
    return (
        <div className='border p-3'>
            <h2>Father</h2>
            <Myself
                increaseController={increaseController}
                decreaseController={decreaseController}
                count={count}
            ></Myself>
        </div>
    );
};

export default Father;