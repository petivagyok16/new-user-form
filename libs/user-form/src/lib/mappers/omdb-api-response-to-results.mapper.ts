import { SearchResultResponse } from "../interfaces/search-result-response.interface";

export const mapOmdbApiResponseToResults = (searchResults: readonly SearchResultResponse[]): readonly string[] =>
searchResults.map((searchResult: SearchResultResponse) => searchResult.Title);
