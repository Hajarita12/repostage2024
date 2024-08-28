import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAddCatComponent } from './success-add-cat.component';

describe('SuccessAddCatComponent', () => {
  let component: SuccessAddCatComponent;
  let fixture: ComponentFixture<SuccessAddCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessAddCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessAddCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
