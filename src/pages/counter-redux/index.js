import { useDispatch, useSelector } from 'react-redux';

import { increment, decrement } from '../../store/actions/counterActions';

export default function CounterRedux() {
    const dispatch = useDispatch();
    const { counter } = useSelector(state => state);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
        </div>
    )
};