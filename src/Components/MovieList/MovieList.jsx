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

/*<div class="container text-center">
<div class="row">
<div class="col">
  Column
</div>
<div class="col">
  Column
</div>
<div class="col">
  Column
</div>
</div>
</div>
*/