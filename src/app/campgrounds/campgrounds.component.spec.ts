import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CampgroundsComponent } from './campgrounds.component';

describe('CampgroundsComponent', () => {
  let component: CampgroundsComponent;
  let fixture: ComponentFixture<CampgroundsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CampgroundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampgroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
