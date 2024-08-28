import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommercialSidebarComponent } from './add-commercial-sidebar.component';

describe('AddCommercialSidebarComponent', () => {
  let component: AddCommercialSidebarComponent;
  let fixture: ComponentFixture<AddCommercialSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommercialSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommercialSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
