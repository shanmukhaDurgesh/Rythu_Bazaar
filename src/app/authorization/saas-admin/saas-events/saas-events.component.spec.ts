import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasEventsComponent } from './saas-events.component';

describe('SaasEventsComponent', () => {
  let component: SaasEventsComponent;
  let fixture: ComponentFixture<SaasEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaasEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
