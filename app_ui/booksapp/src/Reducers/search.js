
import actionConstants from '../Constants/ActionNames'

const initialState = {
    searchResults: undefined,
    searchPrefix: undefined,
    selectedBooks: undefined,
    isLoadingSearchData: undefined,
    searchPageIndex: 0
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
        case actionConstants.SET_SELECTED_BOOKS_DATA:
            return {
                ...state,
                selectedBooks: action.payload
            }
        case actionConstants.SET_SEARCH_INDEX:
            return {
                ...state,
                searchPageIndex: action.payload,
                isLoadingSearchData: true
            }
        default:
            return state
    }
}

