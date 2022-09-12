import { OmdbApiResponse } from "../interfaces/omdb-api-response.interface";
import { SearchResultResponse } from "../interfaces/search-result-response.interface";

export const mapOmdbApiResponseToResults = (omdbApiResponse: OmdbApiResponse): readonly string[] =>
omdbApiResponse.Search.map((searchResult: SearchResultResponse) => searchResult.Title);
