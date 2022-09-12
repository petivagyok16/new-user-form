import { UserFormState } from "../interfaces/user-form-state.interface";
import { initialState } from "../store/state/user-form.state";

export const fetchFavoriteMoviesState: UserFormState = {
  ...initialState,
  isLoading: true,
  results: [],
  error: null,
};

export const fetchFavoriteMoviesSuccessState: UserFormState = {
  ...initialState,
  isLoading: false,
  results: ['test', 'test 2'],
  error: null,
};

export const fetchFavoriteMoviesErrorState: UserFormState = {
  ...initialState,
  isLoading: false,
  results: [],
  error: 'test error',
};
