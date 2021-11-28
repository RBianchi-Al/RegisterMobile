import axios from "axios";



class UserService {
    async registerUser(data){
        return axios({
            url: ("http://192.168.0.107:5001/user/register"),
            method: "POST",
            timeout: 5000,
            data: data,
            headers: {
                Contentype: "application/x-www-form-urlencoded",
                Accept: "application/json",
                
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }


}

const userService = new UserService();
export default userService