import { LOAD_CARS_LOADING, LOAD_CARS_SUCCESS,
        LOAD_CARS_ERROR, ADD_CAR, UPDATE_CAR,
        REMOVE_CAR } from './types';
import axios from 'axios';


export const loadCars = () => dispatch => {  
    dispatch({ type: LOAD_CARS_LOADING });  

    axios.get('http://localhost:4000/cars') 
        .then(response => response.json())  
        .then(  
            data => dispatch({ type: LOAD_CARS_SUCCESS, data }),  
            error => dispatch({ type: LOAD_CARS_ERROR, error: error.message || 'Unexpected Error!!!' })  
        )  
 };  

 export const searchCars = searchterm => dispatch => {
    
}

export const addCar = searchterm => dispatch => {
    
}

export const updateCar = searchterm => dispatch => {
    
}

export const DeleteCar = searchterm => dispatch => {
    
}


