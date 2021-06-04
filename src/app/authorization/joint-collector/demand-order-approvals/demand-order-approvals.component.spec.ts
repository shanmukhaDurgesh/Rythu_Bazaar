import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandOrderApprovalsComponent } from './demand-order-approvals.component';

describe('DemandOrderApprovalsComponent', () => {
  let component: DemandOrderApprovalsComponent;
  let fixture: ComponentFixture<DemandOrderApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandOrderApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandOrderApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
