import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasRolesComponent } from './saas-roles.component';

describe('SaasRolesComponent', () => {
  let component: SaasRolesComponent;
  let fixture: ComponentFixture<SaasRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaasRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
