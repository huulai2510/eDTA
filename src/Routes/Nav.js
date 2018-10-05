import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

const menus = [
    {
        name: 'Drivers',
        to: '/Drivers',
        exact: false,
        icon: 'fas fa-truck'
    },
    {
        name: 'Timesheet Records',
        to: '/TimesheetRecord',
        exact: false,
        icon: 'fas fa-file-alt'
    },
    {
        name: 'Edulog Analytics',
        to: '/EdulogAnalytics',
        exact: false,
        icon: 'fas fa-chart-bar'
    },
    {
        name: 'Admin Panel',
        to: '/AdminPanel',
        exact: false,
        icon: 'fas fa-cogs'
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact, icon }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            let active = match ? 'active' : ''
            return (
                <li className={"nav-item " + active}>
                    <Link className="nav-link" to={to}><i className={icon}></i> {label}</Link>
                </li>
            )
        }} />
    )
}

class Nav extends Component {
    render() {
        return (
            <div className=''>
                <nav className="navbar navbar-expand navbar-dark bg-primary">
                    <ul className="nav navbar-nav container d-flex flex-column flex-md-row justify-content-between">
                        {this.showMenus(menus)}
                    </ul>
                </nav>
            </div>
        )
    }

    showMenus = menus => {
        let result = null
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (<MenuLink label={menu.name} to={menu.to} activeOnlyWhenExact={menu.active} key={index} icon={menu.icon} />)
            })
        }
        return result
    }

}

export default Nav