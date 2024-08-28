import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddProspectComponent } from './modal-add-prospect.component';

describe('ModalAddProspectComponent', () => {
  let component: ModalAddProspectComponent;
  let fixture: ComponentFixture<ModalAddProspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddProspectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
