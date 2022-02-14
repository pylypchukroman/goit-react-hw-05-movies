import { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { getMoviesList } from 'Utils/MovieAPI';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  //   const { url } = useRouteMatch();
  //   console.log(url);

  useEffect(() => {
    getMoviesList().then(data => setMovies(data));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul className={styles.movie}>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default HomePage;
