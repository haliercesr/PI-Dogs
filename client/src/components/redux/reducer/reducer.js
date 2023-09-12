import { GET_DOGS, SEARCH_DOGS, QUERY_DOGS, ORDER, FILTER, TEMPERAMENTS } from "../actions/types"
const { comparar } = require('../../utils/comparar')


const initialState = {
    allDogs: [],
    searchDogs: [],
    queryState: false,
    allDogsFilter: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_DOGS:
            return {
                ...state,
                allDogs: payload,
                allDogsCopia: payload
            }
        case SEARCH_DOGS:
            return {
                ...state,
                searchDogs: payload
            }
        case QUERY_DOGS:
            return {
                ...state,
                queryState: payload
            }
        case FILTER:
            return {
                ...state,
                allDogs: payload === "Todos"
                    ? state.allDogsCopia
                    : state.allDogs.filter((dog) => { return dog.temperament && dog.temperament.includes(payload) })
            }
        case ORDER:
            return {
                ...state,
                [payload[2]]: payload[0] === "A" || payload[0] === "AA"
                    ? state[payload[2]].sort((a, b) => { return comparar(a, b, payload[1]) })
                    : state[payload[2]].sort((a, b) => { return comparar(b, a, payload[1]) }),
            }
        case TEMPERAMENTS:
            return {
                ...state,
                allDogsFilter: payload
            }

        default:
            return { ...state }
    }
}

export default rootReducer;