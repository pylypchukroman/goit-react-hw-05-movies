import HomePage from 'pages/HomePage/HomePage';
import MoivesPage from 'pages/MoivesPage/MoivesPage';

import { Route, Switch } from 'react-router';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import Navigation from './Navigation/Navigation';

export const App = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/movies">
          <MoivesPage />
        </Route>
        {/* <Route>
          <NotFoundPage />
        </Route> */}
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
      </Switch>
    </div>
  );
};
