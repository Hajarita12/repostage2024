import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssitantSidebarComponent } from './add-assitant-sidebar.component';

describe('AddAssitantSidebarComponent', () => {
  let component: AddAssitantSidebarComponent;
  let fixture: ComponentFixture<AddAssitantSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAssitantSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssitantSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
