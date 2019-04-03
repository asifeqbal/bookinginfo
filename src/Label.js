import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Label extends Component {
 constructor(){
   super();
 }
 render(){
   return(
     <div>
     
    <label>{this.props.name}</label>&nbsp;&nbsp;&nbsp;
    <input type="text" placeholder={this.props.placeholder} name="username"></input>
    </div>
   );
 }
}

export default Label;
