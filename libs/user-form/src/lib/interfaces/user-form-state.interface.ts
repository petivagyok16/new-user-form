export interface UserFormState {
  readonly isLoading: boolean;
  readonly results: readonly string[];
  readonly error: string | null;
}
