import axios from "axios";

export const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "65f33208-5470-498e-a5c3-c75c3443db77"
        }
})

export const usersAPI ={
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response =>{
                return response.data;
            });
    }
}