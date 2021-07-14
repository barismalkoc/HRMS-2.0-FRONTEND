import axios from "axios";

export default class JobAdvertisementService {
  jobAdvertisementGetAll() {
    return axios.get("http://localhost:8080/hrms/jobAdvertisement/getAll");
  }

  isActive(id, isActive) {
    return axios.post(
      "http://localhost:8080/hrms/jobAdvertisement/isActive?id=" +
        id +
        "&isAvtice=" +
        isActive
    );
  }
  updateHrmsStaffConfirmation(id, isActive) {
    return axios.post(
      "http://localhost:8080/hrms/jobAdvertisement/updateHrmsStaffConfirmation?hrmsStaffConfirm=" +
        isActive +
        "&id=" +
        id
    );
  }

  add(values) {
    return axios.post(
      "http://localhost:8080/hrms/jobAdvertisement/add",
      values
    );
  }
}
