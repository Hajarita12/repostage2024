import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProspectModalComponent } from './add-prospect-modal.component';

describe('AddProspectModalComponent', () => {
  let component: AddProspectModalComponent;
  let fixture: ComponentFixture<AddProspectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProspectModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProspectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
