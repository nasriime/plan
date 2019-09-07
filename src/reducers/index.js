import { combineReducers } from 'redux';
import carsReducer from './cars.reducer';

export default combineReducers({
    cars: carsReducer
});