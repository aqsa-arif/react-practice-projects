import React from 'react'
import classes from './Movie.module.css';

const Movie = (props) => {
    const { title, openingText, releaseDate } = props;

    const capitalize = (value) => {
       return  value.charAt(0).toUpperCase() + value.slice(1);
    }

    return (
        <li className={classes.movie}>
            <h2>{capitalize(title)}</h2>
            <h3>{releaseDate}</h3>
            <p>{capitalize(openingText)}</p>
        </li>
    )
}

export default Movie
