import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Image extends Component {
 constructor(){
   super();
 }
 render(){
   return(
    <div class="card-group">    
    <div class="card">
      <img class="card-img-top" src="../logo.jpg" alt="Card image cap"></img>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  
  

   );
 }
}

export default Image;
