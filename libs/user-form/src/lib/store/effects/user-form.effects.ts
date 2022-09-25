import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concat, of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  fetchFavoriteMovies,
  FetchFavoriteMoviesAction,
  fetchFavoriteMoviesError,
  fetchFavoriteMoviesSuccess
} from '../actions/user-form.actions';
import { OmdbApiResponse } from '../../interfaces/omdb-api-response.interface';
import { mapOmdbApiResponseToResults } from '../../mappers/omdb-api-response-to-results/omdb-api-response-to-results.mapper';
import { mapOmdbApiResponseToGroupedMovies } from '../../mappers/omdb-api-response-to-grouped-movies/omdb-api-response-to-grouped-movies.mapper';

@Injectable()
export class UserFormEffects {
  private static apiKey: string = '83513884';
  private static type: string = 'movie';
  private static url: string = `https://www.omdbapi.com/?apikey=${UserFormEffects.apiKey}&type=${UserFormEffects.type}&s=`;

  fetchFavoriteMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchFavoriteMovies),
      switchMap((action: FetchFavoriteMoviesAction) => this.http.get<OmdbApiResponse>(`${UserFormEffects.url}${action.searchTerm}`)),
      map((omdbApiResponse: OmdbApiResponse) => {
        if (omdbApiResponse.Response === 'False') {
          throw new Error(omdbApiResponse.Error);
        }

        return fetchFavoriteMoviesSuccess({
          results: mapOmdbApiResponseToResults(omdbApiResponse),
          groupedMovies: mapOmdbApiResponseToGroupedMovies(omdbApiResponse)
        })
      }),
      catchError((error: HttpErrorResponse) =>
        concat(of(fetchFavoriteMoviesError({ error: 'Something went wrong!' })), throwError(error)
      )),
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly http: HttpClient,
  ) {}
}
