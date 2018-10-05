import React, { Component } from 'react'
import Drivers from './Drivers/Drivers'
import Cardstack from './Cardstack/Cardstack'

class DriverPages extends Component {
    render() {
        return (
            <section className='row'>
                <Drivers />
                <Cardstack />
            </section>
        )
    }
}

export default DriverPages