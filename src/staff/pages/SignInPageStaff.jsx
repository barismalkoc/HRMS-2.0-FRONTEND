import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import StaffService from "../../services/staffService";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import BBMTextInput from "../../utilities/customFormControls/BBMTextInput";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function SignInPageStaff() {
  const [staffs, setStaffs] = useState([]);
  const alert = useAlert();

  const history = useHistory();

  useEffect(() => {
    let staffService = new StaffService();
    staffService.getAll().then((result) => setStaffs(result.data.data));
  }, []);

  const initialValues = {
    hrmsStaffCode: "",
    password: "",
  };

  const schema = Yup.object({
    hrmsStaffCode: Yup.string().required(),
    password: Yup.string().required(),
  });

  function checkValidation(hrmsStaffCode, password) {
    for (let index = 0; index < staffs.length; index++) {
      const staff = staffs[index];
      if (
        staff.hrmsStaffCode === hrmsStaffCode &&
        staff.password === password
      ) {
        console.log("giriş başarılı");
        alert.success("Login successful.");
        history.push("/staff/home");

        break;
      } else if (index + 1 === staffs.length) {
        console.log("giriş başarısız");
        alert.error("Staff code or password is incorrect");
      }
    }
}

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          checkValidation(values.hrmsStaffCode, values.password)
        }}
      >
        <Form className="ui form">
          <div className="sign-out-body">
            <div className="sign-out-container">
              <div className="title-ui">Sign In Staff</div>

              <div className="user-details">
                <div className="input-box">
                  <span className="details">Hrms Staff Code</span>
                  <BBMTextInput
                    name="hrmsStaffCode"
                    placeholder="Hrms Staff Code"
                  />
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
              <Link to="/staff">Click to create new account.</Link>
            </div>
          </div>
        </Form>
      </Formik>
    );
  }
