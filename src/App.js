import React from 'react';
import AddForm from './components/AddForm';
import SearchForm from './components/SearchForm';
import CarsListing from './components/CarsListing';

function App() {
  return (
    <div className="container">
      <AddForm/> 
      <SearchForm/>
      <CarsListing/>
    </div>
  );
}

export default App;
