import React from 'react';
import styled from 'styled-components';
import AddForm from './components/AddForm';
import SearchForm from './components/SearchForm';
import CarsListing from './components/CarsListing';

function App() {
  return (
    <Wrapper className="container">
      <div className="row">
        <div className="col-md-6">
          <AddForm/> 
        </div>
        <div className="col-md-6">
          <SearchForm/>
          <CarsListing/>
        </div>
      </div>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
    margin-top: 50px;
`;