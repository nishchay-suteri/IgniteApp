// Since our store takes single reducer, we need to combine all oir reducers into single reducer.

import { combineReducers } from "redux";

import gameReducer from "./gameReducer";

// currently only 1 reducer is there, so it is not required, but in future we might use it
const rootReducer = combineReducers({
    gameReducer: gameReducer,
});

export default rootReducer;
