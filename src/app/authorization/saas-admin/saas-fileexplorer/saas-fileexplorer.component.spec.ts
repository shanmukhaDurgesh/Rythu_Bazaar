import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasFileexplorerComponent } from './saas-fileexplorer.component';

describe('SaasFileexplorerComponent', () => {
  let component: SaasFileexplorerComponent;
  let fixture: ComponentFixture<SaasFileexplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaasFileexplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasFileexplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
