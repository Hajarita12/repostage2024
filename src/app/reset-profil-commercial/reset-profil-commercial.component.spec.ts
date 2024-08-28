import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetProfilCommercialComponent } from './reset-profil-commercial.component';

describe('ResetProfilCommercialComponent', () => {
  let component: ResetProfilCommercialComponent;
  let fixture: ComponentFixture<ResetProfilCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetProfilCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetProfilCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
