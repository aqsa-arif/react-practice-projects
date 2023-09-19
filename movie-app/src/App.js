import './App.css'
import { Fragment, useCallback, useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setLoading(true);
    try {
      // const response = await fetch('https://swapi.dev/api/films/');
      const response = await fetch('https://movie-app-5fabe-default-rtdb.firebaseio.com/movie.json');
      if (!response.ok) {
        //throw error as fetch api can't understand error status codes and doesn't throw error
        throw new Error('Something went wrong');
      }
      const data = await response.json(); 

      // const transformedData = data.results.map(movie => {
      //   return {
      //     id: movie.episode_id,
      //     title: movie.title,
      //     releaseDate: movie.release_date,
      //     openingText: movie.opening_crawl, 
      //   }
      // }) 

      const transformedData = [];
      for (const key in data) {
        transformedData.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        });
      }

      setMovies(transformedData);
    }
    catch (error) {
      setError(error.message);
      console.log(error.message);
    }
    setLoading(false);
  }, []);


  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);


  let content;
  content = <p>No movies found.</p>

  if (loading) {
    content = <p>Loading...</p>
  }

  if (error) {
    content = <p>{error}</p>
  }

  if (movies.length > 0) {
    content = <MovieList movies={movies} />
  }

  const addMovie = async (movie) => {
    const response = await fetch('https://movie-app-5fabe-default-rtdb.firebaseio.com/movie.json', {
      method: 'post',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const data = await response.json();
    console.log(data);
  }

  return (
    <Fragment>
      <section>
        <AddMovie onaddMovie={addMovie} />
        <button type='button'
         className='fetchBtn'
         onClick={fetchMoviesHandler}>
          Fetch Movies
          </button>
      </section>

      <section> {content} </section>
    </Fragment>
  );
}

export default App;
