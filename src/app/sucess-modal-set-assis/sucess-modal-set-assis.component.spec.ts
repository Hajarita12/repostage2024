import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessModalSetAssisComponent } from './sucess-modal-set-assis.component';

describe('SucessModalSetAssisComponent', () => {
  let component: SucessModalSetAssisComponent;
  let fixture: ComponentFixture<SucessModalSetAssisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessModalSetAssisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessModalSetAssisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
