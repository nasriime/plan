import { LOAD_CARS_LOADING, LOAD_CARS_SUCCESS,
        LOAD_CARS_ERROR, ADD_CAR, UPDATE_CAR, SEARCH_CAR, 
        REMOVE_CAR } from './types';
import axios from 'axios';


export const loadCars = () => dispatch => {  
    dispatch({ type: LOAD_CARS_LOADING });  

    axios.get('http://localhost:4000/cars') 
        .then(  
            data => dispatch({ type: LOAD_CARS_SUCCESS, data: data.data }),  
            error => dispatch({ type: LOAD_CARS_ERROR, error: error.message || 'Unexpected Error!!!' })  
        )  
 };  

 export const searchCars = searchterm => dispatch => {
    // axios.get(`http://localhost:4000/cars?name=${searchterm}`) 
    //     .then(  
    //         data => dispatch({ type: SEARCH_CAR, data: data.data }),  
    //         error => dispatch({ type: LOAD_CARS_ERROR, error: error.message || 'Unexpected Error!!!' })  
    //     )  
    console.log('searchterm=======', searchterm)
    dispatch({ type: LOAD_CARS_LOADING, data: searchterm });  
}

export const addCar = addedCar => dispatch => {
    axios.post('http://localhost:4000/cars') 
    .then(  
        data => dispatch({ type: ADD_CAR, data: addedCar }),  
        error => dispatch({ type: LOAD_CARS_ERROR, error: error.message || 'Unexpected Error!!!' })  
    ) 
}

export const updateCar = updatedCar => dispatch => {
    
}

export const DeleteCar = DeletedCar => dispatch => {
    
}


