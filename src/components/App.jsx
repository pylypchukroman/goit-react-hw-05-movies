// import HomePage from 'pages/HomePage/HomePage';
// import MoivesPage from 'pages/MoivesPage/MoivesPage';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
// import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import Navigation from './Navigation/Navigation';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoivesPage = lazy(() => import('../pages/MoivesPage/MoivesPage'));
const MovieDetailsPage = lazy(() =>
  import('./MovieDetailsPage/MovieDetailsPage')
);

export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoivesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};
