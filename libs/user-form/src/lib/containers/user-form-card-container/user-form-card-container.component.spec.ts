import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { MockComponents, MockDirectives } from 'ng-mocks';

import { UserFormCardContainerComponent } from './user-form-card-container.component';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import { selectSearchResults$ } from '../../store/selectors/user-form.selectors';
import { mappedMovieResults } from '../../testdata/omdb-api-response-to-results-mapper.testdata';
import { fetchFavoriteMovies } from '../../store/actions/user-form.actions';

describe('UserFormCardContainerComponent', () => {
  let component: UserFormCardContainerComponent;
  let fixture: ComponentFixture<UserFormCardContainerComponent>;
  let routerSpy: Spy<Router>;
  let store: MockStore;
  let dispatchSpy: jasmine.Spy;

  const getUserFormComponent = (): DebugElement => fixture.debugElement.query(By.css('[data-id="user-form-component"]'));

  beforeEach(waitForAsync(() => {
    routerSpy = createSpyFromClass(Router);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        UserFormCardContainerComponent,
        MockComponents(UserFormComponent, MatCard),
        MockDirectives(MatCardContent, MatCardTitle),
      ],
      providers: [
        provideMockStore(),
        { provide: Router, useValue: routerSpy },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    store.overrideSelector(selectSearchResults$, mappedMovieResults);
    dispatchSpy = spyOn(store, 'dispatch');

    fixture = TestBed.createComponent(UserFormCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render user form', () => {
    expect(getUserFormComponent().nativeElement).not.toBeNull();
  });

  describe(`when user form component emits 'search' event`, () => {
    let searchSpy: jasmine.Spy;
    const searchTerm: string = 'test';

    beforeEach(() => {
      searchSpy = spyOn(component, 'onSearch').and.callThrough();
      getUserFormComponent().componentInstance.search.emit(searchTerm);
    });

    it(`should dispatch store action with the search term`, () => {
      expect(dispatchSpy).toHaveBeenCalledWith(fetchFavoriteMovies({ searchTerm }));
      expect(dispatchSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe(`when user form component emits 'navigateToSummary' event`, () => {
    const mockData: string = 'test';

    beforeEach(() => {
      getUserFormComponent().componentInstance.navigateToSummary.emit(mockData);
    });

    it(`should call router with the proper navigation params`, () => {
      expect(routerSpy.navigate).toHaveBeenCalledWith(['thankyou'], { state: mockData });
      expect(routerSpy.navigate).toHaveBeenCalledTimes(1);
    });
  });
});
