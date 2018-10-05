import * as types from '../Constants/actionTypes'

const initialState = 1

const IdDriverReducer = ( state = initialState, action) => {
    switch (action.type) {
        case types.SEND_ID:
            state = action.id          
            return state
        default:
            return state
    }
}

export default IdDriverReducer