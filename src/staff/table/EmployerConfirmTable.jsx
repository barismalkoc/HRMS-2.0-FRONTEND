import React, { useEffect, useState } from "react";
import EmployerService from "../../services/employerServices";
import IsActiveButton from "../components/button/IsActiveButton";
import "./EmployerConfirmTable.css";

export default function EmployerConfirmTable() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getAll().then((result) => setEmployers(result.data.data));
  }, [employers.map((employer) => employer.isActive)]);
  return (
    <>
      <div className="top">
        <h1>Employer Confirmation</h1>
      </div>
      <div className="package-container">
        {employers.map((employer) => (
          <div className="packages" key={employer.id}>
            <h2 className="title-table">{employer.companyName}</h2>

            <ul className="list">
              <li className="first">{employer.website}</li>
              <li>{employer.companyName}</li>
              <li>{employer.email}</li>
              <li>{employer.phoneNumber}</li>
            </ul>
            <a href="#" className="button button1">
              {employer.staffVerification ? (
                <IsActiveButton
                  button="employerServiceIsActive"
                  sentences="Make Passive"
                  id={employer.id}
                  isActive={false}
                />
              ) : (
                <IsActiveButton
                  button="employerServiceIsActive"
                  sentences="Make Active"
                  id={employer.id}
                  isActive={true}
                />
              )}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
