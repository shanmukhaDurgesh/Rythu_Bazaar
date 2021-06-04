import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictLevelDemandOrdersComponent } from './district-level-demand-orders.component';

describe('DistrictLevelDemandOrdersComponent', () => {
  let component: DistrictLevelDemandOrdersComponent;
  let fixture: ComponentFixture<DistrictLevelDemandOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictLevelDemandOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictLevelDemandOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
