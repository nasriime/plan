import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadCars, DeleteCar } from '../actions/cars.actions';

class CarsListing extends Component {

    constructor(props) {
        super(props);  
        this.state={
            filteredCars : [] 
        }
        this.onClick = this.onClick.bind(this)
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

    onClick(car){
        this.props.DeleteCar(car);
    }

    render() {
        const { data, loading, error } = this.props;

        // if (!data || !loading) {
        //     return <div>loading</div>;
        // }
          
        return (
            <div>
                {this.state.filteredCars.map(car=>
                    <p onClick={(e) =>this.onClick(car)} key={car.id}>{car.name}</p>
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
    DeleteCar 
 };

 CarsListing.propTypes = {

}

export default connect( 
    mapStateToProps,  
    mapDispatchToProps)(CarsListing)