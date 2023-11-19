import {reactive} from 'vue'
import {defineStore} from 'pinia'
import {apiAuth, apiGetUserInfo, apiLogin} from "@/api/apiLogin";
import {localStorageItems} from "@/types/LocalStorage";
import {useStore} from "@/stores/store";

export const useAuthStore = defineStore('auth', () => {

    interface State {
        isAuth: boolean,
        username: string
    }

    const state = reactive<State>({
        isAuth: false,
        username: ''
    })

    const {places} = useStore()

    const auth = async (login, password) => {
        const res = await apiAuth(login, password)
        console.log(res)
    }

    const authInit = (user) =>{
        state.isAuth = true
        state.username = localStorage.getItem(localStorageItems.username)
    }

    const login = async (login, password) => {

        const token = await apiLogin(login, password)

        localStorage.setItem(localStorageItems.token, token.data)

        const user = await apiGetUserInfo()

        if (user !== null) {
            localStorage.setItem(localStorageItems.username, user.data.username)
            localStorage.setItem(localStorageItems.roles, JSON.stringify(user.data.roles))

            authInit(user)

            await places.getPlaces()
        }
    }

    const logout = () =>{
        localStorage.removeItem(localStorageItems.username)
        localStorage.removeItem(localStorageItems.roles)
        localStorage.removeItem(localStorageItems.token)
        location.reload()
    }

    return {state, auth, login, logout, authInit}
})
