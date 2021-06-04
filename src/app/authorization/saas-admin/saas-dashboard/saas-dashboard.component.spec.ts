import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasDashboardComponent } from './saas-dashboard.component';

describe('SaasDashboardComponent', () => {
  let component: SaasDashboardComponent;
  let fixture: ComponentFixture<SaasDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaasDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
