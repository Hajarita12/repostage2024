import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessModalAddProspectComponent } from './success-modal-add-prospect.component';

describe('SuccessModalAddProspectComponent', () => {
  let component: SuccessModalAddProspectComponent;
  let fixture: ComponentFixture<SuccessModalAddProspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessModalAddProspectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessModalAddProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
