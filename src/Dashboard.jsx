import React from "react";
import {  Route, Switch } from "react-router-dom";
import Home from "./base/Home";
import DashboardEmployer from "./employer/DashboardEmployer";
import Navi from "./Navi";
import SignInPage from "./employer/pages/SignInPage";
import DashboardJobSeeker from "./jobSeeker/DashboardJobSeeker";
import SignInPageJobSeeker from "./jobSeeker/pages/SignInPageJobSeeker";
import DashboardStaff from "./staff/DashboardStaff";
import SignInPageStaff from "./staff/pages/SignInPageStaff";
import WhoAreWe from "./base/pages/WhoAreWe";
import EmployerHome from "./employer/pages/EmployerHome";
import AddJobAdvertisement from "./employer/layouts/AddJobAdvertisement";
import ContactUs from "./base/pages/ContactUs";
import HowToWork from "./base/pages/HowToWork";
import JobAdvertisementTable from "./base/pages/table/JobAdvertisementTable";
import EmployerConfirmTable from "./staff/table/EmployerConfirmTable";
import EmployerVerification from "./employer/pages/EmployerVerification";
import JobAdvertisementConfirmTable from "./staff/table/JobAdvertisementConfirmTable";
export default function Dashboard() {
  return (
    <div>
        
          <Navi/>
        <Switch>
          <Route exact path="/" component={Home}></Route>

          <Route exact path="/whoAreWe" component={WhoAreWe}></Route>
          <Route exact path="/contactUs" component={ContactUs}></Route>
          <Route exact path="/howToWork" component={HowToWork}></Route>

          <Route exact  path="/employer"  component={DashboardEmployer}></Route>
          <Route exact  path="/employer/verification"  component={EmployerVerification}></Route>
          <Route exact path="/employer/signIn" component={SignInPage}></Route>
          <Route exact  path="/employer/home"component={EmployerHome}></Route>
          <Route exact  path="/employer/home/jobAdvertisementAdd"component={AddJobAdvertisement}></Route>
          


          <Route exact  path="/jobSeeker"  component={DashboardJobSeeker}></Route>
          <Route exact  path="/jobSeeker"  component={DashboardJobSeeker}></Route>
          <Route exact path="/jobSeeker/signIn"  component={SignInPageJobSeeker}></Route>

          <Route exact path="/staff" component={DashboardStaff}></Route>
          <Route exact path="/staff/signIn" component={SignInPageStaff}></Route>
          <Route exact path="/staff/home/jAList" component={JobAdvertisementTable}></Route>
          <Route exact  path="/staff/home/confirmEmployer"component={EmployerConfirmTable}></Route>
          <Route exact  path="/staff/home/confirmJA"component={JobAdvertisementConfirmTable}></Route>

        </Switch>

    </div>
  );
}
