import React from 'react'
import MovieItem from '../MovieItem/movieItem'
import './moviesList.css'

const MoviesList=({movies, onDeleteMovie, onLikeMovie})=> {
  return (
    <div className="movielist-container">
      {movies.map(movie=>
        <MovieItem
          key={movie.id}
          movie={movie}
          onDelete={id => onDeleteMovie(id)}
          onLike={id => {onLikeMovie(id)}}
        />
      )}
    </div>
  )
}

export default MoviesList
