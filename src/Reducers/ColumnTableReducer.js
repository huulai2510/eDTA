import * as types from '../Constants/actionTypes'

const initialState = [
    {
        field: 'First name',
        fieldName: 'firstame',
        status: true
    },
    {
        field: 'Last name',
        fieldName: 'lastname',
        status: true
    },
    {
        field: 'Initial',
        fieldName: 'initial',
        status: false
    },
    {
        field: 'Employee ID',
        fieldName: 'employeeid',
        status: true
    },
    {
        field: 'Birthday',
        fieldName: 'birthday',
        status: true
    },
    {
        field: 'Job class',
        fieldName: 'jobclass',
        status: true
    },
    {
        field: 'Status',
        fieldName: 'status',
        status: true
    },
    {
        field: 'Job Description',
        fieldName: 'jobdescription',
        status: false
    },
    {
        field: 'Department',
        fieldName: 'department',
        status: false
    },
    {
        field: 'Work Group',
        fieldName: 'workgroup',
        status: false
    },
    {
        field: 'Work Phone',
        fieldName: 'workphone',
        status: false
    },
    {
        field: 'Email',
        fieldName: 'email',
        status: false
    },
    {
        field: 'Home Phone',
        fieldName: 'homephone',
        status: false
    }
]

const ColumnTableReducer = (state = initialState, action) => {
    let index = -1
    switch (action.type) {
        case types.CHANGE_COLUMN:
            index = findIndex(state, action.fieldName)
            state[index].status = !state[index].status
            return [...state]
        default:
            return state
    }
}

const findIndex = (state, fieldName) => {
    let index = -1
    for (let i = 0; i < state.length; i++) {
        if(state[i].fieldName === fieldName){           
            index = i
            break
        }         
    }
    return index
}

export default ColumnTableReducer