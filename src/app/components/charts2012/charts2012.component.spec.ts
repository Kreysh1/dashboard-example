import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Charts2012Component } from './charts2012.component';

describe('Charts2012Component', () => {
  let component: Charts2012Component;
  let fixture: ComponentFixture<Charts2012Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Charts2012Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Charts2012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
