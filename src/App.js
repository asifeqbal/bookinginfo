import React, { Component } from 'react';
import logo from './logo.svg'; 
import './App.css';
import Cards from './Cards';
import Image from './Image';
import Desc from './Desc';
import Product from './Product';
import Search from './Search';

import MovieList from './components/movies/movieList';

class App extends Component {
 constructor(props){
   super(props);

   this.state={
     searchQuery:""
   };
  
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
   handleSearchClick(data){
    console.log(data);

    let currentState = this.state;
    currentState.couter++;
    this.setState(currentState);
    }

    handleChange(data){
        console.log(data);
        let currentState = this.state;
        currentState.searchQuery = data;
        this.setState(currentState);
    }
 
 render(){
   return(
    <div className="container">                

        <Search 
        search={this.handleSearchClick} 
        searchText={this.handleChange} /> 
      {/* <label className="badge" >{this.state.counter} </label>       */}
     
      <MovieList search={this.state.searchQuery}  />
      
    
    
     </div>
     
   );
 }
}

export default App;
