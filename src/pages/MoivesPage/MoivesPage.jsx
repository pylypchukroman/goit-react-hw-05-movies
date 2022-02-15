import styles from './MoivesPage.module.css';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import qs from 'query-string';
import { searchMovies } from 'Utils/MovieAPI';

const MoivesPage = () => {
  const [input, setInput] = useState('');
  const history = useHistory();
  const location = useLocation();
  const { query } = qs.parse(location.search);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    query && searchMovies(query).then(movies => setMovies(movies));
  }, [query]);

  const handleChange = e => {
    const { value } = e.target;
    setInput(value);
  };

  const setSearch = input => {
    history.push({ pathname: '/movies', search: '?query=' + input });
  };

  const hendleSubmit = e => {
    e.preventDefault();
    if (!input) return;
    setSearch(input);
  };

  return (
    <div className={styles.form__wrapper}>
      <form className={styles.SearchForm} onSubmit={hendleSubmit}>
        <input
          className={styles.SearchForm__input}
          type="text"
          autoComplete="off"
          value={input}
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
        />
        <button type="submit" className={styles.SearchForm__button}>
          Search
        </button>
      </form>
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

// console.log(getMoviesList().then(data => console.log(data)));
export default MoivesPage;
