import { createFeatureSelector, createSelector } from "@ngrx/store";

import { UserFormState } from "../../interfaces/user-form-state.interface";

export const USER_FORM = 'user-form';

export const selectFeatureState = createFeatureSelector<UserFormState>(USER_FORM);
export const selectSearchResults$ = createSelector(selectFeatureState, (state: UserFormState) => state.results);
export const selectGroupedMovies$ = createSelector(selectFeatureState, (state: UserFormState) => state.groupedMovies);
