import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbillingTwoComponent } from './mbilling-two.component';

describe('MbillingTwoComponent', () => {
  let component: MbillingTwoComponent;
  let fixture: ComponentFixture<MbillingTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbillingTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbillingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
