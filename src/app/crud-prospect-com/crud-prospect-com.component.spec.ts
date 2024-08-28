import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProspectComComponent } from './crud-prospect-com.component';

describe('CrudProspectComComponent', () => {
  let component: CrudProspectComComponent;
  let fixture: ComponentFixture<CrudProspectComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudProspectComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudProspectComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
