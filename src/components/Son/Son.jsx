import React from 'react';
import Grandson from '../Grandson/Grandson';

const Son = ({increaseController, decreaseController}) => {
    return (
        <div className='border p-3'>
            <h2>Son</h2>
            <Grandson
                increaseController={increaseController}
                decreaseController={decreaseController}
            ></Grandson>
        </div>
    );
};

export default Son;