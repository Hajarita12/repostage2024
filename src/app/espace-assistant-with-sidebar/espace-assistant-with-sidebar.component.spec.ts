import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceAssistantWithSidebarComponent } from './espace-assistant-with-sidebar.component';

describe('EspaceAssistantWithSidebarComponent', () => {
  let component: EspaceAssistantWithSidebarComponent;
  let fixture: ComponentFixture<EspaceAssistantWithSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceAssistantWithSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceAssistantWithSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
