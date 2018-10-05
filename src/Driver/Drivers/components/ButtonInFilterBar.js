import React, { Component } from 'react'

class ButtonInFilterTag extends Component {
    render() {  
        return (
            <div className='w-100'>
                <button type="button" className="btn btn-success float-right mr-3" onClick={this.props.onSearch}>Search</button>
                <button type="button" className="btn btn-success float-right mr-2">Clear</button>
                <div className="dropdown">
                    <button type="button" className="btn btn-success float-right mr-3 dropdown-toggle" data-toggle="dropdown"><i className="fas fa-plus"></i> Add Filters</button>
                    <div className="dropdown-menu">
                        {this.showAddFilter(this.props.filterFields)}
                    </div>
                </div>
            </div>
        )
    }

    showAddFilter = fields => {
        let result = null
        if (fields.length > 0) {
            result = fields.map((field, index) => {
                return (
                    <span className="dropdown-item btn" key={index} onClick={() => this.props.onAddField(field.fieldName)} ><i className={field.status ? 'far fa-check-square' : 'far fa-square'}></i> {field.field}</span>
                )
            })
        }
        return result
    }
}

export default ButtonInFilterTag