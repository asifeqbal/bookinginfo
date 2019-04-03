import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Search extends Component{

    constructor(props){

        super(props);

    } 
        
        render(){
            return(
                <div className="row">
                <input type="text"
                placeholder="Search"
                
                />
                <button className="ml-1 btn btn-primary"
                onClick={()=>{
                    this.props.search("Hello world")
                }}
                >Search</button>
                
                
                </div>
            )
        }
    }

    export default Search;