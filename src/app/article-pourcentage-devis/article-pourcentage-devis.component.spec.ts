import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePourcentageDevisComponent } from './article-pourcentage-devis.component';

describe('ArticlePourcentageDevisComponent', () => {
  let component: ArticlePourcentageDevisComponent;
  let fixture: ComponentFixture<ArticlePourcentageDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlePourcentageDevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePourcentageDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
