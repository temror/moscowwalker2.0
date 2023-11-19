import {reactive} from 'vue'
import {defineStore} from 'pinia'
import {Theme} from "@/types/Theme";

export const useThemeStore = defineStore('theme', () => {
    interface State{
        theme: Theme
    }

    const state = reactive<State>({
        theme: Theme.LIGHT
    })
    return { theme: state.theme }
})
