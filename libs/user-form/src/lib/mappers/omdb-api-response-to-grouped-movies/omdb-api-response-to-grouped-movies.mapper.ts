import { GroupedMovie } from "../../interfaces/grouped-movie.interface";
import { OmdbApiResponse } from "../../interfaces/omdb-api-response.interface";
import { SearchResultResponse } from "../../interfaces/search-result-response.interface";

interface MovieGroupedByKeys { [key: string]: readonly string[] };

export const mapOmdbApiResponseToGroupedMovies = (omdbApiResponse: OmdbApiResponse): readonly GroupedMovie[] => {
  const moviesGroupedByKeys = omdbApiResponse.Search.reduce((prev: MovieGroupedByKeys, curr: SearchResultResponse) => {
    const key = curr.Year;

    if (prev[key]) {
      return { ...prev, [key]: [...prev[key], curr.Title] };
    }

    return {...prev, [key]: [curr.Title] };
  }, {} as MovieGroupedByKeys);

  return Object.entries(moviesGroupedByKeys).map((item: [string, readonly string[]]) => ({
    year: item[0],
    movies: item[1]
  }));
}
