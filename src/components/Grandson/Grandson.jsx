import {useContext} from "react";
import {CountContext} from "../Grandfather/Grandfather";

const Grandson = ({increaseController, decreaseController}) => {
    const [count2, setCount2, increaseController2, decreaseController2] = useContext(CountContext);
    return (
        <div className='border p-3'>
            <h2>Grandson</h2>
            <button onClick={increaseController}>Drilling+</button>
            <button onClick={decreaseController}>Drilling-</button>
            <button onClick={increaseController2}>Context+</button>
            <button onClick={decreaseController2}>Context-</button>
        </div>
    );
};

export default Grandson;