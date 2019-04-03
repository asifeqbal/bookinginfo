import React, { Component } from 'react';


class MovieDetails extends Component {
 constructor(porps){
   super(porps);
  
 }
 render(){
   return(
    
        <div>
            <h4>{this.props.details.name} </h4>
        </div>

   );
 }
}

export default MovieDetails;
