import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonrySt2Component } from './masonry-st2.component';

describe('MasonrySt2Component', () => {
  let component: MasonrySt2Component;
  let fixture: ComponentFixture<MasonrySt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasonrySt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonrySt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
