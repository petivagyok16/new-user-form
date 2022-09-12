import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { UserFormValue } from '../../interfaces/user-form-value.interface';

@Component({
  selector: 'lib-user-form-summary',
  templateUrl: './summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent {
  @Input() userFormData!: UserFormValue;
}
