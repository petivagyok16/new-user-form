import { initialState } from "../state/user-form.state";
import { selectSearchResults$ } from "./user-form.selectors";
import {
  fetchFavoriteMoviesErrorState,
  fetchFavoriteMoviesState,
  fetchFavoriteMoviesSuccessState
} from "../../testdata/user-form-state.testdata";

describe('User form selectors', () => {
  it(`should select search results`, () => {
    expect(selectSearchResults$.projector(initialState)).toEqual([]);
    expect(selectSearchResults$.projector(fetchFavoriteMoviesState)).toEqual([]);
    expect(selectSearchResults$.projector(fetchFavoriteMoviesSuccessState)).toEqual(['test', 'test 2']);
    expect(selectSearchResults$.projector(fetchFavoriteMoviesErrorState)).toEqual([]);
  });
});
