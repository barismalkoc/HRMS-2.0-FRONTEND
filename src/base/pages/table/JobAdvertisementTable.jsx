import React, { useEffect, useState } from "react";
import "./JobAdvertisementTable.css"
import JobAdvertisementService from "../../../services/jobAdvertisementService";

export default function JobAdvertisementTable() {
    const [jobAdvertisements, setjobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService
          .jobAdvertisementGetAll()
          .then((result) => setjobAdvertisements(result.data.data));
      }, []);
  return (
    <>
      <table class="content-table">
        <thead>
          <tr>
            <th>Job Description</th>
            <th>Company Name</th>
            <th>JobPosition</th>
            <th>Min Salary</th>
            <th>Max Salary</th>
            <th>DeadLine</th>
            <th>Type of Time</th>
            <th>Type Of Work</th>
            <th>Active By Employer</th>
            <th>Active By Staff</th>
          </tr>
        </thead>
        <tbody>
            {jobAdvertisements.map((jobAdvertisement) => (
                    <tr>
                    <td>{jobAdvertisement.jobDescription}</td>
                    <td>{jobAdvertisement.employerName}</td>
                    <td>{jobAdvertisement.jobPositionName}</td>
                    <td>{jobAdvertisement.minSalary}</td>
                    <td>{jobAdvertisement.maxSalary}</td>
                    <td>{jobAdvertisement.applicationDeadline}</td>
                    <td>{jobAdvertisement.partOrFullTime}</td>
                    <td>{jobAdvertisement.typeOfWork}</td>
                    <td>{jobAdvertisement.active ? <div>True</div>: <div>False</div>}</td>
                    <td>{jobAdvertisement.hrmsStaffConfirmation ? <div>True</div>: <div>False</div>}</td>
                  </tr>
            ))}
          
          
        </tbody>
      </table>
    </>
  );
}
