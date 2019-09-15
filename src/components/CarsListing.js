import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { loadCars, DeleteCar, updateCar } from '../actions/cars.actions';

class CarsListing extends Component {

    constructor(props) {
        super(props);  
        this.state={
            filteredCars : [] 
        }
        this.remove = this.remove.bind(this)
        this.edit = this.edit.bind(this)
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

    remove(car){
        this.props.DeleteCar(car);
    }

    edit(car){
        this.props.updateCar(car);
    }

    render() {
        const { data, loading, error } = this.props;

        // if (!data || !loading) {
        //     return <div>loading</div>;
        // }
          
        return (
            <div>
                {this.state.filteredCars.map(car=> 
                        <Car key={car.id}>
                            <p className="mr-4">{car.name}</p>
                            <div>
                                <button type="button" onClick={(e) =>this.edit(car)} className="btn btn-primary mr-2">Edit</button>
                                <button type="button" onClick={(e) =>this.remove(car)} className="btn btn-danger">X</button>
                            </div>
                        </Car>
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
    loadCars,
    DeleteCar,
    updateCar
 };

 CarsListing.propTypes = {
    data: PropTypes.array,  
    loading: PropTypes.bool,  
    error: PropTypes.string,  
    search: PropTypes.string,
}

export default connect( 
    mapStateToProps,  
    mapDispatchToProps)(CarsListing)

const Car = styled.div`
    display:flex;    
    p{
        min-width:200px;
    }
`;