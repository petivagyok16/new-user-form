import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { mappedMovieResults } from '../../testdata/omdb-api-response-to-results-mapper.testdata';
import { omdbApiResponse } from '../../testdata/omdb-api-response.testdata';
import { fetchFavoriteMovies, fetchFavoriteMoviesError, fetchFavoriteMoviesSuccess } from '../actions/user-form.actions';
import { UserFormEffects } from './user-form.effects';

describe('User form effects', () => {
  let effects: UserFormEffects;
  let httpClientSpy: Spy<HttpClient>;
  let actions$: Observable<Action>;
  let store: MockStore;

  beforeEach(() => {
    httpClientSpy = createSpyFromClass(HttpClient);

    TestBed.configureTestingModule({
      providers: [
        UserFormEffects,
        provideMockActions(() => actions$),
        {
          provide: HttpClient,
          useValue: httpClientSpy,
        },
        provideMockStore(),
      ],
    });

    store = TestBed.inject(MockStore);
    effects = TestBed.inject(UserFormEffects);
  });

  describe(`Fetch favorite movies`, () => {
    let action: Action;

    beforeEach(() => {
      action = fetchFavoriteMovies({ searchTerm: 'test' });
      actions$ = hot('-a', { a: action });
    });

    it('should dispatch success', () => {
      const completion = fetchFavoriteMoviesSuccess({ results: mappedMovieResults });

      const response$ = cold('-b', { b: omdbApiResponse });
      const expected$ = cold('--c', { c: completion });

      httpClientSpy.get.and.returnValue(response$);

      expect(effects.fetchFavoriteMovies$).toBeObservable(expected$);
    });

    describe('in case of error response', () => {
      beforeEach(() => {
        const response$ = cold('-#', {}, { error: {} });
        httpClientSpy.get.and.returnValue(response$);
      });

      it(`should dispatch 'fetchFavoriteMoviesError'`, () => {
        const completion = fetchFavoriteMoviesError({ error: 'Something went wrong!' });
        const expected$ = cold('--(c#)', { c: completion }, { error: {} });

        expect(effects.fetchFavoriteMovies$).toBeObservable(expected$);
      });
    });
  });
});
