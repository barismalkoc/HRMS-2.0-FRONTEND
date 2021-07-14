import axios from "axios";

export default class StaffService {
    register(values){
        return axios.post("http://localhost:8080/hrms/hrmsStaff/register",values)
    }
 
    getAll() {
        return axios.get("http://localhost:8080/hrms/hrmsStaff/getAll")
    }
}

