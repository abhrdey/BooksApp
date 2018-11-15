
import SET_BOOK_SEARCH_DATA from '../Constants/ActionNames'

const initialState = {
    searchResults: undefined
}

export default (state=initialState, action) => {
    switch(action.type) {
        case SET_BOOK_SEARCH_DATA:
            return {
                ...state,
                searchResults: action.payload
            }
        default:
            return state
    }
}

