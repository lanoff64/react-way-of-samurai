import * as axios from "axios";


const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{
        "API-KEY": "7143f507-a8a7-4262-988c-7695e2a8a1e3"
    }

})

export const usersAPI = {

    getUsers(currentPage = 1,pagesSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
                .then(response => {
                    return  response.data;
                })
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    followUser(userId){
        return instance.post(`follow/${userId}`)
    },
    unFollowUser(userId){
        return instance.delete(`follow/${userId}`)
    },
    authMe(){
        return instance.get(`auth/me`)
    }

}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    }
}

