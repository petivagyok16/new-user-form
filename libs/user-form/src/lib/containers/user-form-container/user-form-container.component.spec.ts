import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';

import { UserFormContainerComponent } from './user-form-container.component';

describe('UserFormContainerComponent', () => {
  let component: UserFormContainerComponent;
  let fixture: ComponentFixture<UserFormContainerComponent>;
  let routerSpy: Spy<Router>;

  beforeEach(waitForAsync(() => {
    routerSpy = createSpyFromClass(Router);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [UserFormContainerComponent],
      providers: [{  provide: Router, useValue: routerSpy }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it(`should navigate to 'enter' route`, () => {
    expect(routerSpy.navigate).toHaveBeenCalledWith(['enter']);
    expect(routerSpy.navigate).toHaveBeenCalledTimes(1);
  });
});
