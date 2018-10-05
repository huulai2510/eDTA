import React, { Component } from 'react'

class TbodyTable extends Component {
    render() {
        let {columns, driver} = this.props
        return (
            <tr  onClick={() => this.props.onIdDriver(driver.id)}>
                {columns[0].status ? <td>{driver.firstname ? driver.firstname : ''}</td> : <React.Fragment></React.Fragment>}
                {columns[1].status ? <td>{driver.lastname? driver.lastname :''}</td> : <React.Fragment></React.Fragment>}
                {columns[2].status ? <td>{driver.initial? driver.initial :''}</td> : <React.Fragment></React.Fragment>}
                {columns[3].status ? <td>{driver.employeeid? driver.employeeid :''}</td> : <React.Fragment></React.Fragment>}
                {columns[4].status ? <td>{driver.birthday? driver.birthday :''}</td> : <React.Fragment></React.Fragment>}
                {columns[5].status ? <td>{driver.jobclass? driver.jobclass: ''}</td> : <React.Fragment></React.Fragment>}
                {columns[6].status ? <td>{driver.status ? driver.status : ''}</td> : <React.Fragment></React.Fragment>}
                {columns[7].status ? <td>{driver.jobdescription? driver.jobdescription: ''}</td> : <React.Fragment></React.Fragment>}
                {columns[8].status ? <td>{driver.department? driver.department : ''}</td> : <React.Fragment></React.Fragment>}
                {columns[9].status ? <td>{driver.workgroup? driver.workgroup: ''}</td> : <React.Fragment></React.Fragment>}
                {columns[10].status ? <td>{driver.workphone? driver.workphone :''}</td> : <React.Fragment></React.Fragment>}
                {columns[11].status ? <td>{driver.email? driver.email :''}</td> : <React.Fragment></React.Fragment>}
                {columns[12].status ? <td>{driver.homephone? driver.homephone :''}</td> : <React.Fragment></React.Fragment>}
            </tr>
        )
    }
}

export default TbodyTable