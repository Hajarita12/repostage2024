import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceFinalCommercialComponent } from './espace-final-commercial.component';

describe('EspaceFinalCommercialComponent', () => {
  let component: EspaceFinalCommercialComponent;
  let fixture: ComponentFixture<EspaceFinalCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceFinalCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceFinalCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
