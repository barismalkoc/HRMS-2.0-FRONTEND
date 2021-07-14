import React from 'react'
import BaseNavbar from './base/components/navbar/BaseNavbar'
import { Switch } from 'react-router'
import { Route } from 'react-router'
import EmployerNavbar from './employer/components/navbar/EmployerNavbar'
import JobSeekerNavbar from './jobSeeker/components/navbar/JobSeekerNavbar'
import StaffNavbar from './staff/components/navbar/StaffNavbar'
export default function Navi() {
    return (
        <div>
            <Switch>
            <Route  path="/employer/home" component={EmployerNavbar}></Route>

            <Route  path="/jobSeeker/home" component={JobSeekerNavbar}></Route>

            <Route  path="/staff/home" component={StaffNavbar}></Route>

            <Route  path="/" component={BaseNavbar}></Route>
                
            </Switch>
        </div>
    )
}
