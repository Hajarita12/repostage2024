import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProfilAssistantComponent } from './set-profil-assistant.component';

describe('SetProfilAssistantComponent', () => {
  let component: SetProfilAssistantComponent;
  let fixture: ComponentFixture<SetProfilAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetProfilAssistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetProfilAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
