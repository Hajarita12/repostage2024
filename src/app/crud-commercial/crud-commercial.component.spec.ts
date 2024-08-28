import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCommercialComponent } from './crud-commercial.component';

describe('CrudCommercialComponent', () => {
  let component: CrudCommercialComponent;
  let fixture: ComponentFixture<CrudCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
