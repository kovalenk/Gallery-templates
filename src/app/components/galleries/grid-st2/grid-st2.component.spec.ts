import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSt2Component } from './grid-st2.component';

describe('GridSt2Component', () => {
  let component: GridSt2Component;
  let fixture: ComponentFixture<GridSt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
