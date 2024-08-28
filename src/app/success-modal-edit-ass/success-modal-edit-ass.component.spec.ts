import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessModalEditAssComponent } from './success-modal-edit-ass.component';

describe('SuccessModalEditAssComponent', () => {
  let component: SuccessModalEditAssComponent;
  let fixture: ComponentFixture<SuccessModalEditAssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessModalEditAssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessModalEditAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
