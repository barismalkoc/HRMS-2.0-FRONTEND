import axios from "axios";

export default class EmployerService {
  getAll() {
    return axios.get("http://localhost:8080/hrms/employer/getAll");
  }

  employerAdd(values) {
    return axios.post(
      "http://localhost:8080/hrms/employer/register?emailBool=true&hrmsBool=true",
      values
    );
  }

  isActive(id, isActive) {
    return axios.post(
      "http://localhost:8080/hrms/employer/isActive?id=" +
        id +
        "&isAvtice=" +
        isActive
    );
  }
}
