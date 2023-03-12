import api from '../api/BaseUrl';

class UserService {

    getUserList() {
        return api.get("/user/getall");
    }
}

export default new UserService();