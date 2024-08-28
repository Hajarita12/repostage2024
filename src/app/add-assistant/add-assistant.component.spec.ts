import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssistantComponent } from './add-assistant.component';

describe('AddAssistantComponent', () => {
  let component: AddAssistantComponent;
  let fixture: ComponentFixture<AddAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAssistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
