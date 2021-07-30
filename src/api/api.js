import * as axios from "axios";


const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{
        "API-KEY": "7143f507-a8a7-4262-988c-7695e2a8a1e3",
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
        console.warn('Obsolete method. Please use profileAPI.getProfile object.');
        return profileAPI.getProfile(userId);
    },
    followUser(userId){
        return instance.post(`follow/${userId}`);
    },
    unFollowUser(userId){
        return instance.delete(`follow/${userId}`);
    },

}


export const profileAPI = {
    sendPhoto(formData){
        return instance.post(`profile/photo`, formData);
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status});
    },
    updateAboutMe(aboutMe,FullName,LookingForAJobDescription = true,lookingForAJob=true,
                  contacts={
        facebook: "facebook.com/ruslan",
        github: "github.com/ruslan",
        instagram: "instagra.com/ruslan",
        mainLink: null,
        twitter: "https://twitter.com/@ruslan",
        vk: "vk.com/ruslan",
        website: 'ruslan.com',
        youtube: 'https://www.youtube.com/channel/ruslan'

    }){
        return instance.put(`profile`,
            {
            aboutMe: aboutMe,
            FullName:FullName,
            LookingForAJobDescription:LookingForAJobDescription,
            lookingForAJob,
            contacts

            });
    }
}



export const authAPI = {
    me(){
        return instance.get(`auth/me`);
    },
    login(email, password,rememberMe = false){
        return instance.post('/auth/login', {email, password,rememberMe});
    },
    logout(){
        return instance.delete('/auth/login');
    }
}






