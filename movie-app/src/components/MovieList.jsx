import React from 'react'
import Movie from './Movie'
import classes from './MovieList.module.css';


const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
       {
        props.movies.map(movie => {
            return <Movie
                key={movie.id}
                title={movie.title}
                openingText={movie.openingText}
                releaseDate={movie.releaseDate}
            />
        })
       }
    </ul>
  )
}

export default MovieList
