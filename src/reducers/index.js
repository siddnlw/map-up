import { combineReducers, createStore } from "redux";
import init from "./init";
import regions from "./regions";

const rootReducer = combineReducers({
  regions,
  init,
});

const initialState = {};

const Store = createStore(rootReducer, initialState);

export default Store;
