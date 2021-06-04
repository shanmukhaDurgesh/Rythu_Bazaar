import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RythuBazaarEmployeeAttendanceComponent } from './rythu-bazaar-employee-attendance.component';

describe('RythuBazaarEmployeeAttendanceComponent', () => {
  let component: RythuBazaarEmployeeAttendanceComponent;
  let fixture: ComponentFixture<RythuBazaarEmployeeAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RythuBazaarEmployeeAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RythuBazaarEmployeeAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
