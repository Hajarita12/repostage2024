import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationModalAssistantComponent } from './confirmation-modal-assistant.component';

describe('ConfirmationModalAssistantComponent', () => {
  let component: ConfirmationModalAssistantComponent;
  let fixture: ComponentFixture<ConfirmationModalAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationModalAssistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationModalAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
