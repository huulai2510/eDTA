import React, { Component } from 'react';
import { isBuffer } from 'util';

class DriversTable extends Component {
    render() {
        return (
            <div className='mt-2'>
                <table className="table">
                    <thead>
                        <tr>
                            {this.showTheads(this.props.columns)}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        );
    }

    showTheads = theads => {
        let result = null
        if(theads.length > 0){
            result = theads.filter(thead => thead.status).map((thead, index) => {
                return (
                    <th key={index}>{thead.field}</th>
                )
            })
        }
        return result
    }
}

export default DriversTable;