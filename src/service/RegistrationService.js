import api from '../api/BaseUrl';

class RegistrationService {

    getRegistrationList() {
        return api.get("/admin/register/getall");
    }

    rejectRegistration(email) {
        return api.put("/admin/register/reject/" + email);
    }

    acceptRegistration(email) {
        return api.post("/admin/register/accept/" + email);
    }


}

export default new RegistrationService();