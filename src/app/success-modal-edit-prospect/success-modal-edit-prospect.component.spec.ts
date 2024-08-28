import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessModalEditProspectComponent } from './success-modal-edit-prospect.component';

describe('SuccessModalEditProspectComponent', () => {
  let component: SuccessModalEditProspectComponent;
  let fixture: ComponentFixture<SuccessModalEditProspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessModalEditProspectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessModalEditProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
