import React, {createContext, useState} from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

export const CountContext = createContext(0);

const Grandfather = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const increaseController = () => {
        setCount(count + 1);
    };

    const decreaseController = () => {
        setCount(count - 1);
    };

    const increaseController2 = () => {
        setCount2(count2 + 1);
    };

    const decreaseController2 = () => {
        setCount2(count2 - 1);
    };

    return (
        <CountContext.Provider value={[count2, setCount2, increaseController2, decreaseController2]}>
            <div className='border p-3'>
                <h2>Grandfather</h2>
                <div className='border p-3 flex justify-around'>
                    <Father
                        increaseController={increaseController}
                        decreaseController={decreaseController}
                        count={count}
                    ></Father>
                    <Uncle count={count}></Uncle>
                </div>
            </div>
        </CountContext.Provider>
    );
};

export default Grandfather;