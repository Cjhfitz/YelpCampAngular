import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditCampgroundComponent } from './edit-campground.component';

describe('EditCampgroundComponent', () => {
  let component: EditCampgroundComponent;
  let fixture: ComponentFixture<EditCampgroundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCampgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCampgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
