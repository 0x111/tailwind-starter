import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {DECREMENT, INCREMENT} from "./redux/actionTypes";
import {decrementCounter, incrementCounter} from "./redux/actions";
// import {counter} from "./redux/selectors";


const ReduxExample = _ => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)

    return <>
        <p>Counter: {counter.counter}</p>
        <button onClick={() => dispatch(incrementCounter())}>Increment</button>
        <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
    </>;
}

export default ReduxExample;