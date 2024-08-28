import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCategorieSideComponent } from './crud-categorie-side.component';

describe('CrudCategorieSideComponent', () => {
  let component: CrudCategorieSideComponent;
  let fixture: ComponentFixture<CrudCategorieSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCategorieSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCategorieSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
