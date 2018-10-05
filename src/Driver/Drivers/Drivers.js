import React, { Component } from 'react'
import FilterBarContainer from './containers/FilterBarContainer'
import DriversTableContainer from './containers/DriversTableContainer';

class Drivers extends Component {
    render() {
        return (
            <section className='col-6'>
                <h1>Drivers</h1>
                <FilterBarContainer />
                <DriversTableContainer />
            </section>
        )
    }
}

export default Drivers