import React from "react";
import "../css/employerSignedOut.css";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import BBMTextInput from "../../utilities/customFormControls/BBMTextInput";
import { Link, useHistory } from "react-router-dom";
import EmployerService from "../../services/employerServices";

export default function EmployerSignedOut() {

  let employerService = new EmployerService();
  const history = useHistory();

  const initialValues = {
    companyName: "",
    email: "",
    password: "",
    passwordRepeat: "",
    phoneNumber: "",
    website: "",
    emailBool:true,
    staffVerification:false,
    emailVerification:false,
  };

  const schema = Yup.object({
    companyName: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    passwordRepeat: Yup.string().required(),
    phoneNumber: Yup.string().required(),
    website: Yup.string().required(),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        employerService.employerAdd(values)
        history.push("/employer/verification")
      }}
    >
      
      <Form className="ui form">
      
        <div className="sign-out-body">
          <div className="sign-out-container">
            <div className="title-ui">Registration Employer</div>
  
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Company Name</span>
                  <BBMTextInput name="companyName" placeholder="Company Name" />
                </div>
                <div className="input-box">
                  <span className="details">
                    Email
                  </span>
                  <BBMTextInput name="email" placeholder="Email" />
                </div>
                <div className="input-box">
                  <span name="website" className="details">
                    Website
                  </span>
                  <BBMTextInput name="website" placeholder="Website" />
                </div>
                <div className="input-box">
                  <span  className="details">
                    Phone Number
                  </span>
                  <BBMTextInput name="phoneNumber" placeholder=" Phone Number" />
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
                <Button content="Register" fluid className="input" type="submit">
                  
                </Button>
              </div>
              <Link className="signInLink" to="/employer/signIn">Already have an account. Click Here</Link>
          </div>
          
        </div>
      </Form>
    </Formik>
  );
}
