import React from 'react';
import Son from '../Son/Son';

const Myself = ({increaseController, decreaseController, count}) => {
    return (
        <div className={count >= 5 ? "bg-blue-400" : "bg-pink-400"}>
            <h2>Myself</h2>
            <Son
                increaseController={increaseController}
                decreaseController={decreaseController}
            ></Son>
        </div>
    );
};

export default Myself;