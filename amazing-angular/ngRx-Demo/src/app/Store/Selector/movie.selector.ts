import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Movie } from 'src/app/Models/movies';
import { MovieState } from '../Reducers/movie.reducer';
import { RouterReducerState, getRouterSelectors } from '@ngrx/router-store';

/** Feature selector can be used instead of normal selector, and we can use it */
//const moviefeatureSelector = createFeatureSelector<MovieState>('movies');
export const movieSelector = createSelector(
  (state: MovieState) => state.movies,
  (movies: ReadonlyArray<Movie>) => movies
);

export const movieUserSelector = createSelector(
  (state: MovieState) => state.movies,
  (state: MovieState) => state.user,
  (movies: ReadonlyArray<Movie>, user: Readonly<string>) => {
    return movies.filter((movie: Movie) => movie.userName === user);
  }
);

export const greater = (amount: number) =>
  createSelector(movieSelector, (movies) => {
    return movies.filter((movie: Movie) => movie.earning >= amount);
  });

const routeParams = createSelector(
  (state: MovieState) => state.router.state,
  (state) => state.params
);

/** Instead or routerSerializer getRouterSelector can be used */
// const selectRouter = createFeatureSelector<RouterReducerState>('router');

// export const {
//   selectCurrentRoute, // select the current route
//   selectFragment, // select the current route fragment
//   selectQueryParams, // select the current route query params
//   selectQueryParam, // factory function to select a query param
//   selectRouteParams, // select the current route params
//   selectRouteParam, // factory function to select a route param
//   selectRouteData, // select the current route data
//   selectUrl, // select the current url
// } = getRouterSelectors(selectRouter);

// export const movie = createSelector(
//   movieSelector,
//   selectRouteParams,
//   (movies, { id }) => {
//     console.log(movies, id)
//     return movies.filter((m) => m.id === Number(id))[0];
//   }
// );

export const movie = createSelector(
  movieSelector,
  routeParams,
  (movies, { id }) => {
    console.log(movies, id)
    return movies.filter((m) => m.id === Number(id))[0];
  }
);