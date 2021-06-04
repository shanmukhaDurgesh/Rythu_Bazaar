import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyManagementComponent } from './academy-management.component';

describe('AcademyManagementComponent', () => {
  let component: AcademyManagementComponent;
  let fixture: ComponentFixture<AcademyManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademyManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
