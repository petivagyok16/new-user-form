import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  fetchFavoriteMovies,
  FetchFavoriteMoviesAction,
  fetchFavoriteMoviesError,
  fetchFavoriteMoviesSuccess
} from '../actions/user-form.actions';
import { OmdbApiResponse } from '../../interfaces/omdb-api-response.interface';
import { mapOmdbApiResponseToResults } from '../../mappers/omdb-api-response-to-results.mapper';

@Injectable()
export class UserFormEffects {
  private static apiKey: string = '83513884';
  private static type: string = 'movie';
  private static url: string = `https://www.omdbapi.com/?apikey=${UserFormEffects.apiKey}&type=${UserFormEffects.type}&s=`;

  fetchFavoriteMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchFavoriteMovies),
      switchMap((action: FetchFavoriteMoviesAction) => this.http.get<OmdbApiResponse>(`${UserFormEffects.url}${action.searchTerm}`)),
      map((favoriteMoviesResponse: OmdbApiResponse) => {
        if (favoriteMoviesResponse.Response === 'False') {
          throw new Error(favoriteMoviesResponse.Error);
        }

        return fetchFavoriteMoviesSuccess({ results: mapOmdbApiResponseToResults(favoriteMoviesResponse.Search) })
      }),
      catchError((err: HttpErrorResponse) => {
        fetchFavoriteMoviesError({ error: 'Something went wrong!' })
        throw err;
      }),
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly http: HttpClient,
  ) {}
}
