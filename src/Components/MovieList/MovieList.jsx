import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

const MovieList = ({movies, deleteMovie}) => {
  return (
    <div className='movie-list'>
        {movies.map(movie => (
          <MovieCard 
            movie={movie} 
            key={movie.id}
            deleteMovie={deleteMovie}
          />))}
    </div>
  )
}

export default MovieList