import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonrySt1Component } from './masonry-st1.component';

describe('MasonrySt1Component', () => {
  let component: MasonrySt1Component;
  let fixture: ComponentFixture<MasonrySt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasonrySt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonrySt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
