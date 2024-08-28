import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessEditArticleComponent } from './success-edit-article.component';

describe('SuccessEditArticleComponent', () => {
  let component: SuccessEditArticleComponent;
  let fixture: ComponentFixture<SuccessEditArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessEditArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessEditArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
