import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProfilAssistantSidebarComponent } from './set-profil-assistant-sidebar.component';

describe('SetProfilAssistantSidebarComponent', () => {
  let component: SetProfilAssistantSidebarComponent;
  let fixture: ComponentFixture<SetProfilAssistantSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetProfilAssistantSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetProfilAssistantSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
