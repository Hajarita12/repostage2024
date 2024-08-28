import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProspectWithSidebarComponent } from './add-prospect-with-sidebar.component';

describe('AddProspectWithSidebarComponent', () => {
  let component: AddProspectWithSidebarComponent;
  let fixture: ComponentFixture<AddProspectWithSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProspectWithSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProspectWithSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
