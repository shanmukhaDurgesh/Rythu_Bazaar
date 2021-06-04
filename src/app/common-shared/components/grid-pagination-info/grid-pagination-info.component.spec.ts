import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPaginationInfoComponent } from './grid-pagination-info.component';

describe('GridPaginationInfoComponent', () => {
  let component: GridPaginationInfoComponent;
  let fixture: ComponentFixture<GridPaginationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPaginationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPaginationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
