import { GroupedMovie } from "./grouped-movie.interface";

export interface UserFormState {
  readonly isLoading: boolean;
  readonly results: readonly string[];
  readonly error: string | null;
  readonly groupedMovies: readonly GroupedMovie[];
}
