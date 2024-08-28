import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDevisDetailsComponent } from './modal-devis-details.component';

describe('ModalDevisDetailsComponent', () => {
  let component: ModalDevisDetailsComponent;
  let fixture: ComponentFixture<ModalDevisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDevisDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDevisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
