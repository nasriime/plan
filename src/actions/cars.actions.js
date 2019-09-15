import { LOAD_CARS_LOADING, LOAD_CARS_SUCCESS, LOAD_CARS_ERROR, 
        ADD_CAR, UPDATE_CAR, SEARCH_CAR, REMOVE_CAR, CAR_TO_UPDATE } from './types';
import axios from 'axios';


export const loadCars = () => dispatch => {  
    dispatch({ type: LOAD_CARS_LOADING });  

    axios.get('http://localhost:4000/cars') 
        .then(  
            data => dispatch({ type: LOAD_CARS_SUCCESS, data: data.data }) 
        )
        .catch(
            error => dispatch({ type: LOAD_CARS_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
 };  

 export const searchCars = searchterm => dispatch => {
    dispatch({ type: SEARCH_CAR, data: searchterm });  
}

export const addCar = addedCar => dispatch => {
    dispatch({ type: LOAD_CARS_LOADING });  

    axios.post('http://localhost:4000/cars', addedCar) 
    .then(  
        ()=> dispatch({ type: ADD_CAR, data: addedCar }),  
    ) 
    .catch(
        error => dispatch({ type: LOAD_CARS_ERROR, error: error.message || 'Unexpected Error!!!' })
    )
}

export const DeleteCar = DeletedCar => dispatch => {
    dispatch({ type: LOAD_CARS_LOADING });  

    axios.delete(`http://localhost:4000/cars/${DeletedCar.id}`) 
    .then(  
        ()=> dispatch({ type: REMOVE_CAR, data: DeletedCar }),
    ) 
    .catch(
        error => dispatch({ type: LOAD_CARS_ERROR, error: error.message || 'Unexpected Error!!!' })
    )
}

export const updateCar = carToUpdate => dispatch => {
    dispatch({ type: UPDATE_CAR, data: carToUpdate });  

}

export const updatedCar = carToUpdate => dispatch => {
    dispatch({ type: LOAD_CARS_LOADING });  

    axios.put(`http://localhost:4000/cars/${carToUpdate.id}`,carToUpdate) 
    .then(  
        ()=> dispatch({ type: CAR_TO_UPDATE, data: carToUpdate }),
    )
    .catch(
        error => dispatch({ type: LOAD_CARS_ERROR, error: error.message || 'Unexpected Error!!!' })
    )

}
