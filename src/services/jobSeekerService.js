import axios from "axios";

export default class JobSeekerService{

    add(values){
        return axios.post("http://localhost:8080/hrms/jobSeeker/Register?emailBool=true&mernisBool=true",values)
    }

    jobSeekerGetAll() {
        return axios.get("http://localhost:8080/hrms/jobSeeker/GetAll")
    }
}