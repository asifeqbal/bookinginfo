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
     couter:0
   };
  
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }
   handleSearchClick(data){
    console.log(data);

    let currentState = this.state;
    currentState.couter++;
    this.setState(currentState);
    }

    handleChange(data){
        console.log(data);
    }
 
 render(){
   return(
    <div className="container">                

        <Search search={this.handleSearchClick} /> 
        <label>{this.state.counter} </label>      
      {/* <Search search={this.handleSearchClick}/>
      <Cards/>
      <Image/>
      <Desc/>
      <Product/> */}
      <MovieList/>
      
    
    
     </div>
     
   );
 }
}

export default App;
