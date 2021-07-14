
import EmployerService from '../../../services/employerServices';
import JobAdvertisementService from '../../../services/jobAdvertisementService';
import "./IsActiveButton.css"

export default function IsActiveButton(props) {

    let employerService = new EmployerService();
    let jobAdvertisementService = new JobAdvertisementService();
    function isActiveOrPassive() {
        // console.log(props)

        if(props.button === "updateHrmsStaffConfirmation") {
           jobAdvertisementService.updateHrmsStaffConfirmation(props.id, props.isActive);
        }

        else if(props.button === "employerServiceIsActive") {
            employerService.isActive(props.id, props.isActive)
        }
        


    }
    return (
        <div>
           <a href="#" class="button button1" onClick={() => isActiveOrPassive()}>{props.sentences}</a>
        </div>
    )
}
