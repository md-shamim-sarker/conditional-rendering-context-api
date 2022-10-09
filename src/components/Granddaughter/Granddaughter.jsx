import React, {useContext} from 'react';
import {CountContext} from '../Grandfather/Grandfather';

const Granddaughter = ({count}) => {
    const [count2, setCount2] = useContext(CountContext);
    return (
        <div className='border p-3'>
            <h2>Granddaughter</h2>
            <h2>Count = {count}</h2>
            <h2>Count2 = {count2}</h2>
        </div>
    );
};

export default Granddaughter;