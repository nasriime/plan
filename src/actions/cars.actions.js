import { LOAD_CARS_LOADING, LOAD_CARS_SUCCESS, LOAD_CARS_ERROR, 
        ADD_CAR, UPDATE_CAR, SEARCH_CAR, REMOVE_CAR, CAR_TO_UPDATE } from './types';
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
    dispatch({ type: SEARCH_CAR, data: searchterm });  
}

export const addCar = addedCar => dispatch => {
    axios.post('http://localhost:4000/cars', addedCar) 
    .then(  
        data => dispatch({ type: ADD_CAR, data: addedCar }),  
        error => dispatch({ type: LOAD_CARS_ERROR, error: error.message || 'Unexpected Error!!!' })  
    ) 
}

export const DeleteCar = DeletedCar => dispatch => {
    dispatch({ type: REMOVE_CAR, data: DeletedCar });  

}

export const updateCar = carToUpdate => dispatch => {
    dispatch({ type: UPDATE_CAR, data: carToUpdate });  

}

export const updatedCar = carToUpdate => dispatch => {
    dispatch({ type: CAR_TO_UPDATE, data: carToUpdate });  

}
