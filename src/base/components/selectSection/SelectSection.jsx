import React from "react";
import { BaseButton } from "../button/BaseButton";
import "./SelectSection.css";
import "../../../App.css";

export default function SelectSection() {
  return (
    <div className="select-container">
      {/* <video autoPlay muted loop id="myVideo">
        <source src="https://youtube.com/embed/Oj6P1zmxdto" type="video/mp4" />
       </video> */}
      
      <h1>The World's Most Advanced HRMS</h1>
      <p>Let's Start</p>

      <div className="select-btns">
        <BaseButton
          url="/employer"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Employer
        </BaseButton>
        <BaseButton
          url="jobSeeker"
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Job Seeker
        </BaseButton>
        <BaseButton
          url="staff"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Staff
        </BaseButton>
      </div>
    </div>
  );
}
