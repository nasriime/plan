import React, { Component } from 'react'
import { connect } from 'react-redux';
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
                        <div key={car.id}>
                            <span >{car.name}</span>
                            <button type="button" onClick={(e) =>this.edit(car)} className="btn btn-primary">Edit</button>
                            <button type="button" onClick={(e) =>this.remove(car)} className="btn btn-danger">X</button>
                        </div>
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

}

export default connect( 
    mapStateToProps,  
    mapDispatchToProps)(CarsListing)