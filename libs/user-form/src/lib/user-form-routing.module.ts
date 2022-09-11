import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './components/summary/summary.component';
import { UserFormComponent } from './components/user-form/user-form.component';

import { UserFormContainerComponent } from './containers/user-form-container/user-form-container.component';

const routes: Routes = [
  {
    path: '',
    component: UserFormContainerComponent,
    children: [
      {
        path: 'enter',
        component: UserFormComponent
      },
      {
        path: 'thank-you',
        component: SummaryComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserFormRoutingModule {}
