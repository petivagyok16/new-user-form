import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-user-form-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent {
  readonly userFormData?: any;

  constructor(router: Router) {
    this.userFormData = router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    console.log(this.userFormData);
  }
}
