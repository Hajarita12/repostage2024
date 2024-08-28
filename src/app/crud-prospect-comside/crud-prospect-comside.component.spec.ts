import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProspectComsideComponent } from './crud-prospect-comside.component';

describe('CrudProspectComsideComponent', () => {
  let component: CrudProspectComsideComponent;
  let fixture: ComponentFixture<CrudProspectComsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudProspectComsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudProspectComsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
