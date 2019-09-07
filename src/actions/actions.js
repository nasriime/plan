import { FETCH_CARS } from './types';

const initialState = {
    cars: []
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_CARS :
            return {
                ...state,
                cars: action.payload
            }
        default:
            return state 
    }
}