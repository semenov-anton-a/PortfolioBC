import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgWarningComponent } from './msg-warning.component';

describe('MsgWarningComponent', () => {
  let component: MsgWarningComponent;
  let fixture: ComponentFixture<MsgWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
