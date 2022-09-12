import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { NavigationExtras, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponents, MockDirectives } from 'ng-mocks';

import { SummaryComponent } from '../../components/summary/summary.component';
import { Countries } from '../../enums/countries.enum';
import { UserFormValue } from '../../interfaces/user-form-value.interface';
import { SummaryContainerComponent } from './summary-container.component';

describe('SummaryContainerComponent', () => {
  let component: SummaryContainerComponent;
  let fixture: ComponentFixture<SummaryContainerComponent>;
  let getCurrentNavigationSpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    getCurrentNavigationSpy = jasmine.createSpy();

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        SummaryContainerComponent,
        MockComponents(SummaryComponent, MatCard),
        MockDirectives(MatCardContent, MatCardTitle),
      ],
      providers: [{
        provide: Router,
        useValue: {
          getCurrentNavigation: getCurrentNavigationSpy
        }
      }]
    })
    .compileComponents();
  }));

  const init = (navigationExtras: NavigationExtras) => {
    getCurrentNavigationSpy.and.returnValue({
      extras: navigationExtras
    });

    fixture = TestBed.createComponent(SummaryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  describe(`on class instantiated`, () => {
    const testUserFormValue: UserFormValue = {
      name: 'test name',
      country: Countries.IRELAND
    };

    beforeEach(() => {
      init({ state: testUserFormValue });
    });

    it(`should assign data from router state to userFormData`, () => {
      expect(component.userFormData).toEqual(testUserFormValue);
    });
  });
});
