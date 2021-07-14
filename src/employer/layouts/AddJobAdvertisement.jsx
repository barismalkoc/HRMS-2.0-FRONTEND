import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import "./AddJobAdvertisement.css";
import BBMTextInput from "../../utilities/customFormControls/BBMTextInput";
export default function AddJobAdvertisement() {
  let jobAdvertisementService = new JobAdvertisementService();

  const initialValues = {
    active: false,
    applicationDeadline: "",
    cityName: "",
    employerName: "",
    hrmsStaffVerificaiton: false,
    jobDescription: "",
    jobPositionName: "",
    maxSalary: null,
    minSalary: null,
    numberOfOpenPosition: null,
    partOrFullTime: "",
    releaseDate: "",
    typeOfWork: "",
  };

  const schema = Yup.object({
    applicationDeadline: Yup.string().required(),
    cityName: Yup.string().required(),
    employerName: Yup.string().required(),
    jobDescription: Yup.string().required(),
    jobPositionName: Yup.string().required(),
    maxSalary: Yup.number().required(),
    minSalary: Yup.number().required(),
    numberOfOpenPosition: Yup.number().required(),
    partOrFullTime: Yup.string().required(),
    releaseDate: Yup.string().required(),
    typeOfWork: Yup.string().required(),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        jobAdvertisementService.add(values);
        console.log("girdi");
      }}
    >
      <Form className="ui form">
        <div className="addJA-body">
          <div className="left-body">
            <h1 className="jobAdvertisement"> Add JobAdvertisement</h1>
            <p className="new-text">New opportunities, New people !</p>
          </div>
          <div className="right-body">
              <div className="three">
              <div className="add-input-box">
                    <span className="add-details">Employer Name</span>
                    <BBMTextInput name="employerName" placeholder="Employer Name"></BBMTextInput>
                </div>
                <div className="add-input-box">
                    <span className="add-details">Employer Name</span>
                    <BBMTextInput name="employerName" placeholder="Employer Name"></BBMTextInput>
                </div>
                <div className="add-input-box">
                    <span className="add-details">Employer Name</span>
                    <BBMTextInput name="employerName" placeholder="Employer Name"></BBMTextInput>
                </div>
              </div>
              <div className="three">
              <div className="add-input-box">
                    <span className="add-details">Employer Name</span>
                    <BBMTextInput name="employerName" placeholder="Employer Name"></BBMTextInput>
                </div>
                <div className="add-input-box">
                    <span className="add-details">Employer Name</span>
                    <BBMTextInput name="employerName" placeholder="Employer Name"></BBMTextInput>
                </div>
                <div className="add-input-box">
                    <span className="add-details">Employer Name</span>
                    <BBMTextInput name="employerName" placeholder="Employer Name"></BBMTextInput>
                </div>
              </div>
              <div className="three">
              <div className="add-input-box">
                    <span className="add-details">Employer Name</span>
                    <BBMTextInput name="employerName" placeholder="Employer Name"></BBMTextInput>
                </div>
                <div className="add-input-box">
                    <span className="add-details">Employer Name</span>
                    <BBMTextInput name="employerName" placeholder="Employer Name"></BBMTextInput>
                </div>
                <div className="add-input-box">
                    <span className="add-details">Employer Name</span>
                    <BBMTextInput name="employerName" placeholder="Employer Name"></BBMTextInput>
                </div>
              </div>
                
            

          </div>
        </div>
      </Form>
    </Formik>
  );
}
