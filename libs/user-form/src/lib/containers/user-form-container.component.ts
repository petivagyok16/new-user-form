import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormContainerComponent {}
