import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationModalCategorieComponent } from './confirmation-modal-categorie.component';

describe('ConfirmationModalCategorieComponent', () => {
  let component: ConfirmationModalCategorieComponent;
  let fixture: ComponentFixture<ConfirmationModalCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationModalCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationModalCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
