import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssistantModalComponent } from './edit-assistant-modal.component';

describe('EditAssistantModalComponent', () => {
  let component: EditAssistantModalComponent;
  let fixture: ComponentFixture<EditAssistantModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAssistantModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAssistantModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
