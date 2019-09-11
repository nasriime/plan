import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadCars } from '../actions/cars.actions';

class CarsListing extends Component {
    componentDidMount(){
        this.props.loadCars()
    }

    render() {
        const { data, loading, error } = this.props;
        return (
            <div>
                {data.map(car=>
                    <p key={car.id}>{car.name}</p>
                )}
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

 CarsListing.propTypes = {

}

export default connect( 
    mapStateToProps,  
    mapDispatchToProps)(CarsListing)