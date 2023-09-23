import {useState} from 'react';
import './Counter.scss';
export const Counter = () => {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <div> {number}</div>
            <button onClick={() => setNumber(number + 1)}>+1</button>
        </div>)
}
