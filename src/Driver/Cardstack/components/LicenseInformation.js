import React, { Component } from 'react'

class LicenseInformation extends Component {

    constructor(){
        super()
        this.state = {
            licenseno : '',
            state : '',
            expiration: '',
            licenseclassification: '',
            driverclassification: '',
            driverdistrictid: '',
            fuelcard: '',
            callboard: '',
            restrictions: ''
        }
    }

    render() {
        return (
            <div>
                <h5>License Informaion</h5>
                <div className='row'>
                    <div className='col-11 row'>
                        <div className="form-group col-4">
                            <label className='labelform'>License No.</label>
                            <div className='input-group'>
                                <input type="text" className="form-control form-control-sm" name='licenseno' value={this.state.licenseno} onChange={this.onChange} placeholder='Enter License No.'/>
                            </div>
                        </div>
                        <div className="form-group col-4">
                            <label className='labelform'>State</label>
                            <select className="form-control form-control-sm" name='state' value={this.state.state} onChange={this.onChange}>
                                <option value="State1">State 1</option>
                                <option value="State2">State 2</option>
                                <option value="State3">State 3</option>
                            </select>
                        </div>
                        <div className="form-group col-4">
                            <label className='labelform'>Expiration</label>
                            <div className='input-group'>
                                <input type="text" className="form-control form-control-sm" name='expiration' value={this.state.expiration} onChange={this.onChange} placeholder='Enter Expiration'/>
                            </div>
                        </div>
                        <div className="form-group col-6">
                            <label className='labelform'>License Classification</label>
                            <select className="form-control form-control-sm" name='licenseclassification' value={this.state.licenseclassification} onChange={this.onChange}>
                                <option value="LicenseClassification1">License Classification 1</option>
                                <option value="LicenseClassification2">License Classification 2</option>
                                <option value="LicenseClassification3">License Classification 3</option>
                            </select>
                        </div>
                        <div className="form-group col-6">
                            <label className='labelform'>Driver Classification</label>
                            <select className="form-control form-control-sm" name='driverclassification' value={this.state.driverclassification} onChange={this.onChange}>
                                <option value="DriverClassification1">Driver Classification 1</option>
                                <option value="DriverClassification2">Driver Classification 2</option>
                                <option value="DriverClassification3">Driver Classification 3</option>
                            </select>
                        </div>
                        <div className="form-group col-4">
                            <label className='labelform'>Driver District Id</label>
                            <div className='input-group'>
                                <input type="text" className="form-control form-control-sm" name='driverdistrictid' value={this.state.driverdistrictid} onChange={this.onChange} placeholder='Enter Driver District Id'/>
                            </div>
                        </div>
                        <div className="form-group col-4">
                            <label className='labelform'>Fuel Card</label>
                            <div className='input-group'>
                                <input type="text" className="form-control form-control-sm" name='fuelcard' value={this.state.fuelcard} onChange={this.onChange} placeholder='Enter Fuel Card'/>
                            </div>
                        </div>
                        <div className="form-group col-4">
                            <label className='labelform'>Call Board</label>
                            <div className='input-group'>
                                <input type="text" className="form-control form-control-sm" name='callboard' value={this.state.callboard} onChange={this.onChange} placeholder='Enter Call Board'/>
                            </div>
                        </div>
                    </div>
                    <div className='col'></div>
                    <div className="form-group col-12">
                        <label className='labelform'>Restrictions</label>
                        <div className='input-group'>
                            <textarea className="form-control" rows="3" name='restrictions' value={this.state.restrictions} onChange={this.onChange}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.driver){
            this.setState({
                licenseno : nextProps.driver.licenseno,
                state : nextProps.driver.state,
                expiration: nextProps.driver.expiration,
                licenseclassification: nextProps.driver.licenseclassification,
                driverclassification: nextProps.driver.driverclassification,
                driverdistrictid: nextProps.driver.driverdistrictid,
                fuelcard: nextProps.driver.fuelcard,
                callboard: nextProps.driver.callboard,
                restrictions: nextProps.driver.restrictions
            })
        }
    }

    onChange = e => {
        let target = e.target
        let name = target.name
        let value = target.value
        this.setState({
            [name]: value
        })
    }
}

export default LicenseInformation