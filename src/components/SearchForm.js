import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { searchCars } from '../actions/cars.actions';

class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state = {  
          search:''
        }
        this.onChange =this.onChange.bind(this);
        this.changeSearch = debounce(this.props.searchCars, 250)
    }

    onChange(e){
        this.setState({ search: e.target.value },() => {
            this.changeSearch(this.state.search)
          });
    }

    render() {
        const {search} = this.state;

        return (
            <InputWrapper>
                <h3>Search</h3>
                <input type="text" className="form-control" id="search" name="search"
                    value={search} onChange={this.onChange}
                    aria-describedby="search" placeholder="Search by car name" />
            </InputWrapper>
        )
    }
}


const mapStateToProps = state => ({  
    data: state.carsReducer.data,  
    loading: state.carsReducer.loading,  
    error: state.carsReducer.error,  
 });  
   
const mapDispatchToProps = {  
    searchCars
 };  

SearchForm.propTypes = {
    data: PropTypes.array,  
    loading: PropTypes.bool,  
    error: PropTypes.string,  
}

export default connect(
    mapStateToProps,  
    mapDispatchToProps
)(SearchForm) 


const InputWrapper = styled.div`
    margin-bottom:30px;
    h3{
        margin-bottom:40px;
    }
`;
