import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormContainerComponent {
  constructor(router: Router) {
    router.navigate(['enter']);
  }
}
