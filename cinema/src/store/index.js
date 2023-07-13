import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import cinemasReducer from "./cinemasReducer";

const rootReducer = combineReducers({
    cinemas:cinemasReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))