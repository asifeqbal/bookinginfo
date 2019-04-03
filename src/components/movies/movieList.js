import React, { Component } from 'react';
import MovieDetails from '../movies/moviedetails';

class MovieList extends Component {
 constructor(){
   super();
   this.state ={
       movies:
       [{ "id": 1, "name": "Bahu bali 2", "year": 2017, "image_url": "https://images-na.ssl-images-amazon.com/images/I/71q6iQTY-VL._SX466_.jpg", "production_house": "ABC Movies", "rating": 5, "type": "epic", "language": "Telugu", "date": "2017-09-30T18:30:00.000Z" }, { "id": 2, "name": "Captain Marvel", "year": 2019, "image_url": "https://contentserver.com.au/assets/667514_captain_marvel_v8.jpg", "production_house": "Australia X", "rating": 4, "type": "fiction", "language": "English", "date": "2019-01-31T18:30:00.000Z" }]

   }
 }
 render(){
     let listOfMovieDisplayed = this.state.movies.map((movie,index)=>{
         return <MovieDetails key={index} details= {movie}/>
     })
   return(
    
        <div>
            {listOfMovieDisplayed}
        </div>

   );
 }
}

export default MovieList;
