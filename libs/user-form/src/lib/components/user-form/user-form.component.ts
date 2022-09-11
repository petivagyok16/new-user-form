import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-user-form-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent {}
