import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCategorieComponent } from './crud-categorie.component';

describe('CrudCategorieComponent', () => {
  let component: CrudCategorieComponent;
  let fixture: ComponentFixture<CrudCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
