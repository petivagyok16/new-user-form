import { FormControl } from '@angular/forms';

export interface UserForm {
  name: FormControl<string>;
  username: FormControl<string | null>;
  country: FormControl<string>;
  postCode: FormControl<string | null>;
  favoriteMovie: FormControl<string | null>;
}