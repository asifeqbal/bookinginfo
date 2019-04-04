import React, { Component } from 'react';
import MovieList from './components/movies/movieList';


class Toggler extends Component {
 constructor(props){
   super(props);

    console.log('i am constructor');
   this.state={
    buttonText:"Hide",
    show:true
  }
        this.toggle = this.toggle.bind(this);  
 }

 toggle(){
     let currentState = this.state;
     currentState.show = !currentState.show;
     currentState.buttonText=currentState.show?'Hide':'Show';
     
     this.setState(currentState);    
 }
 componentDidMount(){
     console.log('i am mount');
 }

 componentWillUpdate(){
    console.log('Component Update');

 }


 render(){

    let content ='';
    if(this.state.show){
        content=<MovieList search={''} />
    }
   return(   
  
        <div>
            <button onClick = {this.toggle}>{this.state.buttonText}</button>
            {content}
        </div>

   )
 }
}

export default Toggler;
