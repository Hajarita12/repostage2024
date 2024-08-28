import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsieajourStockSideComponent } from './msieajour-stock-side.component';

describe('MsieajourStockSideComponent', () => {
  let component: MsieajourStockSideComponent;
  let fixture: ComponentFixture<MsieajourStockSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsieajourStockSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsieajourStockSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
