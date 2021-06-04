import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RythuBazzarPayrollApprovalsComponent } from './rythu-bazzar-payroll-approvals.component';

describe('RythuBazzarPayrollApprovalsComponent', () => {
  let component: RythuBazzarPayrollApprovalsComponent;
  let fixture: ComponentFixture<RythuBazzarPayrollApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RythuBazzarPayrollApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RythuBazzarPayrollApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
