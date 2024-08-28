import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessEditCatComponent } from './sucess-edit-cat.component';

describe('SucessEditCatComponent', () => {
  let component: SucessEditCatComponent;
  let fixture: ComponentFixture<SucessEditCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessEditCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessEditCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
