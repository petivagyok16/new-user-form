import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { fetchFavoriteMovies } from '../../store/actions/user-form.actions';

import { selectSearchResults$ } from '../../store/selectors/user-form.selectors';

@Component({
  selector: 'lib-user-form-card-container',
  templateUrl: './user-form-card-container.component.html',
  styleUrls: ['./user-form-card-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormCardContainerComponent {
  searchResults$ = this.store.select(selectSearchResults$);

  constructor(
    private router: Router,
    private readonly store: Store,
  ) {}

  onSearch(searchTerm: string): void {
    this.store.dispatch(fetchFavoriteMovies({ searchTerm }));
  }

  onNavigateToSummary(userFormValue: any): void { // TODO: interface
    this.router.navigate(['thank-you'], { state: userFormValue });
  }
}
