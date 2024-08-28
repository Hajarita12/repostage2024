import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModalDevisComponent } from './edit-modal-devis.component';

describe('EditModalDevisComponent', () => {
  let component: EditModalDevisComponent;
  let fixture: ComponentFixture<EditModalDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditModalDevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditModalDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
