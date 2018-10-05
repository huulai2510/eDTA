import React, { Component } from 'react'
import DriverInformation from './containers/DriverInformation';

class Cardstack extends Component {
    render() {
        return (
            <div className='col-6'>
                <DriverInformation />
            </div>
        )
    }
}

export default Cardstack