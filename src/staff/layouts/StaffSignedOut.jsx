import React from 'react'
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import BBMTextInput from "../../utilities/customFormControls/BBMTextInput";
import { Link } from "react-router-dom";
import StaffService from '../../services/staffService';

export default function StaffSignedOut() {
    let staffService = new StaffService();

    
    const initialValues = {
        email: "",
        hrmsStaffCode:"",
        hrmsStaffLastName:"",
        hrmsStaffName:"",
        password:"",

    }
    const schema = Yup.object({
        email: Yup.string().required(),
        hrmsStaffCode: Yup.string().required(),
        hrmsStaffLastName: Yup.string().required(),
        hrmsStaffName: Yup.string().required(),
        password: Yup.string().required(),
    })
    return (
        <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        staffService.register(values)
      }}
    >
      
      <Form className="ui form">
      
        <div className="sign-out-body">
          <div className="sign-out-container">
            <div className="title-ui">Registration Staff</div>
  
              <div className="user-details">
                <div className="input-box">
                  <span className="details">First Name</span>
                  <BBMTextInput name="hrmsStaffName" placeholder="First Name" />
                </div>
                <div className="input-box">
                  <span className="details">
                    Last Name
                  </span>
                  <BBMTextInput name="hrmsStaffLastName" placeholder="Last Name" />
                </div>
                <div className="input-box">
                  <span  className="details">
                    Email
                  </span>
                  <BBMTextInput name="email" placeholder="Email" />
                </div>
                <div className="input-box">
                  <span  className="details">
                    Hrms Staff Code
                  </span>
                  <BBMTextInput name="hrmsStaffCode" placeholder="Hrms Staff Code" />
                </div>
                <div className="input-box">
                  <span  className="details">
                    Password
                  </span>
                  <BBMTextInput type="password" name="password" placeholder="Password" />
                </div>
                
              </div>
              <div className="button-employer-signed-out">
                <Button  content="Register" fluid className="input" type="submit">
                  
                </Button>
              </div>
              <Link to="/staff/signIn">Already have an account. Click Here</Link>
          </div>
          
        </div>
      </Form>
    </Formik>
  );
    
}
