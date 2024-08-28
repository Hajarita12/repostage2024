import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommercialModalComponent } from './edit-commercial-modal.component';

describe('EditCommercialModalComponent', () => {
  let component: EditCommercialModalComponent;
  let fixture: ComponentFixture<EditCommercialModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCommercialModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCommercialModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
