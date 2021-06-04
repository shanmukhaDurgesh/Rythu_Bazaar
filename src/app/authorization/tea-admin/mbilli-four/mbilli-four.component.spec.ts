import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbilliFourComponent } from './mbilli-four.component';

describe('MbilliFourComponent', () => {
  let component: MbilliFourComponent;
  let fixture: ComponentFixture<MbilliFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbilliFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbilliFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
