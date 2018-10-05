import React, { Component } from 'react'
import BasicInformation from '../components/BasicInformation'
import JobInformation from '../components/JobInformation'
import LicenseInformation from '../components/LicenseInformation'
import {connect} from 'react-redux'

class DriverInformation extends Component {

    constructor() {
        super()
        this.state = {
            showCard : true,
            information: {}
        }
    }

    render() {
        let {idDriver, drivers} = this.props
        return (
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <i className="far fa-window-maximize float-right fa-2x" onClick={() => this.props.changeSize()}></i>
                    <h6 onClick={() => this.setState({showCard : !this.state.showCard})}>Driver Information</h6>
                </div>
                {this.state.showCard ?
                    <div className="card-body">
                        <button type="button" className="btn btn-primary float-right">Save</button>
                        <button type="button" className="btn btn-outline-primary mr-2 float-right">Cancel</button>
                        <h3 className="card-title">Driver Information<i className="far fa-question-circle btn btn-lg"></i></h3>
                        <BasicInformation driver={drivers[this.findIndex(drivers, idDriver)]} onChangeInformation={this.onChangeInformation}/>
                        <JobInformation driver={drivers[this.findIndex(drivers, idDriver)]}/>
                        <LicenseInformation driver={drivers[this.findIndex(drivers, idDriver)]}/>
                    </div>
                    : <React.Fragment></React.Fragment>}
            </div>
        )
    }

    findIndex = (drivers, id) => {
        let index = -1
        for (let i = 0; i < drivers.length; i++) {
            if(drivers[i].id === id){
                index = i
                break
            }            
        }        
        return index        
    }

    onChangeInformation = changeInformation => {       
        console.log(changeInformation)   
    }
}

const mapStateToProps = state => {
    return {
        drivers : state.DriversInformationReducer,
        idDriver : state.IdDriverReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverInformation)