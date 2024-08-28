import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialSidebarComponent } from './commercial-sidebar.component';

describe('CommercialSidebarComponent', () => {
  let component: CommercialSidebarComponent;
  let fixture: ComponentFixture<CommercialSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
