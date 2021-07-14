import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import IsActiveButton from "../components/button/IsActiveButton";

export default function JobAdvertisementConfirmTable() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  let jobAdvertisementService = new JobAdvertisementService();

  useEffect(() => {
   
    jobAdvertisementService
      .jobAdvertisementGetAll()
      .then((result) => setJobAdvertisements(result.data.data));
  },[jobAdvertisements.map((jobAdvertisement) => jobAdvertisement.hrmsStaffConfirmation)]);
  return(
    <>
    <div className="top">
        <h1>Job Advertisement Confirmation</h1>
    </div>
    <div className="package-container">
      
      {jobAdvertisements.map((jobAdvertisement) => (
        <div className="packages">
        <h2 className="title-table"><Link>{jobAdvertisement.employerName}</Link></h2>
  
        <ul className="list">
          <li className="first">City : {jobAdvertisement.cityName}</li>
          <li>Position : {jobAdvertisement.jobPositionName}</li>
          <li>Release Date : {jobAdvertisement.releaseDate}</li>
          <li>Deadline : {jobAdvertisement.applicationDeadline}</li>
          <li>Type Of Work: {jobAdvertisement.partOrFullTime}</li>
          <li>Type Of Work: {jobAdvertisement.typeOfWork}</li>
          <li>Salary: {jobAdvertisement.minSalary} - {jobAdvertisement.maxSalary}</li>
          <li>Open Position : {jobAdvertisement.numberOfOpenPosition}</li>
        </ul>
        <a href="#" className="button button1">{jobAdvertisement.hrmsStaffConfirmation ? <IsActiveButton sentences="Make Passive" button="updateHrmsStaffConfirmation" id={jobAdvertisement.id} isActive  ={false}/>: 
                      <IsActiveButton sentences="Make Active" button="updateHrmsStaffConfirmation" id={jobAdvertisement.id} isActive={true}/>}</a>
      </div>
      
      ))}
    
    
  </div>
  </>

  );
}
