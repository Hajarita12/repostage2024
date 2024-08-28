import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationModalArticleComponent } from './confirmation-modal-article.component';

describe('ConfirmationModalArticleComponent', () => {
  let component: ConfirmationModalArticleComponent;
  let fixture: ComponentFixture<ConfirmationModalArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationModalArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationModalArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
