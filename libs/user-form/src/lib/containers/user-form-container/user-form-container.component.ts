import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-user-form-container',
  templateUrl: './user-form-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormContainerComponent implements OnInit {

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['enter']);
  }
}
