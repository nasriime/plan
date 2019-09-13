import { LOAD_CARS_LOADING, LOAD_CARS_SUCCESS, LOAD_CARS_ERROR, SEARCH_CAR,
    ADD_CAR, UPDATE_CAR, REMOVE_CAR } from '../actions/types';

const initialState = {
    data: [],
    loading: false,  
    error: '',
    search: '',
    // deletedItem: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case LOAD_CARS_LOADING: {
            return {
                ...state,
                loading: true,
                error:''
            }
        }
        case LOAD_CARS_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case LOAD_CARS_ERROR: {
            return {
                ...state,
               loading: false,  
               error: action.error
            }
        }
        case ADD_CAR: {
            return {
                ...state,
                data: [...state.data, action.data]
            }
        }
        case SEARCH_CAR: {
            return {
                ...state,
                search: action.data
            }
        }
        case REMOVE_CAR: {
            const newCrasArray = Object.assign([], state.data).filter(car=> car.id !== action.data.id)
            return {
                ...state,
                data: newCrasArray
            }
        }
        default: {
            return state
        }
    }
}