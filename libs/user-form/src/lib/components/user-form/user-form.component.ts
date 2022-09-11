import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { COUNTRIES } from '../../constants/countries.constant';
import { UNITED_KINGDOM_POST_CODE_REGEXP } from '../../constants/united-kingdom-post-code.constant';
import { Countries } from '../../enums/countries.enum';
import { UserForm } from '../../interfaces/user-form.interface';
@Component({
  selector: 'lib-user-form-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent {

  readonly userForm: FormGroup<UserForm> = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern('[a-zA-Z]*')] }),
    username: new FormControl(''),
    country: new FormControl('', { nonNullable: true, validators: Validators.required }),
    postCode: new FormControl(''),
    favoriteMovie: new FormControl(''),
  });

  readonly countries = COUNTRIES;

  private readonly objectDestroySource$ = new Subject<void>();

  constructor() {
    this.listenOnCountryFormControlChanges();
  }

  onSubmitButtonClick(): void {
    this.userForm.markAllAsTouched();

    if (!this.userForm.valid) {
      return;
    }

    console.log(`SUBMITTED`);
  }

  private listenOnCountryFormControlChanges(): void {
    this.userForm.controls.country.valueChanges
      .pipe(takeUntil(this.objectDestroySource$))
      .subscribe((value: string) => {
        this.updatePostCodeControlValidators(value);
      });
  }

  private updatePostCodeControlValidators(value: string): void {
    const validators = [Validators.required, Validators.pattern(UNITED_KINGDOM_POST_CODE_REGEXP)];

    if (value === Countries.UNITED_KINGDOM) {
      this.userForm.controls.postCode.setValidators(validators);
      this.userForm.controls.postCode.updateValueAndValidity();
      return;
    }

    this.userForm.controls.postCode.removeValidators(validators);
    this.userForm.controls.postCode.updateValueAndValidity();
  }

  ngOnDestroy(): void {
    this.objectDestroySource$.next();
    this.objectDestroySource$.complete();
  }
}
