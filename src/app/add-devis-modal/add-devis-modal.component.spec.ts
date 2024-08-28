import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDevisModalComponent } from './add-devis-modal.component';

describe('AddDevisModalComponent', () => {
  let component: AddDevisModalComponent;
  let fixture: ComponentFixture<AddDevisModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDevisModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDevisModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
