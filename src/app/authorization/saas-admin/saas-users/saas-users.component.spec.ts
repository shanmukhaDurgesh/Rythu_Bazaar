import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasUsersComponent } from './saas-users.component';

describe('SaasUsersComponent', () => {
  let component: SaasUsersComponent;
  let fixture: ComponentFixture<SaasUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaasUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
