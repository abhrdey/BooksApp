
import actionConstants from '../Constants/ActionNames'

const initialState = {
    searchResults: undefined,
    searchPrefix: undefined,
    isLoadingSearchData: undefined
}

export default (state=initialState, action) => {
    switch(action.type) {
        case actionConstants.SET_BOOK_SEARCH_DATA:
            return {
                ...state,
                searchResults: action.payload,
                isLoadingSearchData: false
            }
        case actionConstants.SET_BOOK_SEARCH_PREFIX:
            return {
                ...state,
                searchPrefix: action.payload,
                isLoadingSearchData: true
            }
        default:
            return state
    }
}

