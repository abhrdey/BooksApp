
import actionConstants from '../Constants/ActionNames'

const initialState = {
    searchResults: undefined,
    searchPrefix: undefined
}

export default (state=initialState, action) => {
    switch(action.type) {
        case actionConstants.SET_BOOK_SEARCH_DATA:
            return {
                ...state,
                searchResults: action.payload
            }
        case actionConstants.SET_BOOK_SEARCH_PREFIX:
            return {
                ...state,
                searchPrefix: action.payload
            }
        default:
            return state
    }
}

