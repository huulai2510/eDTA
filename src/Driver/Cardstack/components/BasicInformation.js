import React, { Component } from 'react'

class BasicInformation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            birthday: '',
            picture: 'http://www.keircom.com/images/menu/office-erp-login.jpg',
            firstname: '',
            lastname: '',
            initial: '',
            employeeid: ''
        }
    }

    render() {
        console.log(this.props)
        return (
            <div className='row'>
                <div className='col-3 row'>
                    <div className='col-12 divimg'>
                        <img src={this.state.picture} alt="..." height={'100%'} width={'100%'} />
                    </div>
                    <div className="form-group position-relative w-100 mt-1">
                        <input type="file" className="form-control-file" name="" id='upload-photo' onChange={this.fileChangedHandler} />
                        <label className='btn btn-success w-100 labelform'><i className="fas fa-camera"></i> Upload</label>
                    </div>
                </div>
                <div className="col-8 row">
                    <div className="form-group col-5">
                        <label className='labelform'>First Name</label>
                        <div className='input-group'>
                            <input type="text" className="form-control form-control-sm" name='firstname' value={this.state.firstname} onChange={this.onChange} placeholder='Enter first name' />
                        </div>
                    </div>
                    <div className="form-group col-4">
                        <label className='labelform'>Last Name</label>
                        <div className='input-group'>
                            <input type="text" className="form-control form-control-sm" name='lastname' value={this.state.lastname} onChange={this.onChange} placeholder='Enter last name' />
                        </div>
                    </div>
                    <div className="form-group col-3">
                        <label className='labelform'>Initial</label>
                        <div className='input-group'>
                            <input type="text" className="form-control form-control-sm" name='initial' value={this.state.initial} onChange={this.onChange} placeholder='Enter initial' />
                        </div>
                    </div>
                    <div className='form-group col-4'>
                        <label className='labelform'>Birthday</label>
                        <input type="text" className="form-control form-control-sm" name='initial' value={this.state.birthday} onChange={this.onChange} placeholder='Enter initial' />
                    </div>
                    <div className='col-1'></div>
                    <div className="form-group col-7 row p-0">
                        <label className='col pl-0 labelform'>Employee ID</label>
                        <div className="form-check col p-0">
                            <label className="form-check-label float-right labelform">
                                <input type="checkbox" className="form-check-input" name="temporary"/>
                                Temporary
                            </label>
                        </div>
                        <div className='input-group'>
                            <input type="text" className="form-control form-control-sm" name='employeeid'  value={this.state.employeeid} onChange={this.onChange} placeholder='Enter EmployeeID' />
                        </div>
                    </div>
                    <div className="form-group col-6">
                        <label className='labelform'>Password</label>
                        <div className='input-group'>
                            <input type="password" className="form-control form-control-sm" name='' placeholder='Enter password' />
                        </div>
                    </div>
                    <div className="form-group col-6">
                        <label className='labelform'>Comfirm Password</label>
                        <div className='input-group'>
                            <input type="password" className="form-control form-control-sm" name='' placeholder='Enter comfirm password' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.driver){
            this.setState({
                firstname: nextProps.driver.firstname? nextProps.driver.firstname : '',
                lastname: nextProps.driver.lastname? nextProps.driver.lastname : '',
                initial: nextProps.driver.initial? nextProps.driver.initial : '',
                employeeid: nextProps.driver.employeeid? nextProps.driver.employeeid : '',
                picture: nextProps.driver.photo? nextProps.driver.photo :'http://www.keircom.com/images/menu/office-erp-login.jpg'
            })
        }        
    }

    fileChangedHandler = (e) => {
        this.setState({
            picture: URL.createObjectURL(e.target.files[0])
        })
    }

    onChange = e => {
        let target = e.target
        let name = target.name
        let value = target.value
        this.setState({
            [name]: value
        }, () => this.props.onChangeInformation(this.state) )
    }

}

export default BasicInformation