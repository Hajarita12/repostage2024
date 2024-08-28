import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisStockComsideComponent } from './vis-stock-comside.component';

describe('VisStockComsideComponent', () => {
  let component: VisStockComsideComponent;
  let fixture: ComponentFixture<VisStockComsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisStockComsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisStockComsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
