import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordAdvComponent } from './reset-password-adv.component';

describe('ResetPasswordAdvComponent', () => {
  let component: ResetPasswordAdvComponent;
  let fixture: ComponentFixture<ResetPasswordAdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPasswordAdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
