import React, { Component } from 'react'
import {connect} from 'react-redux'
import FilterField from '../components/FilterField'
import {actDeleteField, actAddField, actSearchTable} from '../../../Actions/index'
import ButtonInFilterTag from '../components/ButtonInFilterBar';

class FilterBar extends Component {

    constructor(){
        super()
        this.state = {
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
    }

    render() {
        let {filterFields, onAddField} = this.props
        return (
            <div className='row bg-primary text-white rounded p-2'>
                {this.showFilterFields(filterFields)}
                <ButtonInFilterTag filterFields={filterFields} onAddField={onAddField} onSearch={this.onSearch}/>
            </div>
        )
    }

    showFilterFields = fields => {
        let result = null
        if(fields.length > 0){
            result = fields.filter(field => field.status).map((field, index) => {
                return (
                    <FilterField field={field.field} fieldName={field.fieldName} status={field.status} key={index} index={index} onChangeFilter={this.onChangeFilter} onDeleteField={this.props.onDeleteField}/>
                )
            })
        }
        return result
    }

    onChangeFilter = changeFilter => {       
        let copy = Object.assign({}, this.state, changeFilter)
        this.setState(copy)
    }

    onSearch = () => {
        this.props.onSearch(this.state)
    }
}

const mapStateToProps = state => {
    return {
        filterFields : state.FilterFieldsReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteField: fieldName => {
            dispatch(actDeleteField(fieldName))
        },
        onAddField: fieldName => {
            dispatch(actAddField(fieldName))
        },
        onSearch: searchTerm => {
            dispatch(actSearchTable(searchTerm))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar)