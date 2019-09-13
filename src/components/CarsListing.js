import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadCars } from '../actions/cars.actions';

class CarsListing extends Component {
    
    state={
        filteredCars : [] 
    }

    async componentDidMount(){
        await this.props.loadCars();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const  { search, data } = this.props;

        if (prevProps.search !== search) {
            if(!search){
                this.setState({ filteredCars: data })
            }
            const filter = Object.assign([], data).filter(
               item => item.name.toLowerCase().indexOf(search.toLowerCase()) > -1
            )
            this.setState({ filteredCars: filter })
        }

        if (prevProps.data !== data) {
            this.setState({ filteredCars: data});
        }
    }

    render() {
        const { data, loading, error } = this.props;
        return (
            <div>
                {this.state.filteredCars.map(car=>
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
    search: state.carsReducer.search,  
 });  
   
 const mapDispatchToProps = {  
    loadCars  
 };

 CarsListing.propTypes = {

}

export default connect( 
    mapStateToProps,  
    mapDispatchToProps)(CarsListing)