import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessModalEditDevComponent } from './sucess-modal-edit-dev.component';

describe('SucessModalEditDevComponent', () => {
  let component: SucessModalEditDevComponent;
  let fixture: ComponentFixture<SucessModalEditDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessModalEditDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessModalEditDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
