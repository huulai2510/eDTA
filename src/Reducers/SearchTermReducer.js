import * as types from '../Constants/actionTypes'

const initialState = {
    firstname: '',
    lastname: '',
    initial: '',
    employeeid: '',
    birthday: '',
    jobclass: '',
    status: '',
    jobdescription: '',
    department: '',
    workgroup: '',
    workphone: '',
    email: '',
    homephone: ''
}

const SearchTermReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_TERM:
            state = action.searchTerm
            console.log(state)
            return state    
        default:
            return state
    }
}

export default SearchTermReducer