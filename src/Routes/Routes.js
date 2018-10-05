import React from 'react'
import TimesheetRecordsPage from '../TimesheetRecords/TimesheetRecordsPage'
import DriverPages from '../Driver/DriverPages'
import AdminPanelPage from '../AdminPanel/AdminPanelPage'
import EduAnalyticsPage from '../EduAnalytics/EduAnalyticsPage'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <DriverPages />
    },
    {
        path: '/AdminPanel',
        exact: false,
        main: () => <AdminPanelPage />
    },
    {
        path: '/Drivers',
        exact: false,
        main: () => <DriverPages />
    },
    {
        path: '/EdulogAnalytics',
        exact: false,
        main: () => <EduAnalyticsPage />
    },
    {
        path: '/TimesheetRecord',
        exact: false,
        main: () => <TimesheetRecordsPage />
    }
]

export default routes