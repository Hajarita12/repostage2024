import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModalDevisAssiComponent } from './edit-modal-devis-assi.component';

describe('EditModalDevisAssiComponent', () => {
  let component: EditModalDevisAssiComponent;
  let fixture: ComponentFixture<EditModalDevisAssiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditModalDevisAssiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditModalDevisAssiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
