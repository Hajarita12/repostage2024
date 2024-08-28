import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInfoCommercialComponent } from './show-info-commercial.component';

describe('ShowInfoCommercialComponent', () => {
  let component: ShowInfoCommercialComponent;
  let fixture: ComponentFixture<ShowInfoCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInfoCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInfoCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
