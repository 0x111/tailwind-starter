import {combineReducers} from 'redux';
import counter from "./reducers/counter";

export const rootReducer = combineReducers({
    counter: counter,
});