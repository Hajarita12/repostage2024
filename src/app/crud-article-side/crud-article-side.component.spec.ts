import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudArticleSideComponent } from './crud-article-side.component';

describe('CrudArticleSideComponent', () => {
  let component: CrudArticleSideComponent;
  let fixture: ComponentFixture<CrudArticleSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudArticleSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudArticleSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
