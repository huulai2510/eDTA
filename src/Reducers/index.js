import { combineReducers } from 'redux'
import FilterFieldsReducer from './FilterFieldsReducer'
import DriversInformationReducer from './DriversInformationReducer'
import ColumnTableReducer from './ColumnTableReducer'
import IdDriverReducer from './IdDriverReducer'
import SearchTermReducer from './SearchTermReducer'


const rootReducer = combineReducers({
    FilterFieldsReducer,
    DriversInformationReducer,
    ColumnTableReducer,
    IdDriverReducer,
    SearchTermReducer
})

export default rootReducer