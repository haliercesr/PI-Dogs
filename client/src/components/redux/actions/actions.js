import { GET_DOGS, SEARCH_DOGS, QUERY_DOGS,ORDER,FILTER,TEMPERAMENTS } from './types';
import axios from 'axios';

const URL = 'http://localhost:3001'

export const getDogs = () => {
    return async function (dispatch) {

        try {
            const { data } = await axios.get(`${URL}/dogs`)
            return dispatch(
                {
                    type: GET_DOGS,
                    payload: data
                }
            )
        } catch (error) { window.alert(error.message) }
    }
}

export const searchDogs = (raza) => {
    return async function (dispatch) {

        try {
            const { data } = await axios.get(`${URL}/dogs/name?name=${raza}`)
            return dispatch(
                {
                    type: SEARCH_DOGS,
                    payload: data
                }
            )
        } catch (error) { window.alert(error.message) }
    }
}

export const queryDogs = (data) => {
    return function (dispatch) {
        return dispatch(
            {
                type: QUERY_DOGS,
                payload: data
            }
        )
    }


}

export const filterDogs=(temperamento)=>{
    return {
         type: FILTER,
         payload: temperamento       //gender es la propiedad para filtrar como por ejemplo status, origin, etc.
    }
}

export const orderDogs=(orden)=>{        // orden sera a para ascendente y d para decendente
    return{
    type: ORDER,
    payload: orden
   }
}



export const getTemperaments = () => {
    return async function (dispatch) {

        try {
            const { data } = await axios.get(`${URL}/temperaments`)
            return dispatch(
                {
                    type: TEMPERAMENTS,
                    payload: data
                }
            )
        } catch (error) { window.alert("Error al obtener la lista de temperamentos") }
    }
}