import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddAssistantComponent } from './modal-add-assistant.component';

describe('ModalAddAssistantComponent', () => {
  let component: ModalAddAssistantComponent;
  let fixture: ComponentFixture<ModalAddAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddAssistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
