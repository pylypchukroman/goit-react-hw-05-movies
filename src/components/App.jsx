import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
// import Navigation from './Navigation/Navigation';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoivesPage = lazy(() => import('../pages/MoivesPage/MoivesPage'));
const MovieDetailsPage = lazy(() =>
  import('./MovieDetailsPage/MovieDetailsPage')
);

export const App = () => {
  return (
    <div>
      {/* <Navigation /> */}
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
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};
