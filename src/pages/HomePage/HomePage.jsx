import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMoviesList } from 'Utils/MovieAPI';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesList().then(data => setMovies(data));
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2>Trending today</h2>
      <ul className={styles.movie}>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} className={styles.link}>
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HomePage;
