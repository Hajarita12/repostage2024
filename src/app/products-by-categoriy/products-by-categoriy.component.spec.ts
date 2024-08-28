import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByCategoriyComponent } from './products-by-categoriy.component';

describe('ProductsByCategoriyComponent', () => {
  let component: ProductsByCategoriyComponent;
  let fixture: ComponentFixture<ProductsByCategoriyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsByCategoriyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsByCategoriyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
