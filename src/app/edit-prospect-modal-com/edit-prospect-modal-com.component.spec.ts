import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProspectModalComComponent } from './edit-prospect-modal-com.component';

describe('EditProspectModalComComponent', () => {
  let component: EditProspectModalComComponent;
  let fixture: ComponentFixture<EditProspectModalComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProspectModalComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProspectModalComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
