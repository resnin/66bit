import { applyMiddleware, combineReducers, createStore } from "redux";
import newsReducer from "./news-reducer";
import themesReducer from "./themes-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
   newsPage: newsReducer,
   themesPage: themesReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;