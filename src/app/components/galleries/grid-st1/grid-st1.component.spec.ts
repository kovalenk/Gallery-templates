import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSt1Component } from './grid-st1.component';

describe('GridSt1Component', () => {
  let component: GridSt1Component;
  let fixture: ComponentFixture<GridSt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
