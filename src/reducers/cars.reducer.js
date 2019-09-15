import { LOAD_CARS_LOADING, LOAD_CARS_SUCCESS, LOAD_CARS_ERROR, SEARCH_CAR,
    ADD_CAR, UPDATE_CAR, CAR_TO_UPDATE, REMOVE_CAR } from '../actions/types';

const initialState = {
    data: [],
    loading: false,  
    error: '',
    search: '',
    itemToUpdate: {}
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
            action.data.id = state.data[state.data.length-1].id + 1;
            return {
                ...state,
                data: [...state.data, action.data],
                loading: false
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
                data: newCrasArray,
                loading: false
            }
        }
        case UPDATE_CAR: {
            return {
                ...state,
                itemToUpdate: action.data
            }
        }
        case CAR_TO_UPDATE: {
            const objIndex = state.data.findIndex((obj => obj.id === action.data.id));
            state.data[objIndex] = action.data;
            return {
                ...state,
                data: [...state.data],
                loading: false
            }
        }
        default: {
            return state
        }
    }
}