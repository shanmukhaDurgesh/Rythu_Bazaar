import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveApplicationApprovalsComponent } from './leave-application-approvals.component';

describe('LeaveApplicationApprovalsComponent', () => {
  let component: LeaveApplicationApprovalsComponent;
  let fixture: ComponentFixture<LeaveApplicationApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveApplicationApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveApplicationApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
