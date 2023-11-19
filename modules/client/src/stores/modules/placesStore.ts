import {reactive} from 'vue'
import {defineStore} from 'pinia'
import {apiGetUserPlaces} from "@/api/apiLogin";

export const usePlacesStore = defineStore('places', () => {
    interface Place{
        visited: boolean,
        seenTime: Date,
        place: {
            title: string
            description: string
        }
    }

    interface State{
        places: Place[]
    }

    const state = reactive<State>({
        places: []
    })

    const getPlaces = async () =>{
        const places = await apiGetUserPlaces()
        state.places = places.data
        console.log(places)
    }

    return { state, getPlaces }
})
