import style from './MovieDetailsPage.module.css';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesDetails } from 'Utils/MovieAPI';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMoviesDetails(movieId).then(data => setMovie(data));
  }, [movieId]);
  console.log(movie);

  return (
    <>
      <div className={style.movie}>
        <img
          className={style.img}
          src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          alt=""
        />
        <div className={style.info__wrapper}>
          <h2 className={style.title}>{movie.original_title}</h2>
          <p>User score: {movie.vote_average}</p>
          <p className={style.overview}>Overview</p>
          <p>{movie.overview}</p>
          <p className={style.genres}>Genres</p>
          {/* <p>{movie.genres}</p> */}
        </div>
      </div>
      <div className={style.additional__info}>
        <p>Additional ifrormation</p>
        <Link>Cast</Link>
        <Link>Reviews</Link>
      </div>
    </>
  );
};

// console.log(getMoviesDetails(634649));
export default MovieDetailsPage;
