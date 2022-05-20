import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/index';

import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.value);
    const show = useSelector(state => state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment());   // excute, increment fn creates a full action object 
    };
    const increseHandler = () => {
        dispatch(counterActions.increse(10));   // this will pass like: increase({type: SOME_UNIQUE_IDENTIFIRE, payload: 10})
    };
    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increseHandler}>Increse by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
