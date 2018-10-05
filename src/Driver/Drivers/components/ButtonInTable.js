import React, { Component } from 'react'

class ButtonInTable extends Component {
    render() {
        return (
            <div className='w-100 mt-2'>
                <div className="dropdown">
                    <button type="button" className="btn btn-primary float-right mr-3 dropdown-toggle" data-toggle="dropdown">Column</button>
                    <div className="dropdown-menu">
                        {this.showColumns(this.props.columns)}
                    </div>
                </div>
                <button type="button" className="btn btn-primary float-right mr-2">Download</button>
                <button type="button" className="btn btn-primary mr-2">Add</button>
                <button type="button" className="btn btn-primary">Deactive</button>
            </div>
        )
    }

    showColumns = columns => {
        let result = null
        if (columns.length > 0) {
            result = columns.map((column, index) => {
                return (
                    <span className="dropdown-item btn" key={index} onClick={() => this.props.onChangeColumn(column.fieldName)} ><i className={column.status ? 'far fa-check-square' : 'far fa-square'}></i> {column.field}</span>
                )
            })
        }
        return result
    }
}

export default ButtonInTable