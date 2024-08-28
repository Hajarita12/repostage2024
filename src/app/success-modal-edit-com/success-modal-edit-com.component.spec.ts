import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessModalEditComComponent } from './success-modal-edit-com.component';

describe('SuccessModalEditComComponent', () => {
  let component: SuccessModalEditComComponent;
  let fixture: ComponentFixture<SuccessModalEditComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessModalEditComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessModalEditComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
