import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisStockComComponent } from './vis-stock-com.component';

describe('VisStockComComponent', () => {
  let component: VisStockComComponent;
  let fixture: ComponentFixture<VisStockComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisStockComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisStockComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
