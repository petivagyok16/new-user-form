import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { components } from './components';
import { containers } from './containers';
import { UserFormRoutingModule } from './user-form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserFormRoutingModule,
    RouterModule,
  ],
  declarations: [
    ...containers,
    ...components,
  ],
})
export class UserFormModule {}
