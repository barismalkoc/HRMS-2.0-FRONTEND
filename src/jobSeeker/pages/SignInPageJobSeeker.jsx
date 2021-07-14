import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import BBMTextInput from "../../utilities/customFormControls/BBMTextInput";
import { useAlert } from "react-alert";
import JobSeekerService from '../../services/jobSeekerService';
import { Link, useHistory } from "react-router-dom";
export default function SignInPageJobSeeker() {

    const [jobSeekers, setJobSeekers] = useState([])
    const alert = useAlert();

    const history = useHistory();

    useEffect(() => {
        let jobSeekerService = new JobSeekerService();
        jobSeekerService.jobSeekerGetAll()
        .then(result => setJobSeekers(result.data.data))
    },[])

    const initialValues = {
        email:"",
        password:"",
    }

    const schema = Yup.object({
        email: Yup.string().required(),
        password: Yup.string().required(),
    })

    function checkValidation(email, password) {

        for (let index = 0; index < jobSeekers.length; index++) {
            const jobSeeker = jobSeekers[index];
            if (jobSeeker.email === email && jobSeeker.password === password) {
                console.log("giriş başarılı")
                alert.success("Login successful.")
                history.push("/jobSeeker/home")
                
                break;
            }else if (index + 1 === jobSeekers.length) {
                console.log("giriş başarısız")
                alert.error("Email or password is incorrect");
            }  
        }
    }

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
            checkValidation(values.email, values.password);
        }}
        >
            <Form className="ui form">
            <div className="sign-out-body">
            <div className="sign-out-container">
              <div className="title-ui">Sign In JobSeeker</div>
    
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Email</span>
                    <BBMTextInput name="email" placeholder="Email" />
                  </div>
                  <div className="input-box">
                    <span className="details">
                      Password
                    </span>
                    <BBMTextInput type="password" name="password" placeholder="Password" />
                  </div>
                  
                  
                </div>
                <div className="button-employer-signed-out">
                  <Button  content="Register" fluid className="input" type="submit">
                    
                  </Button>
                </div>
                <Link to="/jobSeeker">Click to create a new account</Link>
            </div>
            
          </div>
  
            </Form>
        </Formik>
    )
}
