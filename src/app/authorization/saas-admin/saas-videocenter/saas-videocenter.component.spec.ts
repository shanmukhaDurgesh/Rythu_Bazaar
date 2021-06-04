import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasVideocenterComponent } from './saas-videocenter.component';

describe('SaasVideocenterComponent', () => {
  let component: SaasVideocenterComponent;
  let fixture: ComponentFixture<SaasVideocenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaasVideocenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasVideocenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
