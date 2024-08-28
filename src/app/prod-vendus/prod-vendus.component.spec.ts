import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdVendusComponent } from './prod-vendus.component';

describe('ProdVendusComponent', () => {
  let component: ProdVendusComponent;
  let fixture: ComponentFixture<ProdVendusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdVendusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdVendusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
