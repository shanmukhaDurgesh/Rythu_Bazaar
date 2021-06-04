import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MBillingComponent } from './m-billing.component';

describe('MBillingComponent', () => {
  let component: MBillingComponent;
  let fixture: ComponentFixture<MBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
