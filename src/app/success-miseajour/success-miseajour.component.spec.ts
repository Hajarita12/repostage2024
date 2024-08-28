import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessMiseajourComponent } from './success-miseajour.component';

describe('SuccessMiseajourComponent', () => {
  let component: SuccessMiseajourComponent;
  let fixture: ComponentFixture<SuccessMiseajourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessMiseajourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessMiseajourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
