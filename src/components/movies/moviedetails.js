import React, { Component } from 'react';


class MovieDetails extends Component {
 constructor(porps){
   super(porps);
  
 }
 render(){
   return(
    
        <div>
            <h3>{this.props.detail.name}</h3>
        </div>

   );
 }
}

export default MovieDetails;
