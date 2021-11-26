import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"

interface PropsLogin {
        username: string;
        password: string;
}
export class UserService {

    async login(data: PropsLogin){
        return axios({
            url: "http://localhost:3000/login",
            method: "POST",
            timeout: 5000,
            data: data,
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => {
            AsyncStorage.setItem("TOKEN", response.data.login)
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}