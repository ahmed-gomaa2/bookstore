import {combineReducers} from "redux";
import booksReducer from "./books.reducer";

const initialState = {
    msg: 'hello from the redux store!'
}

const initialReducer = (state = initialState) => {
    return state;
}

export default combineReducers({
    msg: initialReducer,
    search: booksReducer
})
