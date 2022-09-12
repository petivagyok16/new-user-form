import { mappedMovieResults } from '../testdata/omdb-api-response-to-results-mapper.testdata';
import { omdbApiResponse } from '../testdata/omdb-api-response.testdata';
import { mapOmdbApiResponseToResults } from './omdb-api-response-to-results.mapper';

describe(`mapOmdbApiResponseToResults`, () => {
  it(`should map omdb api response to movie results`, () => {
    expect(mapOmdbApiResponseToResults(omdbApiResponse)).toEqual(mappedMovieResults);
  });
});
