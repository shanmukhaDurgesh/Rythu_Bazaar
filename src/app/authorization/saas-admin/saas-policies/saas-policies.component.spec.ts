import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasPoliciesComponent } from './saas-policies.component';

describe('SaasPoliciesComponent', () => {
  let component: SaasPoliciesComponent;
  let fixture: ComponentFixture<SaasPoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaasPoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
