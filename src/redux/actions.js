import {INCREMENT, DECREMENT} from "./actionTypes";


export const incrementCounter = _ => ({
    type: INCREMENT,
    // payload: {
    // }
    // if you would need a payload, you could pass it here for example which is commented out now
});

export const decrementCounter = _ => ({
    type: DECREMENT,
});
