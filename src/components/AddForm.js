import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uuidv1} from 'uuid/v1';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { addCar } from '../actions/cars.actions';
class AddForm extends Component {
    constructor(props){
        super(props);
        this.state = {  
            name: '',  
            model: '',  
            horsepower: null,  
            price: null,
            type: ''
        }
        this.CarsType = [{name: 'SUV'}, {name: 'Sport Car'}, {name: 'Van'}]
        this.onChange =this.onChange.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
        this.props.searchProducts(this.state.searchTerm);
    }

    render() {
        const {name, model, horsepower, price, type} = this.state;

        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Car name</label>
                        <input type="text" className="form-control" id="name" 
                            value={name} onChange={this.onChange}
                            aria-describedby="emailHelp" placeholder="Car name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="model">Model</label>
                        <input type="text" className="form-control" id="model" 
                            value={model} onChange={this.onChange} placeholder="Model" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="horsepower">Horsepower</label>
                        <input type="text" className="form-control" id="horsepower" 
                            value={horsepower} onChange={this.onChange} placeholder="Horsepower" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="text" className="form-control" id="price" 
                            value={price} onChange={this.onChange} placeholder="Price" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="type">Type</label>
                        <select className="form-control" value={type} id="type">
                            { this.CarsType.map((item,i)=> (<option value={item.name} key={i}>{item.name}</option>) )}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
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
    
 };  

AddForm.propTypes = {

}

export default connect(
    mapStateToProps,  
    mapDispatchToProps
)(AddForm) 
