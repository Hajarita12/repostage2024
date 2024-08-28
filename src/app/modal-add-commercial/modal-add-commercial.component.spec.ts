import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddCommercialComponent } from './modal-add-commercial.component';

describe('ModalAddCommercialComponent', () => {
  let component: ModalAddCommercialComponent;
  let fixture: ComponentFixture<ModalAddCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
