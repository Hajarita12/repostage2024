import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationDevisSideComponent } from './validation-devis-side.component';

describe('ValidationDevisSideComponent', () => {
  let component: ValidationDevisSideComponent;
  let fixture: ComponentFixture<ValidationDevisSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationDevisSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationDevisSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
