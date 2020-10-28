import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCampgroundComponent } from './show-campground.component';

describe('CampgroundComponent', () => {
  let component: ShowCampgroundComponent;
  let fixture: ComponentFixture<ShowCampgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCampgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCampgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
