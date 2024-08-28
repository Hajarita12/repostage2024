import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAssistantComponent } from './login-assistant.component';

describe('LoginAssistantComponent', () => {
  let component: LoginAssistantComponent;
  let fixture: ComponentFixture<LoginAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAssistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
