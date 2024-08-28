import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationModalDevisComponent } from './confirmation-modal-devis.component';

describe('ConfirmationModalDevisComponent', () => {
  let component: ConfirmationModalDevisComponent;
  let fixture: ComponentFixture<ConfirmationModalDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationModalDevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationModalDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
