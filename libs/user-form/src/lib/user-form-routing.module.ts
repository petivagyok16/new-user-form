import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryContainerComponent } from './containers/summary-container/summary-container.component';
import { UserFormCardContainerComponent } from './containers/user-form-card-container/user-form-card-container.component';

import { UserFormContainerComponent } from './containers/user-form-container/user-form-container.component';

const routes: Routes = [
  {
    path: '',
    component: UserFormContainerComponent,
    children: [
      {
        path: 'enter',
        component: UserFormCardContainerComponent
      },
      {
        path: 'thankyou',
        component: SummaryContainerComponent
      },
    ]
  },
  {
    path: '**',
    component: UserFormCardContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserFormRoutingModule {}
