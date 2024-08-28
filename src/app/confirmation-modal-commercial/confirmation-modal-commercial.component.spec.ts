import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationModalCommercialComponent } from './confirmation-modal-commercial.component';

describe('ConfirmationModalCommercialComponent', () => {
  let component: ConfirmationModalCommercialComponent;
  let fixture: ComponentFixture<ConfirmationModalCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationModalCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationModalCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
