import React from 'react';

import './movieItem.css'

const MovieItem =({movie, onDelete, onLike})=>{
    return(<div className="movie-container">
           <h1>{movie.title}</h1>
           <h2>{movie.category}</h2>
           <div>    
           <i className="fa fa-thumbs-up" style={{color: movie.userLike === 1 ? 'blue' : ''}} onClick={()=>{onLike(movie.id)}}/> {movie.likes} 
           <i className="fa fa-thumbs-down" onClick={()=>{alert('down')}}/>{movie.dislikes}
           </div>
           <button onClick={() =>onDelete(movie.id)}> DELETE </button>
    </div>)
}

export default MovieItem;

