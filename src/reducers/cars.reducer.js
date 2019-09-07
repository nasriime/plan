import { LOAD_CARS_LOADING, LOAD_CARS_SUCCESS, LOAD_CARS_ERROR } from './types';

const initialState = {
    cars: [],
    loading: false,  
    error: '' 
}

export default function(state = initialState, action){
    switch(action.type){
        case LOAD_CARS_LOADING :
            return {
                ...state,
                loading: true,
                error:''
            }
        case LOAD_CARS_SUCCESS : 
            return {
                ...state,
                data: action.data,
                loading: false
            }
        case LOAD_CARS_ERROR : 
            return {
                ...state,
               loading: false,  
               error: action.error
            }
        default:
            return state
    }
}