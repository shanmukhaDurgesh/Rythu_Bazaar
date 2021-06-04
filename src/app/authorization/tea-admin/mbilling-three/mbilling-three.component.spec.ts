import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbillingThreeComponent } from './mbilling-three.component';

describe('MbillingThreeComponent', () => {
  let component: MbillingThreeComponent;
  let fixture: ComponentFixture<MbillingThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbillingThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbillingThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
