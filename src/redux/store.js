import { createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(rootReducer, composeWithDevTools()); // other store enhancers if any
