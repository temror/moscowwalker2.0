import {instance} from "@/api/instance";
import {ElMessage} from "element-plus"
import {localStorageItems} from "@/types/LocalStorage";

export const apiAuth = async (login, password) =>{
    try{
        const res = await instance({
            method: 'POST',
            url: 'auth',
            data: {
                username: login,
                password
            }
        })
            .then(res=>{
                ElMessage({
                    showClose: true,
                    message: 'Пользователь создан!',
                    type: 'success',
                })
            })
            .catch(e =>{
                ElMessage({
                    showClose: true,
                    message: e.response.data.message,
                    type: 'error',
                })
                console.log(e.response.data.message)
            })
        return res ? res : null
    }
    catch (e) {
        console.log(e)
    }
}

export const apiLogin = async (login, password) =>{
    try{
        const res = await instance({
            method: 'POST',
            url: 'login',
            data: {
                username: login,
                password
            }
        })
            .catch(e =>{
                ElMessage({
                    showClose: true,
                    message: e.response.data.message,
                    type: 'error',
                })
                console.log(e.response.data.message)
            })
        return res ? res : null
    }
    catch (e) {
        console.log(e)
    }
}

export const apiGetUserInfo = async () =>{
    try{
        const token = localStorage.getItem(localStorageItems.token)
        const res = await instance({
            method: 'GET',
            url: 'userInfo',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .catch(e =>{
                ElMessage({
                    showClose: true,
                    message: e.response.data.message,
                    type: 'error',
                })
                console.log(e.response.data.message)
            })
        return res ? res : null
    }
    catch (e) {
        console.log(e)
    }
}

export const apiGetUserPlaces = async () =>{
    try{
        const token = localStorage.getItem(localStorageItems.token)
        const res = await instance({
            method: 'GET',
            url: 'places',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .catch(e =>{
                ElMessage({
                    showClose: true,
                    message: e.response.data.message,
                    type: 'error',
                })
                console.log(e.response.data.message)
            })
        return res ? res : null
    }
    catch (e) {
        console.log(e)
    }
}