import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import dataReducer from "./reducer";

const rootReducers = combineReducers({ dataReducer });

export const Store = createStore(rootReducers, applyMiddleware(thunk));
