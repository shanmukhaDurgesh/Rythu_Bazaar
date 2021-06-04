import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RythuBazaarEmployeesComponent } from './rythu-bazaar-employees.component';

describe('RythuBazaarEmployeesComponent', () => {
  let component: RythuBazaarEmployeesComponent;
  let fixture: ComponentFixture<RythuBazaarEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RythuBazaarEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RythuBazaarEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
