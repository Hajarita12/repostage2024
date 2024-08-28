import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessModalAddcomComponent } from './success-modal-addcom.component';

describe('SuccessModalAddcomComponent', () => {
  let component: SuccessModalAddcomComponent;
  let fixture: ComponentFixture<SuccessModalAddcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessModalAddcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessModalAddcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
