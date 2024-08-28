import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessModalSetComComponent } from './sucess-modal-set-com.component';

describe('SucessModalSetComComponent', () => {
  let component: SucessModalSetComComponent;
  let fixture: ComponentFixture<SucessModalSetComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessModalSetComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessModalSetComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
