import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceCommercialComponent } from './espace-commercial.component';

describe('EspaceCommercialComponent', () => {
  let component: EspaceCommercialComponent;
  let fixture: ComponentFixture<EspaceCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
