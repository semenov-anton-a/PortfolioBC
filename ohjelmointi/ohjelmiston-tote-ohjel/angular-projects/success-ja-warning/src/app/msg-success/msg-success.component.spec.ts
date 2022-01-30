import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgSuccessComponent } from './msg-success.component';

describe('MsgSuccessComponent', () => {
  let component: MsgSuccessComponent;
  let fixture: ComponentFixture<MsgSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
