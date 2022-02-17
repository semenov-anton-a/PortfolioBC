import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetalesComponent } from './display-detales.component';

describe('DisplayDetalesComponent', () => {
  let component: DisplayDetalesComponent;
  let fixture: ComponentFixture<DisplayDetalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDetalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDetalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
