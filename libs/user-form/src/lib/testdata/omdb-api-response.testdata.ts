import { OmdbApiResponse } from "../interfaces/omdb-api-response.interface";
import { SearchResultResponse } from "../interfaces/search-result-response.interface";

const searchResultsResponse: readonly SearchResultResponse[] = [
  {
    Title: 'Test movie 1',
    Year: '1958',
    ImdbID: '123',
    Type: 'movie',
    Poster: 'test'
  },
  {
    Title: 'Test movie 2',
    Year: '1983',
    ImdbID: '1234',
    Type: 'movie',
    Poster: 'test2'
  },
  {
    Title: 'Test movie 3',
    Year: '1992',
    ImdbID: '12345',
    Type: 'movie',
    Poster: 'test3'
  },
];

export const omdbApiResponse: OmdbApiResponse = {
  Search: searchResultsResponse,
  Response: 'True',
  totalResults: '3',
};