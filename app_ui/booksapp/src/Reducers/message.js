
import actionConstants from '../Constants/ActionNames'

const initialState = {
    "errorMessage": undefined,
    "infoMessage": undefined
}

export default (state=initialState, action) => {
    switch(action.type) {
        case actionConstants.SET_INFO_MESSAGE:
            return {
                ...state,
                infoMessage: action.payload
            }
        case actionConstants.SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }
}