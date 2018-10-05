import React, { Component } from 'react'

class FilterField extends Component {

    constructor(){
        super()
        this.state = {

        }
    }

    render() {

        let {field, fieldName, index} = this.props

        return (
            <div className="form-group col-4">
                <label>{field}</label>
                <div className='input-group'>
                    {fieldName !== 'status' ? <input type="text" className="form-control" name={fieldName} value={this.state.name} onChange={this.onChange} /> :
                        <select className="custom-select" name={fieldName} value={this.state.name} onChange={this.onChange} >
                            <option value="all">all</option>
                            <option value="active">active</option>
                            <option value="not active">not active</option>
                        </select>}
                    <div className="input-group-append" onClick={() => this.props.onDeleteField(fieldName)}>
                        <i className="fas fa-times-circle input-group-text btn"></i>
                    </div>
                </div>
            </div>
        )
    }

    onChange = e => {
        let target = e.target
        let value = target.value
        let name = target.name
        this.setState({
            [name]: value
        }, () => this.props.onChangeFilter(this.state))
    }
}

export default FilterField