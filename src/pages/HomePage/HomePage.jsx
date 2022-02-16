import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMoviesList } from 'Utils/MovieAPI';
import { useLocation } from 'react-router';
import styles from './HomePage.module.css';
import Navigation from 'components/Navigation/Navigation';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMoviesList().then(data => setMovies(data));
  }, []);

  return (
    <>
      <Navigation />
      <div className={styles.wrapper}>
        <h2>Trending today</h2>
        <ul className={styles.movie}>
          {movies &&
            movies.map(movie => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: { location } },
                  }}
                  className={styles.link}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
