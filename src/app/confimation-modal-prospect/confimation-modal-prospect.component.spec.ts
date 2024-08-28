import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfimationModalProspectComponent } from './confimation-modal-prospect.component';

describe('ConfimationModalProspectComponent', () => {
  let component: ConfimationModalProspectComponent;
  let fixture: ComponentFixture<ConfimationModalProspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfimationModalProspectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfimationModalProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
