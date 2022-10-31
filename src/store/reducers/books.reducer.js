import * as actionTypes from '../actions/action.types';

const initialState = {
    search: {
        query: '',
        books: []
    },
    recommended: []

}

export default function(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_DATA_FROM_API_SUCCESS:
            return {
                ...state,
                search: {
                    query: action.query,
                    books: action.books.data.items
                }
            }
        case actionTypes.FETCH_DATA_RECOMMENDED_SUCCESS:
            const addedRecommended = {
                query: action.query,
                books: action.books.data.items
            }
            return {
                ...state,
                recommended: [...state.recommended, addedRecommended]
            }
        default:
            return state;
    }
}
