import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAssistantSideComponent } from './crud-assistant-side.component';

describe('CrudAssistantSideComponent', () => {
  let component: CrudAssistantSideComponent;
  let fixture: ComponentFixture<CrudAssistantSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudAssistantSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAssistantSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
