import { combineReducers } from "redux";
import counterReducer from "./counterReducer"
import textReducer from "./textReducer";

const appReducer = combineReducers({
    counter: counterReducer,
    text: textReducer
});

export type RootState = ReturnType<typeof appReducer>
export default appReducer
