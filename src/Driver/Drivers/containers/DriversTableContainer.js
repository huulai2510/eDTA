import React, { Component } from 'react'
import ButtonInTable from '../components/ButtonInTable'
import DriversTable from '../components/DriversTable'
import TbodyTable from '../components/TbodyTable'
import {connect} from 'react-redux'
import {actGetDriversRequest, actChangeColumn, actIdDriver} from '../../../Actions/index'

class DriversTableContainer extends Component {

    componentDidMount(){
        this.props.onGetDriversRequest()
    }

    render() {
        let {drivers, columns, searchTerm} =this.props
        return (
            <div>
                <ButtonInTable columns={columns} onChangeColumn={this.props.onChangeColumn}/>
                <DriversTable drivers={this.props.drivers} columns={this.props.columns}>
                    {this.showTbodyTable(this.filterTable(drivers, searchTerm), columns)}
                </DriversTable>
            </div>
        )
    }

    showTbodyTable = (drivers, columns) => {
        let result = null
        if(drivers.length >0){
            result = drivers.map((driver, index)=>{
                return(
                    <TbodyTable columns={columns} driver={driver} key={index} onIdDriver={this.props.onIdDriver}/>
                )
            })
        }
        return result
    }

    filterTable = (drivers, searchTerm) => {
        let result = null
        result = drivers.filter(driver => {
            return  driver.firstname.toLowerCase().indexOf(searchTerm.firstname.toLowerCase()) !== -1
                    && driver.lastname.toLowerCase().indexOf(searchTerm.lastname.toLowerCase()) !== -1
                    && driver.initial.toLowerCase().indexOf(searchTerm.initial.toLowerCase()) !== -1
                    && driver.birthday.toLowerCase().indexOf(searchTerm.birthday.toLowerCase()) !== -1
                    && driver.jobclass.toLowerCase().indexOf(searchTerm.jobclass.toLowerCase()) !== -1
                    && driver.status.toLowerCase().indexOf(searchTerm.status.toLowerCase()) !== -1
                    && driver.jobdescription.toLowerCase().indexOf(searchTerm.jobdescription.toLowerCase()) !== -1
                    && driver.department.toLowerCase().indexOf(searchTerm.department.toLowerCase()) !== -1
                    && driver.workgroup.toLowerCase().indexOf(searchTerm.workgroup.toLowerCase()) !== -1
                    && driver.workphone.toLowerCase().indexOf(searchTerm.workphone.toLowerCase()) !== -1
                    && driver.email.toLowerCase().indexOf(searchTerm.email.toLowerCase()) !== -1
                    && driver.homephone.toLowerCase().indexOf(searchTerm.homephone.toLowerCase()) !== -1
                    && driver.employeeid.toLowerCase().indexOf(searchTerm.employeeid.toLowerCase()) !== -1
        })
        return result
    }
}

const mapStateToProps = state => {
    return {
        drivers : state.DriversInformationReducer,
        columns : state.ColumnTableReducer,
        searchTerm : state.SearchTermReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetDriversRequest: () => {
            dispatch(actGetDriversRequest())
        },
        onChangeColumn: fieldName => {
            dispatch(actChangeColumn(fieldName))
        },
        onIdDriver: id => {
            dispatch(actIdDriver(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DriversTableContainer)