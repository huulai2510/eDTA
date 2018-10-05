import React, { Component } from 'react'

class JobInformation extends Component {

    constructor(){
        super()
        this.state = {
            status: '',
            jobdescription: '',
            department: '',
            workgroup: '',
            jobclass: '',
            workphone: '',
            email: '',
            homephone: ''
        }
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col'>
                        <h5>Job Informaion</h5>
                    </div>
                    <div className='col float-right'>
                        <div className="form-check float-right">
                            <label className="form-check-label labelform">
                                <input type="radio" className="form-check-input" name="status" value="Not Active" checked={this.state.status === 'Not Active'} onChange={this.onChange} />
                                Not Active
                            </label>
                        </div>
                        <div className="form-check float-right mr-2">
                            <label className="form-check-label labelform">
                                <input type="radio" className="form-check-input" name="status" value="Active" checked={this.state.status === 'Active'} onChange={this.onChange} />
                                Active
                            </label>
                        </div>
                        <p className='float-right mr-2'>Status:</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='row col-11'>
                        <div className="form-group col-6">
                            <label className='labelform'>Job Description</label>
                            <div className='input-group'>
                                <input type="text" className="form-control form-control-sm" name='jobdescription' value={this.state.jobdescription} placeholder='Enter job description'  onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="form-group col-6">
                            <label className='labelform'>Department</label>
                            <select className="form-control form-control-sm">
                                <option value="Department1">Department 1</option>
                                <option value="Department2">Department 2</option>
                                <option value="Department3">Department 3</option>
                            </select>
                        </div>
                        <div className="form-group col-6">
                            <label className='labelform'>Work Group</label>
                            <select className="form-control form-control-sm">
                                <option value="WorkGroup1">Work Group 1</option>
                                <option value="WorkGroup2">Work Group 2</option>
                                <option value="WorkGroup3">Work Group 3</option>
                            </select>
                        </div>
                        <div className="form-group col-6">
                            <label className='labelform'>Job class</label>
                            <select className="form-control form-control-sm">
                                <option value="JobClass1">Job class 1</option>
                                <option value="JobClass2">Job class 2</option>
                                <option value="JobClass3">Job class 3</option>
                            </select>
                        </div>
                        <div className="form-group col-4">
                            <label className='labelform'>Work phone</label>
                            <div className='input-group'>
                                <input type="text" className="form-control form-control-sm" name='workphone' value={this.state.workphone} placeholder='Enter work phone'  onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="form-group col-4">
                            <label className='labelform'>Email</label>
                            <div className='input-group'>
                                <input type="text" className="form-control form-control-sm" name='email' value={this.state.email} placeholder='Enter email'  onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="form-group col-4">
                            <label className='labelform'>Home phone</label>
                            <div className='input-group'>
                                <input type="text" className="form-control form-control-sm" name='homephone' value={this.state.homephone} placeholder='Enter ome phone' onChange={this.onChange}/>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'></div>
                    <div className="form-group col-12">
                        <label className='labelform'>Note</label>
                        <div className='input-group'>
                            <textarea className="form-control" rows="3"></textarea>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        )
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.driver){
            this.setState({
                status: nextProps.driver.status,
                jobdescription: nextProps.driver.jobdescription,
                department: nextProps.driver.department,
                workgroup: nextProps.driver.workgroup,
                jobclass: nextProps.driver.jobclass,
                workphone: nextProps.driver.workphone,
                email: nextProps.driver.email,
                homephone: nextProps.driver.homephone
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

export default JobInformation