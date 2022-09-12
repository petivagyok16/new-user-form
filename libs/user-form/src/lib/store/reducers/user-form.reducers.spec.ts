import { userFormReducer } from './user-form.reducers';
import {
  fetchFavoriteMovies,
  fetchFavoriteMoviesError,
  fetchFavoriteMoviesSuccess,
} from '../actions/user-form.actions';
import {
  fetchFavoriteMoviesErrorState,
  fetchFavoriteMoviesState,
  fetchFavoriteMoviesSuccessState,
} from '../../testdata/user-form-state.testdata';

describe('User form reducer', () => {
  it(`should handle 'fetchFavoriteMovies' action`, () => {
    const action = fetchFavoriteMovies({ searchTerm: 'test' });

    expect(userFormReducer(undefined, action)).toEqual(fetchFavoriteMoviesState);
  });

  it(`should handle 'fetchFavoriteMoviesSuccess' action`, () => {
    const action = fetchFavoriteMoviesSuccess({ results: ['test', 'test 2'] });

    expect(userFormReducer(undefined, action)).toEqual(fetchFavoriteMoviesSuccessState);
  });

  it(`should handle 'fetchFavoriteMoviesError' action`, () => {
    const action = fetchFavoriteMoviesError({ error: 'test error' });

    expect(userFormReducer(undefined, action)).toEqual(fetchFavoriteMoviesErrorState);
  });
});
