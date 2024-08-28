import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAssistantComponent } from './crud-assistant.component';

describe('CrudAssistantComponent', () => {
  let component: CrudAssistantComponent;
  let fixture: ComponentFixture<CrudAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudAssistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
