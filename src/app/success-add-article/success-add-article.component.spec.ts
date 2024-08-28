import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAddArticleComponent } from './success-add-article.component';

describe('SuccessAddArticleComponent', () => {
  let component: SuccessAddArticleComponent;
  let fixture: ComponentFixture<SuccessAddArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessAddArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessAddArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
