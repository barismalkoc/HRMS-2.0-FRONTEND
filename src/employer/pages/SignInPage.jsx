import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import BBMTextInput from "../../utilities/customFormControls/BBMTextInput";
import EmployerService from "../../services/employerServices";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SignInPage() {
  const [employers, setEmployers] = useState([]);
  const alert = useAlert();

  const history = useHistory();

  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getAll().then((result) => setEmployers(result.data.data));
  }, []);
  const initialValues = {
    companyName: "",
    password: "",
  };

  const schema = Yup.object({
    companyName: Yup.string().required(),
    password: Yup.string().required(),
  });

  function checkValidation(companyName, password) {
    for (let index = 0; index < employers.length; index++) {
      const employer = employers[index];
      if (
        employer.companyName === companyName &&
        employer.password === password
      ) {
        if(employer.emailVerification === true) {
          if (employer.staffVerification === true) {
          
            console.log("giriş başarılı");
            alert.success("Login successful.");
            history.push("/employer/home");
          } else {
            alert.info("Awaiting approval.");
          }

        }else{
          alert.info("Waiting for email confirmation.")
        }
        
        console.log(employer.emailVerificationCode);

        break;
      } else if (index + 1 === employers.length || employers.length === 0) {
        console.log("giriş başarısız");
        alert.error("Company name or password is incorrect");
      }
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        checkValidation(values.companyName, values.password);
      }}
    >
      <Form className="ui form">
        <div className="sign-out-body">
          <div className="sign-out-container">
            <div className="title-ui">Sign In Employer</div>

            <div className="user-details">
              <div className="input-box">
                <span className="details">Company Name</span>
                <BBMTextInput name="companyName" placeholder="Company Name" />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <BBMTextInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="button-employer-signed-out">
              <Button
                content="Register"
                fluid
                className="input"
                type="submit"
              ></Button>
            </div>
            <Link className="signInLink" to="/employer">Click to create new account.</Link>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
