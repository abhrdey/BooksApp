
import ActionConstants from '../Constants/ActionNames'

const initialState = {
    "isAuthenticated": false
}

export default (state=initialState, action) => {
    switch(action.type) {
        case ActionConstants.SET_DROPBOX_AUTHENTICATION_FLAG:
            return {
                ...state,
                isAuthenticated: action.payload
            }
        default:
            return state
    }
}