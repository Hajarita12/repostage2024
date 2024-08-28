import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDevisSideComponent } from './crud-devis-side.component';

describe('CrudDevisSideComponent', () => {
  let component: CrudDevisSideComponent;
  let fixture: ComponentFixture<CrudDevisSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudDevisSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDevisSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
