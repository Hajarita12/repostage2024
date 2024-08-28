import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantSidebarComponent } from './assistant-sidebar.component';

describe('AssistantSidebarComponent', () => {
  let component: AssistantSidebarComponent;
  let fixture: ComponentFixture<AssistantSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistantSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
