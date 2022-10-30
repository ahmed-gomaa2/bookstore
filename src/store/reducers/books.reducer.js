import * as actionTypes from '../actions/action.types';

const initialState = {
    query: '',
    books: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_DATA_FROM_API_SUCCESS:
            return {
                ...state,
                query: action.query,
                books: action.books.data.items
            }
        default:
            return state;
    }
}
