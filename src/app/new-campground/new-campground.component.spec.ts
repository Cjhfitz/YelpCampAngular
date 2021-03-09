import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewCampgroundComponent } from './new-campground.component';

describe('NewCampgroundComponent', () => {
  let component: NewCampgroundComponent;
  let fixture: ComponentFixture<NewCampgroundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCampgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCampgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
