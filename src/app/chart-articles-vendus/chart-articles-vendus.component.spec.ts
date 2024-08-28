import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartArticlesVendusComponent } from './chart-articles-vendus.component';

describe('ChartArticlesVendusComponent', () => {
  let component: ChartArticlesVendusComponent;
  let fixture: ComponentFixture<ChartArticlesVendusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartArticlesVendusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartArticlesVendusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
