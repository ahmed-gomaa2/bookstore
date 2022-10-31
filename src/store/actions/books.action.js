import axios from 'axios';
import {FETCH_DATA_FROM_API_SUCCESS, FETCH_DATA_RECOMMENDED_SUCCESS} from "./action.types";

export const fetchBooks = query => async dispatch => {
    try{
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`);
        dispatch({
            type: FETCH_DATA_FROM_API_SUCCESS,
            books: response,
            query: query
        });
    }catch(e) {
        console.log(e);
    }
}

export const fetchRecommended = query => async dispatch => {
    try{
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`);
        dispatch({
            type: FETCH_DATA_RECOMMENDED_SUCCESS,
            books: response,
            query: query
        });
    }catch (e) {
        console.log(e);
    }
}
