// Combine the reducers on this file
import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
});

export default reducers;