import * as types from '../Constants/actionTypes'

const initialState = []

const DriversInformationReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DRIVERS:
            state = action.drivers
            return state
        default:
            return state
    }
}

export default DriversInformationReducer