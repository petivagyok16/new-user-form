import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, StoreModule } from '@ngrx/store';

import { components } from './components';
import { containers } from './containers';
import { UserFormRoutingModule } from './user-form-routing.module';
import { UserFormState } from './interfaces/user-form-state.interface';
import { USER_FORM } from './store/selectors/user-form.selectors';
import { UserFormEffects } from './store/effects/user-form.effects';
import { userFormReducer } from './store/reducers/user-form.reducers';

export const FEATURE_REDUCER_TOKEN = new InjectionToken<ActionReducer<UserFormState>>('User Form Feature Reducers');

@NgModule({
  declarations: [...containers, ...components],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule,
    UserFormRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature(USER_FORM, FEATURE_REDUCER_TOKEN),
    EffectsModule.forFeature([UserFormEffects]),
  ],
  providers: [
    {
      provide: FEATURE_REDUCER_TOKEN,
      useValue: userFormReducer,
    },
  ],
})
export class UserFormModule {}
