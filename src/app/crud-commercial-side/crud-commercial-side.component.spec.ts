import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCommercialSideComponent } from './crud-commercial-side.component';

describe('CrudCommercialSideComponent', () => {
  let component: CrudCommercialSideComponent;
  let fixture: ComponentFixture<CrudCommercialSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCommercialSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCommercialSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
