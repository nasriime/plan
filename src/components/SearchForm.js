import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ''
        }
        this.onChange =this.onChange.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
        this.props.searchProducts(this.state.searchTerm);
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
    
 };  

export default connect(
    mapStateToProps,  
    mapDispatchToProps
)(SearchForm) 
