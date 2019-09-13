import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import uuid from "uuid";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { addCar, updateCar, updatedCar } from '../actions/cars.actions';
class AddForm extends Component {
    constructor(props){
        super(props);
        this.state = {  
            name: '',  
            model: '',  
            horsepower: '',  
            price: '',
            type: ''
        }
        this.CarsType = [{name: 'SUV'}, {name: 'Sport Car'}, {name: 'Van'}]
        this.onChange =this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.editCar = this.editCar.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        const {name, model, horsepower, price, type} = this.state;
        this.props.addCar({
            // id: uuid.v4(),
            name,  
            model,  
            horsepower,  
            price,
            type
        });
        this.setState({
            name: '',  
            model: '',  
            horsepower: '',  
            price: 's',
            type: ''
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const  { itemToUpdate } = this.props;

        if (prevProps.itemToUpdate !== itemToUpdate) {
            if(isEmpty(itemToUpdate)){
                this.setState({  
                    name: '',  
                    model: '',  
                    horsepower: '',  
                    price: '',
                    type: ''
                });
            }else{
                this.setState({  
                    name: itemToUpdate.name,  
                    model: itemToUpdate.model,  
                    horsepower: itemToUpdate.horsepower,  
                    price: itemToUpdate.price, 
                    type: itemToUpdate.type
                });
            }

        }        
    }

    cancelEdit(){
        this.props.updateCar({});
    }

    editCar(){
        const {name, model, horsepower, price, type} = this.state;
        const  { itemToUpdate } = this.props;
        const item = {
            id: itemToUpdate.id,
            name,  
            model,  
            horsepower : Number(horsepower),  
            price: Number(price),
            type
        }
        this.props.updatedCar(item);
        this.props.updateCar({});
    }

    render() {
        const {name, model, horsepower, price, type} = this.state;
        const  { itemToUpdate } = this.props;

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Car name</label>
                        <input type="text" className="form-control" id="name" name="name"
                            value={name} onChange={this.onChange}
                            aria-describedby="emailHelp" placeholder="Car name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="model">Model</label>
                        <input type="text" className="form-control" id="model" name="model"
                            value={model} onChange={this.onChange} placeholder="Model" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="horsepower">Horsepower</label>
                        <input type="text" className="form-control" id="horsepower" name="horsepower"
                            value={horsepower} onChange={this.onChange} placeholder="Horsepower" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="text" className="form-control" id="price" name="price"
                            value={price} onChange={this.onChange} placeholder="Price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <select className="form-control" onChange={this.onChange} value={type} id="type" name="type">
                            { this.CarsType.map((item,i)=> (<option value={item.name} key={i}>{item.name}</option>) )}
                        </select>
                    </div>
                    { isEmpty(itemToUpdate) && (
                        <button type="submit" className="btn btn-primary">Submit</button>
                    )}
                </form>
                { !isEmpty(itemToUpdate) && (
                    <>
                        <button className="btn btn-primary" onClick={this.editCar}>Edit</button>
                        <button className="btn btn-primary" onClick={this.cancelEdit}>cancel</button>
                    </>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({  
    data: state.carsReducer.data,  
    loading: state.carsReducer.loading,  
    error: state.carsReducer.error, 
    itemToUpdate: state.carsReducer.itemToUpdate, 
 });  
   
const mapDispatchToProps = {  
    addCar,
    updateCar,
    updatedCar
 };  

AddForm.propTypes = {

}

export default connect(
    mapStateToProps,  
    mapDispatchToProps
)(AddForm) 
