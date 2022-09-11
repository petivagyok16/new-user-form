import { SearchResultResponse } from "./search-result-response.interface";

export interface OmdbApiResponse {
  readonly Search: readonly SearchResultResponse[];
  readonly Response: 'True' | 'False';
  readonly Error?: string;
  readonly totalResults: string;
};
