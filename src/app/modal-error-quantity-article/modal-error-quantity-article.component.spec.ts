import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalErrorQuantityArticleComponent } from './modal-error-quantity-article.component';

describe('ModalErrorQuantityArticleComponent', () => {
  let component: ModalErrorQuantityArticleComponent;
  let fixture: ComponentFixture<ModalErrorQuantityArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalErrorQuantityArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalErrorQuantityArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
