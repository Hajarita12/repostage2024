import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceCommerciauxComponent } from './performance-commerciaux.component';

describe('PerformanceCommerciauxComponent', () => {
  let component: PerformanceCommerciauxComponent;
  let fixture: ComponentFixture<PerformanceCommerciauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceCommerciauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceCommerciauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
