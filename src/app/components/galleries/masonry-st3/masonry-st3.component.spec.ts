import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonrySt3Component } from './masonry-st3.component';

describe('MasonrySt3Component', () => {
  let component: MasonrySt3Component;
  let fixture: ComponentFixture<MasonrySt3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasonrySt3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonrySt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
