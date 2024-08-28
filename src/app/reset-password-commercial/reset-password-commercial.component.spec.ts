import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordCommercialComponent } from './reset-password-commercial.component';

describe('ResetPasswordCommercialComponent', () => {
  let component: ResetPasswordCommercialComponent;
  let fixture: ComponentFixture<ResetPasswordCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPasswordCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
