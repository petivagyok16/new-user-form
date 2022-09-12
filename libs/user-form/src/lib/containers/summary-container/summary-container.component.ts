import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserFormValue } from '../../interfaces/user-form-value.interface';

@Component({
  selector: 'lib-user-form-summary-container',
  templateUrl: './summary-container.component.html',
  styleUrls: ['./summary-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryContainerComponent {
  readonly userFormData?: UserFormValue;

  constructor(router: Router) {
    this.userFormData = router.getCurrentNavigation()?.extras.state as UserFormValue;
  }
}
