import { createAction, props } from '@ngrx/store';

const category = '[UserForm]';

export interface FetchFavoriteMoviesAction {
  readonly searchTerm: string;
}

export interface FetchFavoriteSuccessAction {
  readonly results: readonly string[];
}

export interface FetchFavoriteMoviesErrorAction {
  readonly error: string;
}

export const fetchFavoriteMovies = createAction(`${category} Fetch favorite movies`, props<FetchFavoriteMoviesAction>());
export const fetchFavoriteMoviesSuccess = createAction(`${category} Fetch favorite movies success`, props<FetchFavoriteSuccessAction>());
export const fetchFavoriteMoviesError = createAction(`${category} Fetch favorite movies error`, props<FetchFavoriteMoviesErrorAction>());
