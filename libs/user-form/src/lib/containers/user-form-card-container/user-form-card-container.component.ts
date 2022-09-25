import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { UserFormValue } from '../../interfaces/user-form-value.interface';
import { fetchFavoriteMovies } from '../../store/actions/user-form.actions';
import { selectGroupedMovies$, selectSearchResults$ } from '../../store/selectors/user-form.selectors';

@Component({
  selector: 'lib-user-form-card-container',
  templateUrl: './user-form-card-container.component.html',
  styleUrls: ['./user-form-card-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormCardContainerComponent {
  searchResults$ = this.store.select(selectSearchResults$);
  groupedMovies$ = this.store.select(selectGroupedMovies$);

  constructor(
    private router: Router,
    private readonly store: Store,
  ) {}

  onSearch(searchTerm: string): void {
    this.store.dispatch(fetchFavoriteMovies({ searchTerm }));
  }

  onNavigateToSummary(userFormValue: UserFormValue): void {
    this.router.navigate(['thankyou'], { state: userFormValue });
  }
}
