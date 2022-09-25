import { UserFormState } from "../interfaces/user-form-state.interface";
import { initialState } from "../store/state/user-form.state";

export const fetchFavoriteMoviesState: UserFormState = {
  ...initialState,
  isLoading: true,
  results: [],
  groupedMovies: [],
  error: null,
};

export const fetchFavoriteMoviesSuccessState: UserFormState = {
  ...initialState,
  isLoading: false,
  results: ['test', 'test 2'],
  groupedMovies: [],
  error: null,
};

export const fetchFavoriteMoviesErrorState: UserFormState = {
  ...initialState,
  isLoading: false,
  results: [],
  groupedMovies: [],
  error: 'test error',
};
