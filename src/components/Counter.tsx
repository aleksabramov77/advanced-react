import {useState} from 'react';
import classes from './Counter.module.scss';
export const Counter = () => {
    const [number, setNumber] = useState(0);

    return (
        <div >
            <div > {number}</div>
            <button
                className={classes.button}
                onClick={() => setNumber(number + 1)}>+1</button>
        </div>)
}
