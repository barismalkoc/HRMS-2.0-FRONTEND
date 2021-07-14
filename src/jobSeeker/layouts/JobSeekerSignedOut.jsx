import React from 'react'
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import BBMTextInput from "../../utilities/customFormControls/BBMTextInput";
import { Link, useHistory } from "react-router-dom";
import JobSeekerService from '../../services/jobSeekerService';
export default function JobSeekerSignedOut() {

    let jobSeekerService = new JobSeekerService();
  const history = useHistory();
  

    const initialValues = {
        birthYear: null,
        email: "",
        firstName: "",
        lastName: "",
        identityNumber: "",
        password: "",
        passwordRepeat: "",

    };

    const schema = Yup.object({
        birthYear:Yup.number().required(),
        email: Yup.string().required(),
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        identityNumber: Yup.string().required(),
        password: Yup.string().required(),
        passwordRepeat: Yup.string().required(),

    })
    return (
        <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        jobSeekerService.add(values)
        history.push("jobseeker/signIn")
      }}
    >
      
      <Form className="ui form">
      
        <div className="sign-out-body">
          <div className="sign-out-container">
            <div className="title-ui">Registration JobSeeker</div>
  
              <div className="user-details">
                <div className="input-box">
                  <span className="details">First Name</span>
                  <BBMTextInput name="firstName" placeholder="First Name" />
                </div>
                <div className="input-box">
                  <span className="details">
                    Last Name
                  </span>
                  <BBMTextInput name="lastName" placeholder="Last Name" />
                </div>
                <div className="input-box">
                  <span name="website" className="details">
                     Birth Year
                  </span>
                  <BBMTextInput name="birthYear" placeholder="Birth Year" />
                </div>
                <div className="input-box">
                  <span  className="details">
                    Email
                  </span>
                  <BBMTextInput name="email" placeholder=" Email" />
                </div>
                <div className="input-box">
                  <span  className="details">
                    Identity Number
                  </span>
                  <BBMTextInput name="identityNumber" placeholder="Identity Number" />
                </div>
                <div className="input-box">
                  <span  className="details">
                    Password
                  </span>
                  <BBMTextInput type="password" name="password" placeholder="Password" />
                </div>
                <div className="input-box">
                  <span  className="details">
                    Password Repeat
                  </span>
                  <BBMTextInput type="password" name="passwordRepeat" placeholder="Password Repeat" />
                </div>
              </div>
              <div className="button-employer-signed-out">
                <Button  content="Register" fluid className="input" type="submit">
                  
                </Button>
              </div>
              <Link to="/jobSeeker/signIn">Already have an account. Click Here</Link>
          </div>
          
        </div>
      </Form>
    </Formik>
    )
}
