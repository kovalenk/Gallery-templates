import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonrySt4Component } from './masonry-st4.component';

describe('MasonrySt4Component', () => {
  let component: MasonrySt4Component;
  let fixture: ComponentFixture<MasonrySt4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasonrySt4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonrySt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
