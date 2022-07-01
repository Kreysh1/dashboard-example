import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Charts2006Component } from './charts2006.component';

describe('Charts2006Component', () => {
  let component: Charts2006Component;
  let fixture: ComponentFixture<Charts2006Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Charts2006Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Charts2006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
