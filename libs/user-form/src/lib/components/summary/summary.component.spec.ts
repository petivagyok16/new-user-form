import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatList, MatListItem } from '@angular/material/list';
import { MockComponents } from 'ng-mocks';

import { SummaryComponent } from './summary.component';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import { UserFormValue } from '../../interfaces/user-form-value.interface';

@Component({
  template: `<lib-user-form-summary [userFormData]="userFormData"></lib-user-form-summary>`,
})
class WrapperComponent {
  userFormData: UserFormValue = {
    name: 'testname',
    username: 'testusername',
    country: 'test country',
    postCode: 'test postcode',
    favoriteMovie: 'test movie',
  };
}

describe('SummaryComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;

  const getUsernameElement = (): DebugElement => fixture.debugElement.query(By.css('[data-id="username-list-item"]'));
  const getPostCodeElement = (): DebugElement => fixture.debugElement.query(By.css('[data-id="post-code-list-item"]'));
  const getFavoriteMovieElement = (): DebugElement => fixture.debugElement.query(By.css('[data-id="favorite-movie-list-item"]'));

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        SummaryComponent,
        WrapperComponent,
        MockComponents(UserFormComponent, MatList, MatListItem),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    fixture.detectChanges();
  });

  describe(`by default`, () => {
    it(`should render username list item`, () => {
      expect(getUsernameElement()).not.toBeNull();
    });

    it(`should render post code list item`, () => {
      expect(getPostCodeElement()).not.toBeNull();
    });

    it(`should render favorite movie list item`, () => {
      expect(getFavoriteMovieElement()).not.toBeNull();
    });
  });

  describe(`when optional input properies are not provided`, () => {
    beforeEach(() => {
      fixture.componentInstance.userFormData = {
        name: 'testname',
        country: 'test country',
      };

      fixture.detectChanges();
    });

    it(`should not render username list item`, () => {
      expect(getUsernameElement()).toBeNull();
    });

    it(`should not render post code list item`, () => {
      expect(getPostCodeElement()).toBeNull();
    });

    it(`should not render favorite movie list item`, () => {
      expect(getFavoriteMovieElement()).toBeNull();
    });
  });
});
