import * as types from '../Constants/actionTypes'
import callApi from '../utils/apiCaller'

export const actDeleteField = fieldName => {
    return {
        type: types.DELETE_FIELD,
        fieldName
    }
}

export const actAddField = fieldName => {
    return {
        type: types.ADD_FIELD,
        fieldName
    }
}

export const actGetDriversRequest = () => {
    return dispatch => {
        callApi('driver/search', 'POST', {
            "page": 1,
            "columnsort": "firstname",
            "ascsort": "ascend"
        }).then(res => {
            dispatch(actGetDrivers(res.data))
        })
    }
}

export const actGetDrivers = drivers => {
    return {
        type: types.GET_DRIVERS,
        drivers
    }
}

export const actChangeColumn = fieldName => {
    return {
        type: types.CHANGE_COLUMN,
        fieldName
    }
}

export const actIdDriver = id => {
    return {
        type: types.SEND_ID,
        id
    }
}

export const actSearchTable = searchTerm => {
    return {
        type: types.SEARCH_TERM,
        searchTerm
    }
}