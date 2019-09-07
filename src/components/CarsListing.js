import React, { Component } from 'react'
import { connect } from 'react-redux';
import {loadCars } from '../actions/cars.actions'

class CarsListing extends Component {
    componentDidMount(){
        loadCars()
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({  
    data: state.carsReducer.data,  
    loading: state.carsReducer.loading,  
    error: state.carsReducer.error,  
 });  
   
 const mapDispatchToProps = {  
    loadCars  
 };  

export default connect( 
    mapStateToProps,  
    mapDispatchToProps
    )(CarsListing)