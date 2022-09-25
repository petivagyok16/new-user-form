import { createReducer, on } from '@ngrx/store';

import { UserFormState } from '../../interfaces/user-form-state.interface';
import {
  fetchFavoriteMovies,
  fetchFavoriteMoviesError,
  FetchFavoriteMoviesErrorAction,
  fetchFavoriteMoviesSuccess,
  FetchFavoriteSuccessAction
} from '../actions/user-form.actions';
import { initialState } from '../state/user-form.state';

export const userFormReducer = createReducer(
  initialState,
  on(
    fetchFavoriteMovies,
    (state: UserFormState): UserFormState => ({
      ...state,
      isLoading: true,
    })
  ),

  on(
    fetchFavoriteMoviesSuccess,
    (state: UserFormState, action: FetchFavoriteSuccessAction): UserFormState => ({
      ...state,
      isLoading: false,
      results: action.results,
      groupedMovies: action.groupedMovies,
    })
  ),

  on(
    fetchFavoriteMoviesError,
    (state: UserFormState, { error }: FetchFavoriteMoviesErrorAction): UserFormState => ({
      ...state,
      isLoading: false,
      error,
    })
  ),
);
