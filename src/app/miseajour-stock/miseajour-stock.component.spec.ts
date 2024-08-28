import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiseajourStockComponent } from './miseajour-stock.component';

describe('MiseajourStockComponent', () => {
  let component: MiseajourStockComponent;
  let fixture: ComponentFixture<MiseajourStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiseajourStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiseajourStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
