import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceAssistantComponent } from './espace-assistant.component';

describe('EspaceAssistantComponent', () => {
  let component: EspaceAssistantComponent;
  let fixture: ComponentFixture<EspaceAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceAssistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
