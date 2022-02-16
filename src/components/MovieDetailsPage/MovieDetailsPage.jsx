import style from './MovieDetailsPage.module.css';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { getMoviesDetails } from 'Utils/MovieAPI';
import { Route, Switch, useHistory, useLocation } from 'react-router';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const history = useHistory();
  const location = useLocation();
  const URLwrapper = 'https://image.tmdb.org/t/p/w400/';

  useEffect(() => {
    getMoviesDetails(movieId).then(data => setMovie(data));
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? '/');
  };
  // const historeChange = () => {
  //   history.goBack();
  // };

  return (
    <div className={style.wrapper}>
      <button type="button" className={style.button} onClick={onGoBack}>
        Go back
      </button>

      <div className={style.movie}>
        <img
          className={style.img}
          src={movie.poster_path ? `${URLwrapper}${movie.poster_path}` : null}
          alt=""
        />
        <div className={style.info__wrapper}>
          <h2 className={style.title}>{movie.original_title}</h2>
          <p>User score: {movie.vote_average}</p>
          <p className={style.overview}>Overview</p>
          <p>{movie.overview}</p>
          {movie.genres && (
            <>
              <p className={style.genres}>Genres: </p>
              <ul className={style.genres__list}>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      <div className={style.additional__info}>
        <p>Additional information</p>
        <ul className={style.add__info__wrapper}>
          <li>
            <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<h1>LOADING...</h1>}>
        <Switch>
          <Route path="/movies/:movieId/cast">
            <Cast />
          </Route>
          <Route path="/movies/:movieId/reviews">
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
