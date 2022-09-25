import { UserFormState } from '../../interfaces/user-form-state.interface';

export const initialState: UserFormState = {
  isLoading: false,
  results: [],
  error: null,
  groupedMovies: [],
};
